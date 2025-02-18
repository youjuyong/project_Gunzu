import { memo, useCallback, useState, useRef } from "react";
import { useLocation }       from "react-router-dom";
import React                 from "react";
import moment                from 'moment';
import 'moment/locale/ko';

import { useNavigate             } from "react-router-dom";
import { LoginMemberShipModal    } from "../component/modal/LoginMemberShipModal"
import { API_IP_INFO             } from "../../src/utils/apiUrl";
import { axiosCall, errorHandler } from "../../src/utils/common/common"; 

const Login = () => {
    const [ form, setForm ] = useState({userId: '', userPassWord: ''});
    const {userId, userPassWord} = form;
    const movePage = useNavigate();
    const idInput = useRef<HTMLInputElement>(null);
    // 회원 가입 모달 open 여부
    const [addMdOpenValue, setAddmdOpen] = useState(false);
    const location = useLocation();
       

    const setBitaddOpenValue = useCallback((data: boolean) => {
        setAddmdOpen(data);
    }, [addMdOpenValue]);

    // 회원가입 버튼 클릭시
    function memberShipEventHandle() {
        setAddmdOpen(true);
    }
    
    const LoginformSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.userId !== '' && form.userPassWord !== '') {
            axiosCall("POST", API_IP_INFO + "/user/login", {
                userId: form.userId,
                userPwd: form.userPassWord
            }, function (data) {
                localStorage.setItem("token", `Bearer ${data.accessToken}`);
                localStorage.setItem("id", data.userId);
                localStorage.setItem("conn_dt", moment().format('YYYY-MM-DD'));
                localStorage.setItem("conn_tm", moment().format('HH:mm:ss'));
                localStorage.setItem("expireIn", data.tokenExpiresIn);
                localStorage.setItem("nickName",data.member.userName);
                localStorage.setItem("cityYn",data.member.cityYn);
                localStorage.setItem("cityUserName",data.member.cityUserName);
                localStorage.setItem("regDt",data.member.registeredDate);
                // if (isRemember) {
                //     setCookie("userId", form.userId, {maxAge: 60 * 60 * 24})
                // } else {
                //     removeCookie("userId");
                // }
                movePage("/");
                window.location.reload();
                
                
            }, (e) => {
                errorHandler(e.response);
            });
        } else {
            alert("ID와 비밀번호를 확인해주세요.");
            setForm({userId: '', userPassWord: ''});
            idInput.current && idInput.current.focus();
        }
    }

    // 입력창 변화시
    const changeValueIdPw = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    return (
        <>
            <div id="login_wrap">
                <div className="login_box">
                <LoginMemberShipModal
                        modalBoolean={addMdOpenValue}
                        setModalIsOpen={setBitaddOpenValue}
                    />
                     <form onSubmit={LoginformSubmit}>
                        <div className="login_text">
                            <ul>
                                <li>
                                    <input type="text" title="ID" name='userId' value={userId} ref={idInput}
                                    onChange={changeValueIdPw} placeholder="사용자 ID를 입력해 주세요"/>
                                </li>
                                <li>
                                    <input type="password" title="PW" name='userPassWord' value={userPassWord}
                                    onChange={changeValueIdPw} placeholder="비밀번호를 입력해 주세요"/>
                                </li>
                            </ul>
                            <button className="btn_pass" type="button" title="회원가입" onClick={memberShipEventHandle}>회원가입</button>
                            <button title="로그인" className="btn_login">로그인</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
