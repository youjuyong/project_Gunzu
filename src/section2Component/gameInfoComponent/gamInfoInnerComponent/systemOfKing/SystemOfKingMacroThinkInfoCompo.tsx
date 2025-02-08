import { memo } from "react";
import React    from "react";

/* 매크로 판별창 */
const SystemOfKingMacroThinkInfo = () => {
    return (
        <> 
            <div className='intro_title'>
                <h3 className="magutganAlert_h3">매크로 판별창</h3>
            </div>
        </>
    )
}

export const  SystemOfKingMacroThinkInfoCompo = React.memo(SystemOfKingMacroThinkInfo);