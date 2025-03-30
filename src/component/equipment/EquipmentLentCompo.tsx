
import { useLocation }           from "react-router-dom";
import LocationCompo             from "../../commComponent/LocationCompo";
import React, { useEffect,memo } from "react";
import { SelectTagTypeStyle }    from '../../../src/utils/commonStyles';
import { InputTagTypeStyle }    from '../../../src/utils/commonStyles';
const EquipmentLentCp = () => {
    const { state } = useLocation();
    
    return (
        <div id="event_wrap">
                   
                    <article className="articlewrap">
                        <LocationCompo submenu={state.menuName} mainMenuName={state.mainMenuName}></LocationCompo>
                        <div className='equipContentstitle equipment'>
                            <div className='select_value'>
                                <SelectTagTypeStyle width={'150px'} borderLeft={'0px'} marginLeft={'0px'}>
                                    <option>종류</option>
                                    <option>방어구</option>
                                    <option>무기</option>
                                    <option>소환영웅</option>
                                </SelectTagTypeStyle>
                                <SelectTagTypeStyle width={'236px'} borderLeft={'0px'} marginLeft={'0px'}>
                                    <option>대여상태</option>
                                    <option>대여중</option>
                                    <option>신청중</option>
                                    <option>대기중</option>
                                </SelectTagTypeStyle>
                                <SelectTagTypeStyle width={'110px'} borderLeft={'1px solid #ddd'} marginLeft={'112px'}>
                                    <option>검색조건</option>
                                    <option>장비명</option>
                                    <option>제목명</option>
                                </SelectTagTypeStyle>
                                <InputTagTypeStyle width={'160px'}></InputTagTypeStyle>
                            </div>
                        </div>
                        <div className='contenbox'></div>
                    </article>
        </div>
    )
}

const EquipmentLentCompo = React.memo(EquipmentLentCp);
export default EquipmentLentCompo;