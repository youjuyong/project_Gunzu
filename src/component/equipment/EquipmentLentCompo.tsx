
import { useLocation }           from "react-router-dom";
import LocationCompo             from "../../commComponent/LocationCompo";
import React, { useLayoutEffect, memo, useState } from "react";
import { ExquipmentFlowModal }   from "../modal/flowModal/ExquipmentFlowModal"
import { SelectTagTypeStyle  }    from '../../../src/utils/commonStyles';
import { InputTagTypeStyle   }    from '../../../src/utils/commonStyles';
import { ButtonTagTypeStyle  }    from '../../../src/utils/commonStyles';

import { ItemsLiTagStyle1    }    from '../../../src/utils/commonStyles';
import { ItemsDivTagStyle1   }    from '../../../src/utils/commonStyles';
import { ItemsSpanImgStyle1  }    from '../../../src/utils/commonStyles';

import { ItemsImgStyle1      }    from '../../../src/utils/commonStyles';
import { ItemsNameStyle1     }    from '../../../src/utils/commonStyles';

import { ItemsStateStyle1       }    from '../../../src/utils/commonStyles';
import { ItemsInlineStateStyle1 }    from '../../../src/utils/commonStyles';
import { ItemsNameSpanStyle1    }    from '../../../src/utils/commonStyles';
import { ItemsNameAStyle1       }    from '../../../src/utils/commonStyles';

import { ItemsPeriodSpanStyle     }    from '../../../src/utils/commonStyles';
import { ItemsBorrowNameSpanStyle }    from '../../../src/utils/commonStyles';
import { ItemsPeriodTextSpanStyle }    from '../../../src/utils/commonStyles';

import { useQuerySingle, axiosCall } from "../../utils/common/common";
import EquipmentList from "./EqupmentList";
import { API_IP_INFO    } from "../../utils/apiUrl";

import "reactflow/dist/style.css";

type Equip = {
    EQUIP_ID : number,
    EQUIP_NAME : string,
    EQUIP_LENT_STATUS : string,
    EQUIP_LENT_PERIOD_END : string,
    EQUIP_LENT_PERIOD_STRT : string,
    SYMB_IMAG_TYPE : string,
    imgUrl : string
}
const EquipmentLentCp = () => {

    const { state } = useLocation();
    const [flowModal, setFlowModal] = useState<boolean>(false);
    const [equipList, setEquipList] = useState<Equip>();

    useLayoutEffect(() => {
        axiosCall("get", API_IP_INFO + '/equip/equip-list', null, (data) => {
                             setEquipList(data);
         });
    }, []);
    
    return (
        <div id="event_wrap">  
        <ExquipmentFlowModal modalBoolean={flowModal} setModalIsOpen={setFlowModal}></ExquipmentFlowModal>
                    <article className="articlewrap">
                        <LocationCompo submenu={state.menuName} mainMenuName={state.mainMenuName}></LocationCompo>
                        <div className='equipContentstitle equipment'>
                            <div className='select_value'>
                                <SelectTagTypeStyle width={'150px'} borderleft={'0px'} marginleft={'26px'}>
                                    <option>종류</option>
                                    <option>방어구</option>
                                    <option>무기</option>
                                    <option>소환영웅</option>
                                    <option>기타</option>
                                </SelectTagTypeStyle>
                                <SelectTagTypeStyle width={'200px'} borderleft={'0px'} marginleft={'0px'}>
                                    <option>대여상태</option>
                                    <option>대여중</option>
                                    <option>신청중</option>
                                    <option>대기중</option>
                                </SelectTagTypeStyle>
                                <SelectTagTypeStyle width={'110px'} borderleft={'1px solid #ddd'} marginleft={'122px'}>
                                    <option>검색조건</option>
                                    <option>장비명</option>
                                    <option>제목명</option>
                                </SelectTagTypeStyle>
                            </div>
                            <InputTagTypeStyle width={'160px'} right={'130px'}></InputTagTypeStyle>
                            <ButtonTagTypeStyle width={'132px'}>조회</ButtonTagTypeStyle>
                        </div>
                        <div className='contenbox'>
                            <div className='itemsDiv'>
                                <div className='items equipment'>
                                    <ul>
                                       { equipList && <EquipmentList data={equipList} EquipmentData={equipList} setFlowModal={setFlowModal}></EquipmentList> } 
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