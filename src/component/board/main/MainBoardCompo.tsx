
import MainListTableCompo        from "../../table/MainListTableCompo"
import MainBoardTextCompo        from "./MainBoardTextCompo";
import LocationCompo             from "../../../commComponent/LocationCompo";
import { useLocation }           from "react-router-dom";
import React from "react";

const MainBoardCp = () => {
    const { state } = useLocation();
    
    return (
        <div id="event_wrap">
                    <article className="articlewrap">
                    <LocationCompo submenu={state?.menuName} mainMenuName={state?.mainMenuName}></LocationCompo>
                        <div className="contentstitle board"><h3>공지 사항</h3></div>
                        <div className="contenbox">
                            {  state?.url === 'mainBoardInfo'     ? <MainListTableCompo></MainListTableCompo> 
                             : state?.url === 'mainBordTextInfo'  ? <MainBoardTextCompo></MainBoardTextCompo> 
                             : ''    
                            }
                        </div>
                    </article>
        </div>
    )
}

const MainBoardCompo = React.memo(MainBoardCp);
export default MainBoardCompo;