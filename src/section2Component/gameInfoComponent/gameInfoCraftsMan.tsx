import { Routes, Route, Outlet } from "react-router-dom";

/* Inner Header  */
import CraftsManHeaderCompo from "../gameInfoComponent/gameInfoHeaderComponent/CraftsManHeaderCompo";         // 탈것

const GameInfoCraftsManCompo = () => {
    return (
        <>
                <header className="section2Header snans" role="section2-header">
                        <CraftsManHeaderCompo/>
                </header>
                <div className="section2HighLight">
                        <Outlet/>
                </div>
        </>
    )
}


export default GameInfoCraftsManCompo;