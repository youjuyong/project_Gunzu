import  React, { useLayoutEffect } from "react";
import { useState, useCallback } from "react";
import { axiosCall        } from "../../utils/common/common";
import { API_IP_INFO      } from "../../utils/apiUrl";
import { heroInfo         } from "../../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/heroContextList";
import { RecallHeroReviewModal   } from "../modal/heroReviewModal/RecallHeroReviewModal"
import { Pagination, useListPage } from "../../../src/commComponent/TablePageFooterCompo";
import { Loading          } from "../../commComponent/Loading";
import { LazyImageHook    } from "../../../src/utils/common/common";

interface tableCompoType {
    queryKeyValue : string, // 리액트 쿼리 키값
    apiUrl        : string, // apiUrl
    selectTType   : any     // 헤더 선택 타입
}

interface heroListType {
    HERO_ID              : string, // 영웅 ID
    HERO_NAME            : string, // 영웅 이름
    HERO_NUM             : number, // 영웅 순번
    HERO_TYPE            : string, // 영웅타입
    HERO_VERSION_TYPE    : string, // 영웅 버전 타입
    HERO_WEAPON_TYPE_CODE: string, // 영웅 무기 타입 코드
    HERO_WEAPON_TYPE     : string, // 영웅 무기 타입
    HERO_BURF_TYPE       : string, // 영웅 버프 타입
    M_FORCE              : number, // 근력
    AGIL                 : number, // 순발력
    LIFE                 : number, // 생명력
    MAGIC_FORCE          : number, // 도력
    DEFAULT_LONG         : string, // 사거리
    DEFAULT_DAM          : string, // 기본 데미지
    DEFAULT_SHEILD       : string, // 기본 방어력
    AMULET               : string, // 부적 
    SELF_BURF            : string, // 자기 버프
    ELF_PREMIUM          : string, // 프리미엄 버프
    PLUS_STAT            : string, // 보너스 스탯
    SCORE                : number  // 리뷰 점수
}


const viewPageDataCnt = 5;  // 한페이지에 보여줄 데이터 갯수
const initCurrentPage = 1;  // 초기 페이지 쪽수
const viewPageCnt     = 5; // 하단 페이지 목록 표출 갯수 

const array = Array.from({ length : 5}, (v,i) =>  i);

const HeroListTableCp = ( props:tableCompoType ) => {
    const [heroList, setHeroList] = useState([]);
    // 소환영웅 리뷰 모달 open 여부
    const [addMdValue, setAddmdOpen] = useState({openBoolean : false, heroData : {}});
    const [isLoading,    setLoading] = useState(false);

    const [renderList, setViewData, setCurrentPage, currentPage, totalPage, firstPage, lastPage, slicedList] = useListPage(heroList, viewPageDataCnt, initCurrentPage, viewPageCnt);
    
    useLayoutEffect(() => {
        setLoading(true);
        axiosCall("get", API_IP_INFO + props.apiUrl, props.selectTType, (data) => {
            setHeroList(data);
            setLoading(false);
        });
    },[props.selectTType]);

    // 소환영웅 리뷰 모달 open 여부
    const setBitaddOpenValue = useCallback((openBoolean: boolean, horseData : heroListType ) => {
        setAddmdOpen({openBoolean : true, heroData : horseData});
    }, [addMdValue]);

    return (
        <>  
            { isLoading ? <Loading/> : <>
            <RecallHeroReviewModal modalBoolean={addMdValue.openBoolean} heroData={addMdValue.heroData} setModalIsOpen={setAddmdOpen}></RecallHeroReviewModal>
            <div className="rideListArea">
                          <div className="tableConbin">
                                <table className="table heroListTable pretend">
                                    <caption>탈것 리스트</caption>
                                    <thead>
                                        <tr>
                                            <th className="image_first">이미지</th>
                                            <th>이름</th>
                                            <th>영웅 타입 </th>
                                            <th>버전타입</th>
                                            <th>영웅 무기 타입</th>
                                            <th>능력치</th>
                                            <th>영웅 버프 타입</th>
                                            <th>리뷰 평점</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                         { slicedList.length === 0 ? <tr><th className="info_nvl">조건에 맞는 정보가 없습니다.</th></tr> :  <CreateTable data={slicedList} setBitaddOpenValue={setBitaddOpenValue}></CreateTable>}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                    totalPage={totalPage}
                                    firstPage={firstPage}
                                    lastPage={lastPage}
                            />
                </div>
                </>
            }
        </>
    )
}

export const CreateTable = ( props : any ) => {
    return (
        <>  
            {
                props?.data && props.data.map((v : heroListType, i : number) => {

                    const img = heroInfo.filter((hero : any) => hero.heroId === v.HERO_ID)[0],
                        score = Math.floor(Number(v.SCORE)),
                       urlSrc = img?.imgUrl,
                    heroName = v.HERO_NAME;

                    return(
                        <tr key={ v.HERO_ID + 'tr' }>
                            <td> 
                                <LazyImageHook src={urlSrc} alt={heroName} className='' height={150}/> 
                            </td>
                            <td><span className='horseNameSpan' onClick={() => { props.setBitaddOpenValue(true, v) }}>{v?.HERO_NAME}</span>
                            </td>
                            <td>{v?.HERO_TYPE}</td>
                            <td>{v?.HERO_VERSION_TYPE}</td>
                            <td className={v.HERO_WEAPON_TYPE_CODE === 'RHWT0' ? '' 
                                         : v.HERO_WEAPON_TYPE_CODE === 'RHWT1' ? 'gun'
                                         : v.HERO_WEAPON_TYPE_CODE === 'RHWT2' ? 'spear'
                                         : v.HERO_WEAPON_TYPE_CODE === 'RHWT3' ? 'ax'
                                         : v.HERO_WEAPON_TYPE_CODE === 'RHWT4' ? 'sword'
                                         : v.HERO_WEAPON_TYPE_CODE === 'RHWT5' ? 'magin_stick'
                                         : v.HERO_WEAPON_TYPE_CODE === 'RHWT6' ? 'bow'
                                         : v.HERO_WEAPON_TYPE_CODE === 'RHWT7' ? 'canon'
                                         : ''
                            }>{v?.HERO_WEAPON_TYPE}</td>

                            <td>
                                    <p>근력    : {v?.M_FORCE}</p>
                                    <p>순발력  : {v?.AGIL}</p>
                                    <p>생명력  : {v?.LIFE}</p>
                                    <p>도력    : {v?.MAGIC_FORCE}</p>
                            </td>
                            
                            <td>{v?.HERO_BURF_TYPE}</td>
                            <td>{array.map(( value : any, indexValue : number ) => {
                                 
                                 return(      
                                        <img
                                            key={v.HERO_ID +'imgStar' + String(indexValue) + '/' + i}
                                            src={value < score ? require("../../assets/image/star.png") : require("../../assets/image/blackstar.png")} 
                                            alt="starIcon"
                                        />
                                )})}
                                  <p className="starScoreP">평점 : {v.SCORE} / 5</p>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
};


export const HeroListTableCompo = React.memo(HeroListTableCp);