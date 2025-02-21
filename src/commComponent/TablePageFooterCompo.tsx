import  React from "react";
import { useEffect, useState, useCallback } from "react";

const viewPageDataCnt = 5;  // 한페이지에 보여줄 데이터 갯수
const initCurrentPage = 1;  // 초기 페이지 쪽수
const viewPageCnt     = 5; // 하단 페이지 목록 표출 갯수 

export const Pagination = ({setCurrentPage,currentPage, totalPage, firstPage, lastPage, useListPage} : any ) => {

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

export const useListPage = ( data : any ) => {
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
  
