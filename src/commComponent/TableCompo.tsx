import  React from "react";
import { memo, useEffect, useState, useCallback } from "react";
import { axiosCall, useQuerySingle } from "utils/common/common";
import { API_IP_INFO  }               from "utils/apiUrl";
import { horseImgInfo }    from "../utils/ContextList";

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
}

const viewPageDataCnt = 5;  // 한페이지에 보여줄 데이터 갯수
const initCurrentPage = 1;  // 초기 페이지 쪽수
const viewPageCnt     = 5; // 하단 페이지 목록 표출 갯수 

const TableCompo = ( props:tableCompoType ) => {
    const [horseList, setHorseList] = useState([]);

    const [renderList, setViewData, setCurrentPage, currentPage, totalPage, firstPage, lastPage, slicedList] = useListPage(horseList);

    useEffect(() => {
        axiosCall("get", API_IP_INFO + props.apiUrl, props.selectTType, (data) => {
            setHorseList(data);
        });
    },[props.selectTType]);
    
    return (
        <>
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
                                            <th>수명</th>
                                            <th>최대능력치</th>
                                            <th>마구간 버프 타입</th>
                                            <th>마구간 버프 퍼센트</th>
                                            <th>대상전 가격</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                         { slicedList.length === 0 ? <tr><th className="info_nvl">조건에 맞는 정보가 없습니다.</th></tr> :  <CreateTable data={slicedList}></CreateTable>}
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
                    const img = horseImgInfo.filter((horse : any) => horse.horseId === v.HORSE_ID)[0];
                    return(
                        <tr key={ i }>
                            <td> <img src={img.imgUrl} className="" alt=""/></td>
                            <td>{v?.HORSE_NAME}</td>
                            <td>{v?.HORSER_LIMIT_CON}</td>
                            <td className={v.HORSE_BURF_TYPE_CODE === 'ATKT0' ? '' 
                                         : v.HORSE_BURF_TYPE_CODE === 'ATKT1' ? 'sword_attack'
                                         : v.HORSE_BURF_TYPE_CODE === 'ATKT2' ? 'magic_attack'
                                         : ''
                            }>{v?.HORSE_BURF_TYPE}</td>
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
                            <td>{v?.BIG_SHOP_PRICE}</td>
                        </tr>
                    )
                })
            }
        </>
    )
};

const useListPage = ( data : any ) => {
    const [renderList,   setRenderList] = useState([]);
    const [currentPage, setCurrentPage] = useState(initCurrentPage);
    const [viewData,       setViewData] = useState(viewPageDataCnt);
    const [viewPage]                    = useState(viewPageCnt);
    const totalPage = Math.ceil(renderList?.length / viewData);
    const pageGroup = Math.ceil(currentPage / viewPage);
    const lastPage  = pageGroup * viewPage > totalPage ? totalPage : pageGroup * viewPage;
    const firstPage = lastPage - (viewPage - 1) <= 0 ? 1 : lastPage - (viewPage - 1);

    useEffect(() => {
        setRenderList(data)
    },[data])

    const slicedList = ( data : any ) => {
        const startIndex = (currentPage - 1) * viewData;
        const endIndex = startIndex + viewData;
        return data?.slice(startIndex, endIndex)
    }

    return [renderList, setViewData, setCurrentPage, currentPage,  totalPage, firstPage, lastPage, slicedList(data)];
}

export const Pagination = ({setCurrentPage,currentPage, totalPage, firstPage, lastPage} : any ) => {

    const {pageNumbers, prev, next, first, last, paginate} = usePagination(setCurrentPage, totalPage, firstPage, lastPage);
    
    return (
        <>
            <div className="board_bottom centerlistboxbottom">
                                <div className="pagebtnbox">
                                    { firstPage === 1 ? null        : <button className="btn_pageleftmax"  onClick={first}title="맨 처음 페이지" ></button>}{/* <!--앞페이지로, 뒤페이지로 작업해주세요--> */}
                                    { firstPage === 1 ? null        : <button className="btn_pageleft"     onClick={prev} title="이전 페이지"></button>}{/* <!--앞페이지로, 뒤페이지로 작업해주세요--> */}
                                    { lastPage === totalPage ? null : <button className="btn_pageright"    onClick={next} title="다음 페이지"></button>}
                                    { lastPage === totalPage ? null : <button className="btn_pagerightmax" onClick={last} title="맨 마지막 페이지"></button>}
                                    <ul className="pagenumber">
                                        {
                                            pageNumbers && pageNumbers.map((num, i : number) => {
                                                return(
                                                    <li key = {i} className = { currentPage === num ? "click" : ""}onClick={() => paginate(num)}>{num}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
            </div>
        </>
    );
}

const usePagination = ( setCurrentPage : any , totalPage : any , firstPage : any , lastPage : any ) => {

    const pageNumbers = []; 
  
    for (let i = firstPage; i <= lastPage; i++) {  
      pageNumbers.push(i)
    }
  
    const prev = () => setCurrentPage(firstPage - 1);
  
    const next = () => setCurrentPage(lastPage + 1);
  
    const first = () => setCurrentPage(1)
  
    const last = () => setCurrentPage(totalPage);
    
    const paginate = (pageNum : number) => setCurrentPage(pageNum)
  
    const initPageNum = useCallback(() => {
      setCurrentPage(1)
    },[setCurrentPage])
    
    useEffect(() => {
      initPageNum()
    },[initPageNum, totalPage])
  
    return { pageNumbers, prev, next, first, last, paginate }
}
  

export const TableComponent = React.memo(TableCompo);