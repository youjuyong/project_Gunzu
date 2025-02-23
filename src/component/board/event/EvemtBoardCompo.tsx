
import EventBoardTextCompo from "./EventBoardTextCompo";
import EventListTableCompo from "../../table/EventListTableCompo"
import LocationCompo       from "../../../commComponent/LocationCompo";
import { useLocation }     from "react-router-dom";

const EvemtBoardCompo = () => {
    const { state } = useLocation();

    return (
        <div id="event_wrap">
                    <article className="articlewrap">
                    <LocationCompo submenu={state.menuName} mainMenuName={state.mainMenuName}></LocationCompo>
                        <div className="contentstitle"><h3>이벤트 공지</h3></div>
                        <div className="contenbox">
                            { state.url === 'eventInfo'                                   ? <EventListTableCompo></EventListTableCompo> 
                            : state.url === 'eventTextInfo' && state.text_tpe === 'EVBT1' ? <EventBoardTextCompo></EventBoardTextCompo> 
                            : '' 
                            }
                        </div>
                    </article>
        </div>
    )
}

export default EvemtBoardCompo;