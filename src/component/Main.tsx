import { Route, Routes } from "react-router-dom";

/*Component*/
import Section2             from "./Section2";
import Login                from "./Login";
import EvemtBoardCompo      from "../component/board/event/EvemtBoardCompo";
import IntroduceCompo       from "../component/introduce/IntroduceCompo";
import MainPageInfoCompo    from "../section2Component/mainPageInfo/MainPageInfoCompo";
import LoginOutlet          from "./LogOut";
import MemberShipNav        from "./MemberShipNav";

const Main = ( props : any ) => {
    return (
        <>  
            <main id="main" role="main">
                <MemberShipNav></MemberShipNav>
                <Routes>
                    {/* 로그인 */}
                    <Route element={<LoginOutlet/>}>
                        {/* 메인 페이지 */}
                        <Route path="/"                       element={<MainPageInfoCompo/>}/>
                        {/* 게임 정보 */}
                        <Route path="gameInfo/*"              element={<Section2/>}/>
                        <Route path="eventInfo"               element={<EvemtBoardCompo/>}/>
                        <Route path="introduce"               element={<IntroduceCompo/>}/>
                        <Route path="eventInfo/eventTextInfo" element={<EvemtBoardCompo/>}/>
                        <Route path="loginInfo"               element={<Login/>}/>
                     </Route>
                </Routes>
                {/* 미활성 컨텐츠 */}
            </main>
        </>
    )
}

export default Main;