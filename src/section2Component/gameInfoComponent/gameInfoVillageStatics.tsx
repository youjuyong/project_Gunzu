import React from "react";
import { memo } from "react";
import { Outlet } from "react-router-dom";

/* Inner Header  */
import VillageStaticsCompo from "../gameInfoComponent/gameInfoHeaderComponent/VillageStaticsCompo";         // 주민수 통계

const GameInfoVillageStaticsCp = () => {

        return(
          <>
             <header className="section2Header snans" role="section2-header">
                                    <VillageStaticsCompo/>
             </header>
             <div className="section2HighLight">
                                    <Outlet/>
             </div>
          </>
        )
}

const GameInfoVillageStaticsCompo =  React.memo(GameInfoVillageStaticsCp);
export default GameInfoVillageStaticsCompo;