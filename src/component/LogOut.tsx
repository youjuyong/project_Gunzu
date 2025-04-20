import React from "react"; // eslint-disable-line no-unused-vars
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { rootState    } from "../utils/reducer/index";
import { useSelector  } from "react-redux";
import { useDispatch  } from "react-redux";
import { user_clear   } from "../utils/reducer/userInfo";

const LoginOutlet = () => {

    const dispatch = useDispatch();
    const { token, expireIn } = useSelector((state: rootState)=> state.userReducer);

    const isAuthenticate = () => {
    
        if ( token !== null &&  expireIn && expireIn < new Date().getTime()) {
            alert("토큰이 만료되었습니다. 다시 로그인 해주세요.(2시간)");
            dispatch(user_clear());
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






