import { useEffect         } from "react";
import { useLocation, Link } from "react-router-dom";
import { headerNavInfo     } from "../../../utils/ContextList";
import { AxiosCall, errorHandler, Token } from "../../../utils/common/common";
import { API_IP_INFO       } from "../../../utils/apiUrl";

import { MainBoardContentMainCompo } from "./MainBoardContentMainCompo";
import MainBoardReviewCompo          from "./MainBoardReviewCompo";

const MainBoardTextCompo = ( props : any ) => {
    const location  = useLocation();
    const { state } = location;
    const token = Token();
    const main      = headerNavInfo.filter((v:any) => v.url === 'mainBoardInfo')[0];
    
    useEffect(() => {
        const cookies       = Object.fromEntries(document.cookie.split(';').map((cookie) => cookie.trim().split('=')));
        const isExistCookie = Object.prototype.hasOwnProperty.call(cookies, 'main' + state.text_id);
        
        if ( isExistCookie ) {
            return;
        } else {
            const date2 = new Date(Date.now() + 86400e3).toUTCString();
            document.cookie = `main${state.text_id}=John;   Path=/; Max-Age=3600;  expires=${date2};`  ;
            AxiosCall("post", API_IP_INFO + '/board/main-view-count', {text_id : state.text_id}, null, (e) => {
                            errorHandler(e.response);
             }, token);
        }
    },[]);
    
    return (
       <>
            <MainBoardContentMainCompo state={state}></MainBoardContentMainCompo>
            <MainBoardReviewCompo state={state}></MainBoardReviewCompo>
            <Link to="/mainBoardInfo" title="목록으로 이동" className ="listBtn" state= {{url : 'mainBoardInfo', menuName:main?.menuName, mainMenuName:main?.subTitle}}>목록</Link>
        </>
    )
}

export default MainBoardTextCompo;