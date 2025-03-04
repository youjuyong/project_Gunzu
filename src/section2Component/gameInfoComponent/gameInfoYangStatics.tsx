import React from "react";
import { memo   } from "react";
import { Outlet } from "react-router-dom";

/* Inner Header  */
import YangStaticsCompo from "../gameInfoComponent/gameInfoHeaderComponent/YangStaticsCompo";         // 양이전쟁 통계

const GameInfoYangStaticsCp = () => {

        return(
          <>
             <header className="section2Header snans" role="section2-header">
                                    <YangStaticsCompo/>
             </header>
             <div className="section2HighLight">
                                    <Outlet/>
             </div>
          </>
        )
}

const GameInfoYangStaticsCpCompo =  React.memo(GameInfoYangStaticsCp);
export default GameInfoYangStaticsCpCompo;