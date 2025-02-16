import { Route, Routes, useLocation } from "react-router-dom";

/*Component*/
import Section2          from "./Section2";
import Login             from "./Login";
import MainPageInfoCompo from "../section2Component/mainPageInfo/MainPageInfoCompo";

const Main = () => {

    return (
        <>  
            <main id="main" role="main">
                <Routes>
                      {/* 로그인 */}
                     <Route path="loginInfo"     element={<Login/>}/>
                      {/* 메인 페이지 */}
                     <Route path="/"         element={<MainPageInfoCompo/>}/>
                      {/* 게임 정보 */}
                     <Route path="gameInfo/*"         element={<Section2/>}/>
                </Routes>
                {/* 미활성 컨텐츠 */}
            </main>
        </>
    )
}

export default Main;