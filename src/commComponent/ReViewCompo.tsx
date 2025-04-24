import React    from "react";
import UseEnterBtnClick from "../utils/common/useEnterBtnClick";
import { useEffect, useState} from "react";
import { AxiosCall, errorHandler, Token   } from "../utils/common/common";
import { API_IP_INFO   } from "../utils/apiUrl";

const array = Array.from({ length : 5}, (v,i) =>  i);

interface reviewType {
    userId     : string | null // 로그인 여부
    objectId   : string        // 리뷰 객체 ID
    objectType : string        // 리뷰 타입
}

const ReViewCp = ( props : Partial<reviewType> ) => {
    const token = Token();
    const buttonElement = UseEnterBtnClick();
    const [textValue,    setTxtValue] = useState<string>();
    const [ reviewList, setRevieList] = useState([]);

    useEffect(() => {

        Reload();

    },[]);

    // 별점 기본값 설정
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    // 별점 변경 함수
    const starScore = ( index : number ) => {
            let star = [...clicked];
            for (let i = 0; i < 5; i++) {
                star[i] = i <= index ? true : false;
            }
            setClicked(star);
     };

    // 현재 선택한 별점 개수
    let clickedStarNum = clicked.filter(element => true === element).length; 

    const textAreaChangeHandle = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        const {value} = e.target;
        setTxtValue(value);
    }

    const saveHandler = ( e : React.MouseEvent<HTMLButtonElement> ) => {
        
        if ( props.userId=== null ) {
            alert("로그인이 필요합니다.");
            return;
        }
        if ( reviewList.filter((v:any) => v.USER_ID === props.userId).length > 0 ) {
            alert("이미 등록된 리뷰가 있습니다.");
            return;
        }
        
        if ( clickedStarNum === 0 ) 
        {
            alert("평점을 선택해주세요.");
            return;
        } else if ( textValue === undefined || textValue === null ) 
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
                case 'hero'  : url = "/hero/review";
                               break;
            }
            const param = {
                score    : clickedStarNum,
                objectId : props.objectId,
                userId   : props.userId,
                content  : textValue
            }
            AxiosCall("put", API_IP_INFO + url, param, (data) => {
                        
                        if ( data === 1 ) {
                            alert("리뷰등록완료!!");
                            Reload();
                        }
                  
            },(e) => {
                    errorHandler(e.response);
            }, token);
        }
    }

    const deleteHandler = () => {

        if ( window.confirm("리뷰를 삭제 하시겠습니까?") ) {
            let url = '';
            switch( props.objectType ) {
                case 'horse' : url = "/horse/review-remove";
                               break;
                case 'hero'  : url = "/hero/review-remove";
                               break;
            }
            const param = {
                objectId : props.objectId,
                userId   : props.userId
            }
            AxiosCall("delete", API_IP_INFO + url, param, (data) => {
                        
                        if ( data === 1 ) {
                            alert("리뷰삭제완료!!");
                            Reload();
                        }
                  
            }, (e) => {
                            errorHandler(e.response);
            }, token);
        }
    }
    const Reload = () => {

        let url = '';
        switch( props.objectType ) {
            case 'horse' : url = "/horse/review-list";
                           break;
            case 'hero'  : url = "/hero/review-list";
                           break;
        }

        const param = {
            userId   : props.userId,
            objectId : props.objectId
        }

        AxiosCall("get", API_IP_INFO + url, param, (data) => {
            setRevieList(data);
        }, (e) => {
                        errorHandler(e.response);
         }, token);
    }

    return (
        <>
            <div className="popchild reviewContentDiv">
                    <div className="contentHeader">
                        <h2>리뷰 및 평가 ({reviewList.length})</h2>
                    </div>
                    <div className="contentMain">
                                   <ul>
                                    {
                                        reviewList && reviewList.map(( v: any, index : number ) => {
                                            const score = Math.floor(Number(v.SCORE));
                                            return (
                                                <li key={v +'revietarLi' + String(index)}>
                                                <div key={v +'revietarDiv1' + String(index)}>
                                                    <div className="reviewText" key={v +'revietarDiv2' + String(index)}>
                                                        <span><img src={require("../assets/image/user.png")} alt='유저 이미지'></img>
                                                            <p className="nickNameSpan snans" key={v +'revietarPtag' + String(index)}>{v.USER_NAME}</p>
                                                            <div className="startReviewImgDiv">
                                                            {
                                                            array.map(( value : any, indexValue : number ) => {
                                                                return(      
                                                                    <img
                                                                        key={value +'revietar' + String(index) + String(indexValue)}
                                                                        src={value < score ? require("../assets/image/star.png") : require("../assets/image/blackstar.png")} 
                                                                        alt="starIcon"
                                                                    />
                                                                 )})
                                                            }
                                                            </div>
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
                                    <div className="content">
                                        <div className="contentDiv1">
                                            <p className="content_textP2 snans">별점을 선택해주세요.</p>
                                            <div className="content_star">
                                                {array.map((index) => (
                                                            <img
                                                            key={index}
                                                            onClick={() => starScore(index)}
                                                            src={clicked[index] ? require("../assets/image/star.png") : require("../assets/image/blackstar.png")} 
                                                            alt = "starIcon"
                                                />))}
                                                <span className="content_star_span snans">{ clickedStarNum }/5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <textarea className="reviewtextarea" onChange={textAreaChangeHandle} disabled = {props.userId=== null ? true: false } placeholder={props.userId=== null ? "로그인이 필요합니다." : "리뷰를 작성해주세요." }></textarea>
                                    <button ref={buttonElement} onClick={saveHandler}>저장</button>
                               </div>
                            </div>     
        </>
    )
}

export const ReViewCompo = React.memo(ReViewCp);