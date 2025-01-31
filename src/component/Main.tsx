import { Route, Routes, useLocation } from "react-router-dom";

/*Component*/
import Section1 from "./Section1";
import Section2 from "./Section2";

import MainPageInfoCompo from "section2Component/mainPageInfo/MainPageInfoCompo";

const Main = () => {

    return (
        <>  
            <main id="main" role="main">
                <Section1></Section1>
                <Routes>
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