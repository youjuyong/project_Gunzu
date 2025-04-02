import React,{ memo } from "react";
import { FlowModalButtonStyle     } from "../../../utils/common/modalCss";

const EquipButtonCp = () => {
    
    return (
        <>
            <FlowModalButtonStyle width={'120px'} height={'50px'} bgcolor={'aquamarine'}>대여신청</FlowModalButtonStyle>
        </>
    )
}

export const EquipButtonCompo = React.memo(EquipButtonCp);

