import { memo, useEffect, useState,useCallback } from "react";
import React from "react";
import { axiosCall   } from "../utils/common/common";
import { API_IP_INFO } from "../utils/apiUrl";

interface tableCompoType {
    queryKeyValue : string, // 리액트 쿼리 키값
    apiUrl        : string, // apiUrl
    selectTType   : any     // 헤더 선택 타입
}

interface craftsListType {
    CRAFT_MAN_ID                : string, // 장인 ID
    CRAFT_MAN_NAME              : string, // 장인 이름
    CRAFT_TYPE                  : string, // 장인 종류
    CRAFT_HAND_SKILL            : number, // 손재주
    CRAFT_TYPE_CODE             : string, // 장인 타입 코드
    VILLAGE_NAME                : string, // 마을 명
    CRAFT_LEVEL                 : number, // 장인 레벨
    UPD_DT                      : string, // 마지막 수정 일시
}

const viewPageDataCnt = 7;  // 한페이지에 보여줄 데이터 갯수
const initCurrentPage = 1;  // 초기 페이지 쪽수
const viewPageCnt     = 5;  // 하단 페이지 목록 표출 갯수 

const CraftsManListTable = ( props : tableCompoType ) => {
 
    const [ craftList, setCraftList ] = useState([]);
    
    const [renderList, setViewData, setCurrentPage, currentPage, totalPage, firstPage, lastPage, slicedList] = useListPage(craftList);

    useEffect(() => {
             axiosCall("get", API_IP_INFO + '/crafts/list', props.selectTType, (data) => {
                setCraftList(data);
            });
     },[props.selectTType]);

    return (
        <>
              <div className="rideListArea">
                    <div className="count">총 : { craftList?.length && craftList.length }건</div>
                                      <div className="tableConbin">
                                            <table className="table rideListTable snans">
                                                <caption>탈것 리스트</caption>
                                                <thead>
                                                    <tr>
                                                        <th>캐릭명</th>
                                                        <th>마을명</th>
                                                        <th>제조종류</th>
                                                        <th>기술레벨</th>
                                                        <th>손재주</th>
                                                        <th>마지막 갱신 일시</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                     { slicedList?.length ==   0 ? <tr><th className="info_nvl">조건에 맞는 정보가 없습니다.</th></tr> :  <CreateTable data={slicedList}></CreateTable>}
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
                props?.data && props.data.map((v : craftsListType, i : number) => {
                    
                    let className = '';

                    switch (v.CRAFT_TYPE_CODE) {
                        case 'CMLC1' : className = 'magin_stick';
                                       break;
                        case 'CMLC2' : className = 'spear';
                                       break;
                        case 'CMLC3' : className = 'gun';
                                        break;
                        case 'CMLC4' : className = 'sword';
                                        break;
                        case 'CMLC5' : className = 'ax';
                                       break;
                        case 'CMLC6' : className = 'bow';
                                       break;
                        case 'CMLC7' : className = 'armor';
                                       break;
                        case 'CMLC8' : className = 'canon';
                                       break;
                        case 'CMLC9' : className = 'dogu';
                                       break;
                        case 'CMLC10': className = 'mangto';
                                       break;
                        case 'CMLC11': className = 'hat';
                                       break;
                        case 'CMLC12': className = 'neckclass';
                                       break;
                        case 'CMLC13': className = 'ring';
                                       break; 
                        case 'CMLC14': className = 'amulet';
                                       break;  
                        case 'CMLC15': className = 'shoose';
                                       break; 
                        case 'CMLC16': className = 'belt';
                                       break;    
                        case 'CMLC17': className = 'cloth';
                                       break;  
                        case 'CMLC18': className = 'helmet';
                                       break;   
                        case 'CMLC19': className = 'drug';
                                       break;      
                        case 'CMLC20': className = 'food';
                                       break;               
                    }

                    return(
                        <tr key={ i }>
                            <td>{v?.CRAFT_MAN_NAME}</td>
                            <td className="">{v?.VILLAGE_NAME}</td>
                            <td className={className}>{v?.CRAFT_TYPE}</td>
                            <td>{v?.CRAFT_LEVEL}</td>
                            <td>{v?.CRAFT_HAND_SKILL}</td>
                            <td>{v?.UPD_DT}</td>
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
  
export const CraftsManListTableCompo =  React.memo(CraftsManListTable);