
import EventBoardTextCompo       from "./EventBoardTextCompo";
import EventListTableCompo       from "../../table/EventListTableCompo"
import LocationCompo             from "../../../commComponent/LocationCompo";
import { useLocation }           from "react-router-dom";
import React                     from "react";

const EvemtBoardCp = () => {
    const { state } = useLocation();
    
    return (
        <div id="event_wrap">
                    <article className="articlewrap">
                    <LocationCompo submenu={state?.menuName} mainMenuName={state?.mainMenuName}></LocationCompo>
                        <div className="contentstitle board"><h3>이벤트 공지</h3></div>
                        <div className="contenbox">
                            { state.url === 'eventInfo'      ? <EventListTableCompo></EventListTableCompo> 
                            : state.url === 'eventTextInfo'  ? <EventBoardTextCompo text_type={state.text_type} prize_bord_yn={state.prize_bord_yn} prize_yn={state.prize_yn}></EventBoardTextCompo> 
                            : ''    
                        }
                        </div>
                    </article>
        </div>
    )
}

const EvemtBoardCompo = React.memo(EvemtBoardCp);
export default EvemtBoardCompo;