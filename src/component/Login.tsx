import { memo, useCallback, useState } from "react";
import React    from "react";
import { LoginMemberShipModal } from "../component/modal/LoginMemberShipModal"

const Login = () => {

    // 회원 가입 모달 open 여부
    const [addMdOpenValue, setAddmdOpen] = useState(false);

    const setBitaddOpenValue = useCallback((data: boolean) => {
        setAddmdOpen(data);
    }, [addMdOpenValue]);

    // 회원가입 버튼 클릭시
    function memberShipEventHandle() {
        console.log("test");
        setAddmdOpen(true);
    }
    console.log(addMdOpenValue);
    return (
        <>
            <div id="login_wrap">
                <div className="login_box">
                <LoginMemberShipModal
                        modalBoolean={addMdOpenValue}
                        setModalIsOpen={setBitaddOpenValue}
                    />
                     <form>
                        <div className="login_text">
                            <ul>
                                <li>
                                    <input type="text" placeholder="사용자 ID를 입력해주세요."></input>
                                </li>
                                <li>
                                    <input type="text" placeholder="비밀번호를 입력해주세요."></input>
                                </li>
                            </ul>
                            <button className="btn_pass" type="button" title="회원가입" onClick={memberShipEventHandle}>회원가입</button>
                            <button title="로그인" type="button" className="btn_login">로그인</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
