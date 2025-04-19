import { useState, useEffect } from "react";
import UseEnterBtnClick        from "../../../utils/common/useEnterBtnClick";
import { AxiosCall, errorHandler, Token } from "../../../utils/common/common";
import { API_IP_INFO         } from "../../../utils/apiUrl";
import { rootState           } from "../../../utils/reducer/index";
import { useSelector         } from "react-redux";

const EventBoardTextCompo = ( props : any ) => {
    const buttonElement = UseEnterBtnClick();
    const token = Token();
    const [ reviewList, setReviewList ] = useState([]);
    const [ textValue,    setTxtValue ] = useState();
    const { userId  } = useSelector((state: rootState)=>state.userReducer);
    const { text_id } = props.state;

    const deleteHandler = () => {
            if ( window.confirm("댓글을 삭제 하시겠습니까?") ) {
                const param = {
                    text_id  : text_id,
                    user_id  : userId
                }
                AxiosCall("delete", API_IP_INFO + "/board/main-board-review-remove", param, (data) => {
                            
                            if ( data === 1 ) {
                                alert("댓글삭제완료!!");
                                Reload();
                            }
                }, (e) => {
                                errorHandler(e.response);
                }, token);
            }
     }

     useEffect(() => {
        Reload();
     },[]);

      const Reload = () => {
             const param = {
                 text_id : text_id
             }
     
             AxiosCall("get", API_IP_INFO + "/board/main-board-review-list", param, (data) => {
                setReviewList(data);
             }, (e) => {
                          errorHandler(e.response);
             }, token);
    }
    const textAreaChangeHandle = (e : any) => {
        const {value} = e.target;
        setTxtValue(value);
    }

      const saveHandler = ( e : any ) => {
            
  
            if ( reviewList.filter((v:any) => v.USER_ID === userId).length > 0 ) {
                alert("이미 등록된 댓글이 있습니다.");
                return;
            }
            else if ( userId === null ) 
            {
                alert("댓글 작성은 로그인이 필요합니다.");
                return;
            }
            
            if ( textValue === undefined || textValue === null ) 
            {
                alert("댓글은 한글자라도 작성해 주세요.");
                return;
            }
    
            if ( window.confirm("댓글을 저장 하시겠습니까?") ) 
            {
    
                let url = '';
                switch( props.objectType ) {
                    case 'horse' : url = "/horse/review";
                                   break;
                }
                const param = {
                    text_id  : text_id,
                    user_id  : userId,
                    content  : textValue
                }
                AxiosCall("put", API_IP_INFO + "/board/main-board-review", param, (data) => {
                            
                            if ( data === 1 ) {
                                alert("댓글등록완료!!");
                                Reload();
                            }
                      
                }, (e) => {
                      errorHandler(e.response);
                }, token);
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
                                            return (
                                                <li key={v +'revietarLi' + String(index)}>
                                                <div key={v +'revietarDiv1' + String(index)}>
                                                    <div className="reviewText" key={v +'revietarDiv2' + String(index)}>
                                                        <span><img src={require("../../../assets/image/user.png")} alt='유저이미지'></img>
                                                            <p className="nickNameSpan snans" key={v +'revietarPtag' + String(index)}>{v.USER_NAME}</p>
                                                        </span>
                                                        <span className="reViewSpan eventReviewSpan snans">{v.COMMENT}</span>
                                                        <div className="reviewDateDiv">
                                                            <span className="reViewSpan snans dateSpan">{v.REG_DT}</span>
                                                            {
                                                                v.USER_ID === userId ?  <button className="reviewDelete"ref={buttonElement} onClick={deleteHandler}>삭제</button> : ""
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
                                    <textarea className="reviewtextarea" onChange={textAreaChangeHandle} disabled = {userId=== null ? true: false } placeholder={userId=== null ? "로그인이 필요합니다." : "댓글을 작성해주세요." }></textarea>
                                    <button ref={buttonElement} onClick={saveHandler}>저장</button>
                </div>
             </div>
       </>
    )
}

export default EventBoardTextCompo;