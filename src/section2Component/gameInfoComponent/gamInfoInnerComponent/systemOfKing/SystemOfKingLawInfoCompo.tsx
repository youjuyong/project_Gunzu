import { memo } from "react";
import React    from "react";

/* 왕실 법안 */
const SystemOfKingLawInfo = () => {
    return (
        <> 
            <div className='intro_title'>
                <h3 className="magutganiran_h3">왕실 법안</h3>
            </div>
        </>
    )
}

export const  SystemOfKingLawInfoCompo = React.memo(SystemOfKingLawInfo);