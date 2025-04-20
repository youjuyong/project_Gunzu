import { useNavigate  } from "react-router-dom";
import { useState     } from "react";
import { useSelector  } from "react-redux";
import { rootState    } from "../utils/reducer/index";
import { useDispatch  } from "react-redux";
import { user_clear   } from "../utils/reducer/userInfo";

import LoginMemberShipModifyModal from "./modal/loginModal/LoginMemberShipModifyModal";
import LoginPassWordModifyModal   from "./modal/loginModal/LoginPassWordModifyModal";
import React    from "react";

const MembershipNavCompo = ( props : any ) => {
    const dispatch = useDispatch();
    const movePage = useNavigate();
    const { userId, nickName, conn_dt, conn_tm, cityYn, cityUserName } = useSelector((state: rootState)=>state.userReducer);

    // 회원 정보 수정 모달 open 여부
    const [addMdOpenValue, setAddmdOpen] = useState(false);
    // 패스워드 수정 모달 open 여부
    const [pwModalOpenValue, setPwModalOpenValue] = useState(false);

    // 내정보 네비게이션 취소 버튼 클릭시
    function cancleClickHandle () {
        const bgDiv:any     = document.querySelector("#loginDivBg");
        const layOutDiv:any = document.querySelector("#loginlayOut");

        if ( bgDiv?.style !== null ) {
            bgDiv.style.visibility = "hidden";
        }

        if ( layOutDiv?.style !== null ) {
            layOutDiv.style.visibility = "hidden";
            layOutDiv.style.opacity = 0;
        }
    }

    // 로그아웃 버튼 클릭시
    function logOutClickHandler () {
        dispatch(user_clear());
        movePage("/");
        window.location.reload();
    }

    // 회원 정보 수정 버튼 클릭시
    function loginInfoModifyHandler () {
        setAddmdOpen(true);
        setPwModalOpenValue(false);
    }

    // 비밀번호 재설정 버튼 클릭시 
    function passWordInfomodify () {
        setPwModalOpenValue(true);
        setAddmdOpen(false);
    }

    return (
       <>      
        <LoginMemberShipModifyModal  modalBoolean={addMdOpenValue}    setModalIsOpen={setAddmdOpen} id={userId} name={nickName} cityYn={cityYn} cityUserName={cityUserName}></LoginMemberShipModifyModal>
         <LoginPassWordModifyModal  modalBoolean={pwModalOpenValue} setModalIsOpen={setPwModalOpenValue} id={userId} name={nickName} cityYn={cityYn} cityUserName={cityUserName}></LoginPassWordModifyModal>             
          <div className="loginDivBg" id="loginDivBg" style={{visibility : 'hidden'}}></div>
                <div className="loginlayOut loayOutBann" id="loginlayOut"  style={{visibility : 'hidden'}}>
                    <div className="infoMy">
                        <span className="loginNickName snans">
                            <span className="nickNameAtag">{nickName}</span>
                            <p>님 안녕하세요!</p>
                            <p className="accessTimePtag">접속시간   : {conn_dt} {conn_tm}</p>
                        </span>
                        <div className="loginButtonDiv">
                            <button type="button" className="modibtn1 btn" onClick={loginInfoModifyHandler}>정보수정</button>
                            <button type="button" className="passbtn1 btn" onClick={passWordInfomodify}>비밀번호재설정</button>
                        </div>
                        <div className="loginButtonDiv2">
                            <button type="button" className="loggoutbtn1 btn" onClick={logOutClickHandler}>로그아웃</button>
                        </div>
                    </div>
                    <div className="cancleDiv">
                        <a>
                            <span onClick={cancleClickHandle} className="cancleIcon"></span>
                        </a>
                    </div>
                </div>
       </>
    )
}


 const MemberShipNav =  React.memo(MembershipNavCompo);
 export default MemberShipNav;