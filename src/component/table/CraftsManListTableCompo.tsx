import { memo, useEffect, useState,useCallback } from "react";
import React from "react";
import { axiosCall   } from "../../utils/common/common";
import { API_IP_INFO } from "../../utils/apiUrl";
import { Pagination, useListPage } from "../../../src/commComponent/TablePageFooterCompo";

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

export const CraftsManListTableCompo =  React.memo(CraftsManListTable);