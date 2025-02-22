import { useLocation, Link } from "react-router-dom";

import EventBoardTextMainCompo from "./EventBoardTextMainCompo";
import EventBoardReviewCompo   from "./EventBoardReviewCompo";

const EventBoardTextCompo = ( props : any ) => {
    const location = useLocation();
    const { state } = location;

    return (
       <>
            <EventBoardTextMainCompo state={state}></EventBoardTextMainCompo>
            <EventBoardReviewCompo state={state}></EventBoardReviewCompo>
            <Link to="/eventInfo" title="목록으로 이동" className ="listBtn" state= {{url : 'eventInfo'}}>목록</Link>
       </>
    )
}

export default EventBoardTextCompo;