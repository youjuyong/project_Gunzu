import { useEffect         } from "react";
import { useLocation, Link } from "react-router-dom";
import { headerNavInfo     } from "../../../utils/ContextList";
import { axiosCall         } from "../../../utils/common/common";
import { API_IP_INFO       } from "../../../utils/apiUrl";

import EventBoardTextMainCompo from "./EventBoardTextMainCompo";
import EventBoardReviewCompo   from "./EventBoardReviewCompo";

const EventBoardTextCompo = ( props : any ) => {
    const location  = useLocation();
    const { state } = location;
    const event     = headerNavInfo.filter((v:any) => v.url === 'eventInfo')[0];

    useEffect(() => {
        axiosCall("post", API_IP_INFO + '/board/viewCount', {text_id : state.text_id}, (data) => {
         });
    },[]);

    return (
       <>
            <EventBoardTextMainCompo state={state}></EventBoardTextMainCompo>
            <EventBoardReviewCompo state={state}></EventBoardReviewCompo>
            <Link to="/eventInfo" title="목록으로 이동" className ="listBtn" state= {{url : 'eventInfo', menuName:event.menuName, mainMenuName:event.subTitle}}>목록</Link>
       </>
    )
}

export default EventBoardTextCompo;