import { Routes, Route, Outlet } from "react-router-dom";

/* Inner Header  */
import HorseHouseHeaderCompo from "../gameInfoComponent/gameInfoHeaderComponent/HorseHeaderCompo";         // 탈것

const GameInfoHorseHouseCompo = () => {
    return (
        <>
            <header className="section2Header" role="section2-header">
                     <HorseHouseHeaderCompo/>
            </header>
            <div className="section2HighLight">
                    <Outlet/>
            </div>
        </>
    )
}


export default GameInfoHorseHouseCompo;