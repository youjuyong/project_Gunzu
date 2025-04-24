import { useState, useEffect, useRef, useLayoutEffect } from "react"
import React from "react"
import { AxiosCall, errorHandler, Token } from "../../../utils/common/common";
import { API_IP_INFO               } from "../../../utils/apiUrl";
import { rootState                 } from "../../../utils/reducer/index";
import { useSelector               } from "react-redux";
import { prizeListType, resultType } from "../../../utils/common/types";

const EventBoardPrizeCp = (props : any) => {
    const { text_id, prize_yn } = props.state;
    const { userId } = useSelector((state: rootState)=>state.userReducer);
    const ref = useRef<HTMLTableSectionElement>(null);
    const token = Token();

     useLayoutEffect(() => {
            const param = {
                text_id : text_id
            }
            AxiosCall("get", API_IP_INFO + "/board/event-board-prize-list", param, function <T extends resultType>(data : T)  {
                
                 if ( data.length === 0 ) return;

                 let html = '';
                 data.map(( v : prizeListType ) => {
                    const className= ( v?.USER_ID === userId  && prize_yn === 'Y' )? 'winning' : '';
                    html += `<tr class=${className}>`;
                    html +=     `<td>${v.PRIZE_NUM}</td>`;
                    html +=     `<td>${v.PRIZE_NAME}</td>`;
                    html +=     `<td>${( prize_yn === 'N' ) ? '이벤트 후 발표예정' : v?.USER_ID === null || v?.USER_ID=== undefined ? '당첨자 없음' : v.USER_NAME}</td>`;
                    html += '</tr>';
                 });
               
                 if ( ref?.current !== null ) 
                 {
                    ref.current.innerHTML = html;
                 }
                   
            }, (e) => {
                    errorHandler(e.response);
            }, token);
    },[]);

    // 경품 신청
    const prizeSumitClick = () => {
        const param = {
            text_id : text_id,
            user_id : userId
        }

        if (  prize_yn=== 'Y' ) {
            alert('신청 기간이 마감되었습니다.');
            return;
        }
        AxiosCall("post", API_IP_INFO + "/board/event-board-prize-sumit", param, (data) => {
            alert(data.message);
            return;
         },  (e) => {
                errorHandler(e.response);
         },token);
    }

    return (
        <>  
            <p className='prizePtag'>※주의※ 경품은 이벤트 종료 후 당첨자를 발표 하고 "그 자리" 에서 드립니다. 신청 후 이벤트 참여를 하지 않을 경우 경품을 받지 못할 수 있습니다.</p>
            <h2 className='prizeH2'>경품 테이블</h2>
            <table className="eventPrizeTable">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>경품 이름</th>
                        <th>당첨자</th>
                    </tr>
                </thead>
                <tbody ref={ref}>
                </tbody>
            </table>
            <div className="eventSumitDiv"><button className="eventDate snans" onClick={prizeSumitClick}>신청하기</button></div>

        </>
    )
}


const EventBoardPrizeCompo = React.memo(EventBoardPrizeCp);
export default EventBoardPrizeCompo;
