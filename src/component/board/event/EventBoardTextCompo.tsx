import { useEffect         } from "react";
import { useLocation, Link } from "react-router-dom";
import { headerNavInfo     } from "../../../utils/ContextList";
import { AxiosCall, errorHandler, Token } from "../../../utils/common/common";
import { API_IP_INFO       } from "../../../utils/apiUrl";

import { EventBoardContentMainCompo } from "./EventBoardContentMainCompo";
import EventBoardPrizeCompo           from "./EventBoardPrizeCompo";
import EventBoardTextMainCompo        from "./EventBoardTextMainCompo";
import EventBoardReviewCompo          from "./EventBoardReviewCompo";

const EventBoardTextCompo = ( props : any ) => {
    const location  = useLocation();
    const { state } = location;
    const event     = headerNavInfo.filter((v:any) => v.url === 'eventInfo')[0];
    const token = Token();

    useEffect(() => {
        const cookies       = Object.fromEntries(document.cookie.split(';').map((cookie) => cookie.trim().split('=')));
        const isExistCookie = Object.prototype.hasOwnProperty.call(cookies, 'event' + state.text_id);

        if ( isExistCookie ) {
            return;
        } else {
            const date2 = new Date(Date.now() + 86400e3).toUTCString();
            document.cookie = `event${state.text_id}=John;   Path=/; Max-Age=3600;  expires=${date2};`  ;
            AxiosCall("post", API_IP_INFO + '/board/viewCount', {text_id : state.text_id}, null, (e) => {
                            errorHandler(e.response);
             }, token);
        }
    },[]);
    
    return (
       <>
        {   props.text_type === 'EVBT1' ?   <EventBoardTextMainCompo      state={state}></EventBoardTextMainCompo>
          : props.text_type === 'EVBT2' &&  props.prize_bord_yn === 'Y' ?  <><EventBoardContentMainCompo state={state}></EventBoardContentMainCompo><EventBoardPrizeCompo state={state}></EventBoardPrizeCompo></>
          : props.text_type === 'EVBT2' ?   <><EventBoardContentMainCompo state={state}></EventBoardContentMainCompo></>
          : ''
        }

            <EventBoardReviewCompo state={state}></EventBoardReviewCompo>
            <Link to="/eventInfo" title="목록으로 이동" className ="listBtn" state= {{url : 'eventInfo', menuName:event.menuName, mainMenuName:event.subTitle}}>목록</Link>
       
            </>
    )
}

export default EventBoardTextCompo;