
import { useLocation }           from "react-router-dom";
import LocationCompo             from "../../commComponent/LocationCompo";
import React, { useLayoutEffect, useEffect, useState, useCallback } from "react";
import { ExquipmentFlowModal }   from "../modal/flowModal/ExquipmentFlowModal"
import { SelectTagTypeStyle  }    from '../../../src/utils/commonStyles';
import { InputTagTypeStyle   }    from '../../../src/utils/commonStyles';
import { ButtonTagTypeStyle  }    from '../../../src/utils/commonStyles';

import { SkeleTonStyle             } from '../../../src/utils/commonStyles';
import { axiosCall, useQuerySingle } from "../../utils/common/common";
import EquipmentList from "./EqupmentList";
import { API_IP_INFO    } from "../../utils/apiUrl";

import "reactflow/dist/style.css";

type Equip = {
    EQUIP_ID : number,
    EQUIP_NAME : string,
    EQUIP_TYPE : string,
    EQUIP_LENT_STATUS : string,
    EQUIP_LENT_PERIOD_END : string,
    EQUIP_LENT_PERIOD_STRT : string,
    SYMB_IMAG_TYPE : string,
    EQUIP_LENT_STATUS_CODE : string,
    imgUrl : string,
    EQUIP_LENT_NAME : string
}

type FlowModal = {
    openValue  : boolean,
    equipId    : number  | null,
    lentStatus : string  | null
}

type paramType = {
    typeList : string,
    codeList : string
}
const EquipmentLentCp = () => {

    const { state } = useLocation();
    const [flowModal, setFlowModal] = useState<FlowModal>({ equipId : null, openValue : false, lentStatus : null });
    const [equipList, setEquipList] = useState<Equip[]>();
    const codeList         = useQuerySingle("get-equipment-status-list", null, `${API_IP_INFO}/comm/code-list/ELTL`, 60000 * 5, 60000 * 10, false, true, false);
    const typeList         = useQuerySingle("get-equipment-list-type", null, `${API_IP_INFO}/comm/code-list/TELY`, 60000 * 5, 60000 * 10, false, true, false);
    const searchCode       = useQuerySingle("get-equipment-lent-type", null, `${API_IP_INFO}/comm/code-list/ECSO`, 60000 * 5, 60000 * 10, false, true, false);
    const [param, setParam]       = useState<paramType>({ typeList : '', codeList : '', })
    const [serParam, setSerParam] = useState({ searchCode : '', keyword : ''});
    const [isLoading, setLoading] = useState(false);

    useLayoutEffect(() => {
        axiosCall("get", API_IP_INFO + '/equip/equip-list', param, (data) => {
                             setEquipList(data);
         });
    }, []);
    
    // 마을명, 시간 select 선택시
    const onChangeSelect = ( e : React.ChangeEvent<HTMLSelectElement> ) => {
        const { name, value} = e.target;
        setParam({...param, [name] : value});
    };
  
    const onChangeSearchSelect = ( e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setSerParam({...serParam, [name] : value});
    };

    useLayoutEffect(() => {
         reload(param);
    }, [param]);

    const reload = useCallback((param : paramType) => {
        setLoading(true);
        axiosCall("get", API_IP_INFO + '/equip/equip-list', param, (data) => {
            setEquipList(data);
            setLoading(false);
        });
    },[equipList]);

    const onClickSearch = () => {
        if ( !serParam.searchCode ) {
            alert("검색조건을 선택해주세요.");
            return;
        }
        axiosCall("get", API_IP_INFO + '/equip/equip-list', Object.assign( param, serParam ), (data) => {
            setEquipList(data);
        });
    }

    return (
        <div id="event_wrap">  
        <ExquipmentFlowModal modalBoolean={flowModal.openValue} reload={reload} param={param} equipId={flowModal.equipId} setModalIsOpen={setFlowModal} lentStatus={flowModal.lentStatus}></ExquipmentFlowModal>
                    <article className="articlewrap">
                        <LocationCompo submenu={state.menuName} mainMenuName={state.mainMenuName}></LocationCompo>
                        <div className='equipContentstitle equipment'>
                            <div className='select_value'>
                                <SelectTagTypeStyle width={'150px'} borderleft={'0px'} marginleft={'26px'} name="typeList" onChange={onChangeSelect}>
                                    <option value=''>종류</option>
                                    {
                                          typeList.data && typeList.data.map((v :{ commCd:string, commCdKorName : string}) => {
                                                    
                                                return (
                                                       <option value={v.commCd} key={v.commCdKorName + 'equpoptypeList'}>{v.commCdKorName}</option>
                                               )
                                            })
                                    }
                                    
                                </SelectTagTypeStyle>
                                <SelectTagTypeStyle width={'200px'} borderleft={'0px'} marginleft={'0px'} name="codeList" onChange={onChangeSelect}>
                                    <option value='' key='equpop' >대여상태</option>
                                    {
                                            codeList.data && codeList.data.map((v :{ commCd:string, commCdKorName : string}) => {
                                                    
                                                 return (
                                                       <option value={v.commCd} key={v.commCdKorName + 'equpo2p'}>{v.commCdKorName}</option>
                                                 )
                                            })
                                    }
                                </SelectTagTypeStyle>
                                <SelectTagTypeStyle width={'110px'} borderleft={'1px solid #ddd'}  name="searchCode" marginleft={'122px'} onChange={onChangeSearchSelect}>
                                    <option value=''>검색조건</option>
                                    {
                                            searchCode.data && searchCode.data.map((v :{ commCd:string, commCdKorName : string}) => {
                                                 return (
                                                       <option value={v.commCd} key={v.commCdKorName + 'equp22op'}>{v.commCdKorName}</option>
                                                 )
                                            })
                                    }
                                    
                                </SelectTagTypeStyle>
                            </div>
                            <InputTagTypeStyle width={'160px'} right={'130px'} name='keyword' onChange={(e) => onChangeSearchSelect(e)}></InputTagTypeStyle>
                            <ButtonTagTypeStyle width={'132px'} onClick={() => onClickSearch()}>조회</ButtonTagTypeStyle>
                        </div>
                        <div className='contenbox'>
                            <div className='itemsDiv'>
                                <div className='items equipment'>
                                    <ul>
                                        { isLoading === true ? SkeleTonStyle() : 
                                          isLoading === false && equipList &&  equipList.length > 0   ? <EquipmentList data={equipList} EquipmentData={equipList} setFlowModal={setFlowModal}></EquipmentList>
                                        : isLoading === false && equipList &&  equipList.length === 0 ?  <p className="items_noData pretend">해당 조건의 데이터가 없습니다.</p>
                                        : ''
                                      } 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
        </div>
    )
}

const EquipmentLentCompo = React.memo(EquipmentLentCp);
export default EquipmentLentCompo;