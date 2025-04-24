import { Outlet } from "react-router-dom";
import  React     from "react";

/* Inner Header  */
import WeaponRecommandHeaderCompo from "../gameInfoComponent/gameInfoHeaderComponent/WeaponRecomHeaderCompo";    

const GameInfoWeaponRecommandCp = () => {
    return (
        <>
             <header className="section2Header snans" role="section2-header">
                                <WeaponRecommandHeaderCompo/>
            </header>
            <div className="section2HighLight">
                                 <Outlet/>
            </div>
        </>
    )
}


const GameInfoWeaponRecommandCompo =  React.memo(GameInfoWeaponRecommandCp);
export default GameInfoWeaponRecommandCompo;