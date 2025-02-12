import { memo, useState, useEffect, useCallback } from "react";
import { axiosCall, useQuerySingle              } from "../../../../utils/common/common";
import { API_IP_INFO                            } from "../../../../utils/apiUrl";
import { CraftsManListTableCompo                } from "../../../../commComponent/CraftsManListTableCompo";
import React from "react";

interface craftChooseType {
    craftsManType        : string,
    craftsManVillageName : string,
    selectParamType : string,
    keyword  : string
}

interface craftSelectType {
    selectType : string,
    textValue  : string
}

const CraftsManListInfo = () => {

    const crafts_header                 = useQuerySingle("get-craft-header-type", null, `${API_IP_INFO}/crafts/crafts-table-header`, 60000 * 5, 60000 * 10, false, true, false);
    const [ chooseType, setChooseType ] = useState<craftChooseType>({ craftsManType : '', craftsManVillageName : '', selectParamType : '', keyword : ''  });
    const [ inputValue, setInputValue ] = useState<craftSelectType>({ selectType : '',    textValue : '' });
 
    // 입력탕 수정시
    const inputValChangeHandle = useCallback (( e : any ) => {
        const { name, value} = e.target;
        setInputValue({...inputValue, [name] : value});
    },[inputValue]);

    // 선택창 수정시
    const selectValChangeHandle = useCallback( ( e : any ) => {
        const { name, value} = e.target;
        setChooseType({...chooseType, [name] : value});
    },[chooseType]);

    
     // 조회 버튼 클릭
    const clickCraftsManButton = useCallback( () => {
        if ( !inputValue.selectType ) {
            alert("조회 구분을 선택해주세요.");
            return;
        }
        setChooseType({...chooseType, ['keyword'] :inputValue.textValue, ['selectParamType'] : inputValue.selectType });
    },[inputValue]);

    return (
        <>
            <div className='contenbox'>
                <div className='section2InnerDiv'>
                    <div className="contentstitle">
                        <h3>※ 장인 목록은 미접속 장인들을 위해 매달 수정 or 초기화가 됩니다.</h3>
                        <p>게임정보를 바탕으로 갱신을 하기 때문에 자신의 캐릭명이 없는 유저는 기술 목록을 확인해주세요.</p>
                    </div>
                    <div className="craftContentDiv">
                        <div className="craftTable1">
                            <div className="craftSearchBox">
                                <div className="mobild_w">
                                    <span>제조종류</span>
                                    <select className="select110"  defaultValue={""} name="craftsManType" onChange={selectValChangeHandle}>
                                        <option value="">전체</option>
                                        {
                                            crafts_header?.data?.craftsManMakeType &&  crafts_header?.data?.craftsManMakeType.map( (craftsInfo : any, index : number ) => {

                                                return (
                                                    <option key={'option1' + index} value={craftsInfo.COMM_CD}>{craftsInfo.COMM_CD_KOR_NAME}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <span>마을명</span>
                                    <select className="select110" defaultValue={""} name="craftsManVillageName" onChange={selectValChangeHandle}>
                                        <option value="">전체</option>
                                        {
                                            crafts_header?.data?.villageListInfo &&  crafts_header?.data?.villageListInfo.map( (craftsInfo2 : any, index : number ) => {

                                                return (
                                                    <option key={'option2' + index} value={craftsInfo2.VILLAGE_ID}>{craftsInfo2.VILLAGE_NAME}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <select className="select110" defaultValue={""} name="selectType" onChange={inputValChangeHandle}>
                                        <option value="">조회구분</option>
                                        <option value="CRST3">전체</option>
                                        <option value="CRST1">캐릭명</option>
                                        <option value="CRST2">마을명</option>
                                    </select>
                                </div>
                                <input type="text" onChange={inputValChangeHandle} value={inputValue.textValue ?? ''} name="textValue" className="inputCrafts"></input>
                                <button title="조회" className="btnsearch" onClick={clickCraftsManButton}>조회</button>
                            </div>
                            <div className="craft_mapbox">
                                <CraftsManListTableCompo
                                                        queryKeyValue = "get-crafts-list"
                                                        apiUrl        = "/crafts/list"
                                                        selectTType   = { chooseType }
                                ></CraftsManListTableCompo>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const CraftsManListInfoCompo = React.memo(CraftsManListInfo);
