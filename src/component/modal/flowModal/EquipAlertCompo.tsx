import React,{ memo } from "react";

const EquipAlertCp = () => {

    return (
        <>
            <div className ="equip_Alert pretend">
                <div className="equip_inner">
                <p>1. 장비 대여는 반드시 <span>필요 할 때</span> 신청을 부탁드립니다.</p>
                <p>2. 고가의 장비는 <span>휴대폰 인증</span>이 필요할 수 있습니다.</p>
                <p>3. 장비는 마을의 자산이기 때문에 반드시 <span>반납을 해주셔야</span> 합니다.</p>
                </div>
            </div>
        </>
    )
}

export const EquipAlertCompo = React.memo(EquipAlertCp);

