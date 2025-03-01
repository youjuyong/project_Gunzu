import React from "react"; // eslint-disable-line no-unused-vars
import {Navigate, Outlet} from "react-router-dom";
import { useNavigate             } from "react-router-dom";

const LoginOutlet = () => {

    const movePage = useNavigate();

    const isAuthenticate = () => {
        const token = sessionStorage.getItem("token");
        const expireIn = Number(sessionStorage.getItem("expireIn"));
      
        if ( token !== null &&  expireIn < new Date().getTime()) {
            alert("토큰이 만료되었습니다. 다시 로그인 해주세요.(2시간)");
            sessionStorage.clear();
            return false;
        }

        return true;
    }

    return isAuthenticate() ? (
        <>
          <Outlet/>
        </>
    ) : (
        <Navigate to={'loginInfo'} replace={true} state={ {url: 'loginInfo', menuName: '로그인', mainMenuName: '로그인'}}/>
    )
}

export default LoginOutlet






