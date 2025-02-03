import { Routes, Route, Outlet } from "react-router-dom";

/* Inner Header  */
import RecallHeroHeaderCompo from "../gameInfoComponent/gameInfoHeaderComponent/RecallHeroHeaderCompo";         // 소환영웅

const GameInfoRecallHeroCompo = () => {
    return (
        <>
            <header className="section2Header snans" role="section2-header">
                    <RecallHeroHeaderCompo/>
            </header>
            <div className="section2HighLight">
                     <Outlet/>
            </div>
        </>
    )
}

export default GameInfoRecallHeroCompo;