import React, { useState } from "react";
import { FlowModalButtonStyle } from "../../../utils/common/modalCss";
import { AxiosCall, errorHandler, Token } from "../../../utils/common/common";
import { API_IP_INFO } from "../../../utils/apiUrl";
import { useSelector } from "react-redux";
import { rootState   } from "../../../utils/reducer/index";

type equipDetlType = {
     equipId    : number | null,
     lentStatus : string  | null,
     modalOpen : ( data : boolean   ) => void,
     reload    : ( data : paramType ) => void,
     param : paramType
}

type paramType = {
    typeList : string,
    codeList : string
}

const EquipButtonCp = ( props : equipDetlType ) => {
    const token = Token();
    const { userId, masterYn, cityUserName } = useSelector((state: rootState)=>state.userReducer);
    const buttonClick = ( e : React.MouseEvent<HTMLButtonElement> | undefined ) => {

        if ( props.lentStatus === 'ELTL2' )
        {
            alert("신청중인 장비입니다.");
            return;
        }
        else if ( props.lentStatus === 'ELTL3' ) 
        {
            alert("대여중인 장비입니다.");
            return;
        }

        if ( userId === null ) {
            alert("로그인이 필요합니다.");
            return;
        } 
        else if ( masterYn === null ) {
            alert("의정부 마을 주민만 신청 가능합니다. 관리자에게 문의 주세요.");
            return;
        } 

        if ( window.confirm("아이템 대여 기간은 6개월 입니다. 신청 하시겠습니까?") ) {
            const param = {
                userId : userId,
                equipId : props.equipId,
                cityUserName : cityUserName
            }

            AxiosCall("put", API_IP_INFO + "/equip/equip-lent-name", param, (data) => {
                if ( data === 1 ) {
                    alert("신청이 완료 되었습니다.");
                    props.reload(props.param);
                    props.modalOpen(false);
                    return;
                } else {
                    alert("신청이 실패 되었습니다.");
                    return;
                }
            }, (e) => {
                            errorHandler(e.response);
             }, token);
        }
        
       
    }

    return (
        <>
            <FlowModalButtonStyle width={'120px'} height={'50px'} bgcolor={'aquamarine'} onClick={ buttonClick }>대여신청</FlowModalButtonStyle>
        </>
    )
}

export const EquipButtonCompo = React.memo(EquipButtonCp);

