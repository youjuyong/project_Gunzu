import  React from "react";
import { useEffect, useState, useCallback } from "react";
import { axiosCall        } from "../../utils/common/common";
import { API_IP_INFO      } from "../../utils/apiUrl";
import { horseImgInfo     } from "../../utils/ContextList";
import { HorseReviewModal } from "../modal/horseReviewModal/HorseReviewModal"
import { Pagination, useListPage } from "../../../src/commComponent/TablePageFooterCompo";

interface tableCompoType {
    queryKeyValue : string, // 리액트 쿼리 키값
    apiUrl        : string, // apiUrl
    selectTType   : any     // 헤더 선택 타입
}

interface horseListType {
    HORSE_ID                    : string, // 탈것 ID
    HORSE_NAME                  : string, // 탈것 이름
    HORSE_NUM                   : number, // 탈것 순번
    HORSER_LIMIT_CON            : string, // 탈것 탑승 조건
    HORSE_BURF_TYPE             : string, // 탈것 버프 타입
    HORSE_LIFE                  : string, // 탈것 수명
    HORSE_HOUSE_BURF_TYPE       : string, // 탈것 마구간 버프타입
    HORSE_BURF_PER_TYPE         : string, // 탈것 버프 퍼센트
    MAX_SPED                    : number, // 최대 속도
    MAX_AGIL                    : number, // 최대 순발력
    MAX_FORCE                   : number, // 최대 근력
    MAX_MAGIC_FORCE             : number, // 최대 도력
    BIG_SHOP_PRICE              : string, // 대상전 가격
    HORSE_BURF_TYPE_CODE        : string, // 탈것 버프 타입 코드
    HORSE_HOUSE_BURF_TYPE_CDOE  : string, // 탈것 마구간 버프 타입 코드
    SPECIAL_BURF_NUM            : number, // 탈것 특수버프 수치
    SCORE                       : number  // 탈것 평점
    SPECIAL_BURF                : string, // 스페셜 버프
    HORSE_PASSIVE               : string, // 말 패시브
    SPECIAL_SKILL               : string  // 스페셜 스킬
}


const viewPageDataCnt = 5;  // 한페이지에 보여줄 데이터 갯수
const initCurrentPage = 1;  // 초기 페이지 쪽수
const viewPageCnt     = 5; // 하단 페이지 목록 표출 갯수 

const array = Array.from({ length : 5}, (v,i) =>  i);

const HorseListTableCp = ( props:tableCompoType ) => {
    const [horseList, setHorseList] = useState([]);
    // 탈것 리뷰 모달 open 여부
    const [addMdValue, setAddmdOpen] = useState({openBoolean : false, horseData : {}});
    const [renderList, setViewData, setCurrentPage, currentPage, totalPage, firstPage, lastPage, slicedList] = useListPage(horseList);

    useEffect(() => {
        axiosCall("get", API_IP_INFO + props.apiUrl, props.selectTType, (data) => {
            setHorseList(data);
        });
    },[props.selectTType]);

    // 탈것 리뷰 모달 open 여부
    const setBitaddOpenValue = useCallback((openBoolean: boolean, horseData : horseListType ) => {
        setAddmdOpen({openBoolean : true, horseData : horseData});
    }, [addMdValue]);
    
    return (
        <>
            <HorseReviewModal modalBoolean={addMdValue.openBoolean} horsData={addMdValue.horseData} setModalIsOpen={setAddmdOpen}></HorseReviewModal>
            <div className="rideListArea">
                          <div className="tableConbin">
                                <table className="table rideListTable snans">
                                    <caption>탈것 리스트</caption>
                                    <thead>
                                        <tr>
                                            <th>이미지</th>
                                            <th>이름</th>
                                            <th>사용조건</th>
                                            <th>특수 버프 종류</th>
                                            <th>특수 버프 수치</th>
                                            <th>수명</th>
                                            <th>최대능력치</th>
                                            <th>마구간 버프 타입</th>
                                            <th>마구간 버프 퍼센트</th>
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
    )
}

export const CreateTable = ( props : any ) => {
    return (
        <>  
            {
                props?.data && props.data.map((v : horseListType, i : number) => {

                    const img = horseImgInfo.filter((horse : any) => horse.horseId === v.HORSE_ID)[0],
                        score = Math.floor(Number(v.SCORE));

                    return(
                        <tr key={ i }>
                            <td> <img src={img?.imgUrl} className="" alt=""/></td>
                            <td><span className='horseNameSpan' onClick={() => { props.setBitaddOpenValue(true, v) }}>{v?.HORSE_NAME}</span>
                            </td>
                            <td>{v?.HORSER_LIMIT_CON}</td>
                            <td className={v.HORSE_BURF_TYPE_CODE === 'ATKT0' ? '' 
                                         : v.HORSE_BURF_TYPE_CODE === 'ATKT1' ? 'sword_attack'
                                         : v.HORSE_BURF_TYPE_CODE === 'ATKT2' ? 'magic_attack'
                                         : v.HORSE_BURF_TYPE_CODE === 'ATKT3' ? 'sheild_burf'
                                         : ''
                            }>{v?.HORSE_BURF_TYPE}</td>
                            <td>{v?.SPECIAL_BURF_NUM}</td>
                            <td>{v?.HORSE_LIFE}</td>
                            <td>
                                    <p>속도   : {v?.MAX_SPED}</p>
                                    <p>근력   : {v?.MAX_FORCE}</p>
                                    <p>순발력 : {v?.MAX_AGIL}</p>
                                    <p>도력   : {v?.MAX_MAGIC_FORCE}</p>
                            </td>
                            <td className={v.HORSE_HOUSE_BURF_TYPE_CDOE === 'SHBP0' ? '' 
                                         : v.HORSE_HOUSE_BURF_TYPE_CDOE === 'SHBP1' ? 'sword_attack'
                                         : v.HORSE_HOUSE_BURF_TYPE_CDOE === 'SHBP2' ? 'magic_attack'
                                         : v.HORSE_HOUSE_BURF_TYPE_CDOE === 'SHBP3' ? 'sheild_burf'
                                         : ''
                            }>{v?.HORSE_HOUSE_BURF_TYPE}</td>
                            <td>{v?.HORSE_BURF_PER_TYPE}</td>
                            <td>{array.map(( value : any, indexValue : number ) => {
                                 
                                 return(      
                                        <img
                                            key={v.HORSE_ID +'imgStar' + String(indexValue) + '/' + i}
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


export const HorseListTableCompo = React.memo(HorseListTableCp);