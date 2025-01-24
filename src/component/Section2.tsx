
import { Route, Routes, useLocation }     from "react-router-dom";

/* Section2 */
import GameInfoHeroChangeCompo from "section2Component/gameInfoComponent/gameInfoHeroChange";  // 영웅강림
import GameInfoHorseHouseCompo from "section2Component/gameInfoComponent/gameInfoHorseHouse";  // 마굿간
import GameInfoQuestCompo      from "section2Component/gameInfoComponent/gameInfoQuest";       // 퀘스트

/* 게임정보(마굿간) */
import HorsHouseExplainCompo    from "section2Component/gameInfoComponent/gamInfoInnerComponent/HorsHouseExplainCompo";    // 마굿간 이란?
import HorseHouseWideMehodCompo from "section2Component/gameInfoComponent/gamInfoInnerComponent/HorseHouseWideMehodCompo"; // 마굿간 확장 방법
import HorsListCompo            from "section2Component/gameInfoComponent/gamInfoInnerComponent/HorsListCompo";            // 마굿간 탈것 리스트

const Section2 = () => {
 
    return (
        <section id="section2">
            <div className="section2Div">
                <div className="section2DivInner">
                        <Routes>
                                <Route path="horseHouseInfo"    element={<GameInfoHorseHouseCompo/>}>
                                        <Route path="horseHouseWordInfo"      element={<HorsHouseExplainCompo/>}/>
                                        <Route path="horseHouseWideMehodInfo" element={<HorseHouseWideMehodCompo/>}/>
                                        <Route path="horseListInfo"           element={<HorsListCompo/>}/>
                                </Route>
                                <Route path="heroChangeInfo"    element={<GameInfoHeroChangeCompo/>}/>
                                <Route path="questInfo"         element={<GameInfoQuestCompo/>}/>
                        </Routes>
                </div>
            </div>
        </section>
    );
}

export default Section2;