
import { Route, Routes, useLocation, Link, useParams, useSearchParams }     from "react-router-dom";

/* Section2 */
import GameInfoHeroChangeCompo from "../section2Component/gameInfoComponent/gameInfoHeroChange";  // 영웅강림
import GameInfoHorseHouseCompo from "../section2Component/gameInfoComponent/gameInfoHorseHouse";  // 마구간
import GameInfoQuestCompo      from "../section2Component/gameInfoComponent/gameInfoQuest";       // 퀘스트
import GameInfoRecallHeroCompo from "../section2Component/gameInfoComponent/gameInfoRecallHero";  // 소환영웅

/* 게임정보(마구간) */
import HorsHouseExplainCompo    from "../section2Component/gameInfoComponent/gamInfoInnerComponent/horseHouse/HorsHouseExplainCompo";    // 마구간 이란?
import HorseHouseWideMehodCompo from "../section2Component/gameInfoComponent/gamInfoInnerComponent/horseHouse/HorseHouseWideMehodCompo"; // 마구간 확장 방법
import HorsListCompo            from "../section2Component/gameInfoComponent/gamInfoInnerComponent/horseHouse/HorsListCompo";            // 마구간 탈것 리스트

/* 게임정보(소환영웅)  */
import RecallHeroWordInfoCompo   from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroWordInfoCompo"; // 소환영웅이란?
import RecallHeroRecomandCompo   from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroRecomandCompo"; // 소환영웅이란?
import RecallHeroAmuletCompo     from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroAmuletCompo";   // 소환영웅이란?
import RecallHeroExpireCompo     from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroExpireCompo";   // 소환영웅이란?
import RecallHeroListCompo       from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroListCompo";     // 소환영웅이란?

/* 공통 컴포넌트 location */
import LocationCompo            from "../commComponent/LocationCompo";

const Section2 = () => {

    const location = useLocation();
    const {pathname, state} = location;
   
    return (
        <section id="section2">
            <div className="section2Div">
                <LocationCompo submenu={state.menuName} mainMenuName={state.mainMenuName}></LocationCompo>
                <div className="section2DivInner">
                        <Routes>
                                <Route path="horseHouseInfo"    element={<GameInfoHorseHouseCompo/>}>
                                        <Route path="horseHouseWordInfo"      element={<HorsHouseExplainCompo/>}/>
                                        <Route path="horseHouseWideMehodInfo" element={<HorseHouseWideMehodCompo/>}/>
                                        <Route path="horseListInfo"           element={<HorsListCompo/>}/>
                                </Route>
                                <Route path="heroChangeInfo"    element={<GameInfoHeroChangeCompo/>}/>
                                <Route path="recallHeroInfo"    element={<GameInfoRecallHeroCompo/>}>
                                        <Route path="recallHeroWordInfo"      element={<RecallHeroWordInfoCompo/>}/>
                                        <Route path="recallHeroRecommand"      element={<RecallHeroRecomandCompo/>}/>
                                        <Route path="recallHeroAmulet"      element={<RecallHeroAmuletCompo/>}/>
                                        <Route path="recallHeroExpiration"      element={<RecallHeroExpireCompo/>}/>
                                        <Route path="recallHeroList"      element={<RecallHeroListCompo/>}/>
                                </Route>
                                <Route path="questInfo"         element={<GameInfoQuestCompo/>}/>
                        </Routes>
                </div>
            </div>
        </section>
    );
}

export default Section2;