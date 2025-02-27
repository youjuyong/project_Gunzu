import { Outlet } from "react-router-dom";

/* Inner Header  */
import SystemOfKinkHeaderCompo from "../gameInfoComponent/gameInfoHeaderComponent/SystemOfKingHeaderCompo";         // 왕실 시스템
const GgameInfoSystemOfKingCompo = () => {
    return (
        <>
                <header className="section2Header snans" role="section2-header">
                        <SystemOfKinkHeaderCompo/>
                </header>
                <div className="section2HighLight">
                        <Outlet/>
                </div>
        </>
    )
}


export default GgameInfoSystemOfKingCompo;