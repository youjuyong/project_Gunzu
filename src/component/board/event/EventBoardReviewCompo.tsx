import { useLocation, Link } from "react-router-dom";
import { useState, useLayoutEffect,useRef, useEffect } from "react";
import UseEnterBtnClick from "../../../utils/common/useEnterBtnClick";
import { axiosCall       } from "../../../utils/common/common";
import { HighChartBar    } from "../../../utils/common/chart";
import { API_IP_INFO     } from "../../../utils/apiUrl";

const EventBoardTextCompo = ( props : any ) => {
    const buttonElement = UseEnterBtnClick();
    const [ reviewList, setReviewList ] = useState([]);
    const [ textValue,    setTxtValue ] = useState();
    const user_id     = localStorage.getItem("id");
    const { text_id } = props.state;

      const deleteHandler = () => {
            if ( window.confirm("리뷰를 삭제 하시겠습니까?") ) {
                const param = {
                    text_id : text_id,
                    user_id   : user_id
                }
                 axiosCall("delete", API_IP_INFO + "/board/review-remove", param, (data) => {
                            
                            if ( data === 1 ) {
                                alert("리뷰삭제완료!!");
                                Reload();
                            }
                });
            }
     }

     useEffect(() => {
        Reload();
     },[]);

      const Reload = () => {
             const param = {
                 text_id : text_id
             }
     
             axiosCall("get", API_IP_INFO + "/board/event-board-review-list", param, (data) => {
                setReviewList(data);
             });
    }
    const textAreaChangeHandle = (e : any) => {
        const {value} = e.target;
        setTxtValue(value);
    }

      const saveHandler = ( e : any ) => {
            
  
            if ( reviewList.filter((v:any) => v.USER_ID === props.userId).length > 0 ) {
                alert("이미 등록된 리뷰가 있습니다.");
                return;
            }
          
            if ( textValue === undefined || textValue === null ) 
            {
                alert("리뷰를 한글자라도 작성해 주세요.");
                return;
            }
    
            if ( window.confirm("리뷰를 저장 하시겠습니까?")) 
            {
    
                let url = '';
                switch( props.objectType ) {
                    case 'horse' : url = "/horse/review";
                                   break;
                }
                const param = {
                    text_id  : text_id,
                    user_id  : user_id,
                    content  : textValue
                }
                 axiosCall("put", API_IP_INFO + "/board/review", param, (data) => {
                            
                            if ( data === 1 ) {
                                alert("리뷰등록완료!!");
                                Reload();
                            }
                      
                });
            }
    }
    return (
       <>
             <div className="boardReview"> 
                <div className="contentHeader"><h2>댓글</h2></div>
                <div className="contentMain">
                    <ul>
                     {
                                        reviewList && reviewList.map(( v: any, index : number ) => {
                                            const score = Math.floor(Number(v.SCORE));
                                            return (
                                                <li key={v +'revietarLi' + String(index)}>
                                                <div key={v +'revietarDiv1' + String(index)}>
                                                    <div className="reviewText" key={v +'revietarDiv2' + String(index)}>
                                                        <span><img src={require("../../../assets/image/user.png")}></img>
                                                            <p className="nickNameSpan snans" key={v +'revietarPtag' + String(index)}>{v.USER_NAME}</p>
                                                        </span>
                                                        <span className="reViewSpan snans">{v.COMMENT}</span>
                                                        <div className="reviewDateDiv">
                                                            <span className="reViewSpan snans dateSpan">{v.REG_DT}</span>
                                                            {
                                                                v.USER_ID === props.userId ?  <button className="reviewDelete"ref={buttonElement} onClick={deleteHandler}>삭제</button> : ""
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            )
                                        })
                               }
                    </ul>
                </div>
                <div className="contentInput">
                                    <textarea className="reviewtextarea" onChange={textAreaChangeHandle} disabled = {props.userId=== null ? true: false } placeholder={props.userId=== null ? "로그인이 필요합니다." : "리뷰를 작성해주세요." }></textarea>
                                    <button ref={buttonElement} onClick={saveHandler}>저장</button>
                </div>
             </div>
       </>
    )
}

export default EventBoardTextCompo;