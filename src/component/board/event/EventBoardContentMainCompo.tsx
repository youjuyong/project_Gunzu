import { useState, useLayoutEffect, useRef  } from "react";
import { AxiosCall, errorHandler, Token       } from "../../../utils/common/common";
import { API_IP_INFO     } from "../../../utils/apiUrl";
import { Loading         } from "../../../commComponent/Loading";

import React               from "react";    
import 'moment/locale/ko';

const EventBoardContentMainCp = ( props : any ) => {
    const { text_id, text_title, reg_dt} = props.state;
    const [ loading, setLoading ] = useState(true);
    const ref = useRef<any>(null);
    const token = Token();
    const [ html, setHtml ] = useState<any>();

    useLayoutEffect(() => {
        const param = {
            text_id : text_id
        }
        
        AxiosCall("get", API_IP_INFO + "/board/event-board-content-list", param, (data) => {
            
            const { contentList, imgList } = data;
            
            let html = '';

            if ( contentList.length > 0 ) {
                 html += contentList[0]["TEXT_CONT"];
            }

            if ( imgList.length > 0 && imgList) {
                imgList.map((imgInfo : any) => {
                    html +=  "<img src='data:image/" + imgInfo.extension + ";base64," + imgInfo.encodeStr + "' alt= '" + imgInfo.TEXT_TITL + "'>";
                });
               
            }

            setHtml(html);
            setLoading(false);
         }, (e) => {
              errorHandler(e.response);
         }, token);

         return(setLoading(true));
    },[]);

    useLayoutEffect(() => {
        if ( !ref?.current ) return;
        ref.current.innerHTML = html;
    },[loading]);

    return (
       <>   { loading === true ? <Loading/> : <>
            <table className="event_table eventboard_content">
               <caption>공지사항 리스트</caption>
                    <tbody>
                            <tr>
                                <th colSpan={4} className="eventBoardTitle">{text_title}</th>
                            </tr>
                            <tr>
                                <th>작성일</th>
                                <td className="reg_dt">{reg_dt}</td>
                                <th>첨부파일</th>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="tdconten" id="content" ref={ref}>
                                </td>
                            </tr>
                    </tbody>
             </table>
             </>
             }
       </>
    )
}

export const EventBoardContentMainCompo = React.memo(EventBoardContentMainCp);