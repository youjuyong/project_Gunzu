import { memo } from "react";
import React    from "react";

/* 왕실 매크로 순찰 */
const SystemOfKingMacroPatrolInfo = () => {
    return (
        <> 
            <div className='intro_title'>
                <h3 className="magutganAlert_h3">왕실 매크로 순찰</h3>
            </div>
        </>
    )
}

export const  SystemOfKingMacroPatrolInfoCompo = React.memo(SystemOfKingMacroPatrolInfo);