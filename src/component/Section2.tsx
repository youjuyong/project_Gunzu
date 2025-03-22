
import { Route, Routes, useLocation }     from "react-router-dom";

/* Section2 */
import GameInfoHeroChangeCompo     from "../section2Component/gameInfoComponent/gameInfoHeroChange";     // 영웅강림
import GameInfoHorseHouseCompo     from "../section2Component/gameInfoComponent/gameInfoHorseHouse";     // 마구간
import GameInfoQuestCompo          from "../section2Component/gameInfoComponent/gameInfoQuest";          // 퀘스트
import GameInfoRecallHeroCompo     from "../section2Component/gameInfoComponent/gameInfoRecallHero";     // 소환영웅
import GameInfoSystemOfKingCompo   from "../section2Component/gameInfoComponent/gameInfoSystemOfKing";   // 왕실시스템
import GameInfoCraftsManCompo      from "../section2Component/gameInfoComponent/gameInfoCraftsMan";      // 장인목록
import GameInfoVillageStaticsCompo from "../section2Component/gameInfoComponent/gameInfoVillageStatics"; // 주민수
import GameInfoYangStaticsCpCompo  from "../section2Component/gameInfoComponent/gameInfoYangStatics";    // 양이전쟁
import GameInfoHongGilDong         from "../section2Component/gameInfoComponent/gameInfoHongGilDong";    // 홍길동

/* 게임정보(마구간) */
import HorsHouseExplainCompo       from "../section2Component/gameInfoComponent/gamInfoInnerComponent/horseHouse/HorsHouseExplainCompo";    // 마구간 이란?
import HorseHouseWideMehodCompo    from "../section2Component/gameInfoComponent/gamInfoInnerComponent/horseHouse/HorseHouseWideMehodCompo"; // 마구간 확장 방법
import HorsListCompo               from "../section2Component/gameInfoComponent/gamInfoInnerComponent/horseHouse/HorsListCompo";            // 마구간 탈것 리스트

/* 게임정보(소환영웅)  */
import RecallHeroWordInfoCompo     from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroWordInfoCompo";     // 소환영웅이란?
import RecallHeroRecomandCompo     from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroRecomandCompo";     // 소환영웅추천
import RecallHeroAmuletCompo       from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroAmuletCompo";       // 소환영웅부적
import RecallHeroExpireCompo       from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroExpireCompo";       // 소환영웅만료일
import RecallHeroListCompo         from "../section2Component/gameInfoComponent/gamInfoInnerComponent/recallHero/RecallHeroListCompo";         // 소환영웅리스트

/* 왕실 시스템 */
import { SystemOfKingWordInfoCompo        }  from "../section2Component/gameInfoComponent/gamInfoInnerComponent/systemOfKing/SystemOfKingWordInfoCompo";          // 왕실이란?
import { SystemOfKingLawInfoCompo         }  from "../section2Component/gameInfoComponent/gamInfoInnerComponent/systemOfKing/SystemOfKingLawInfoCompo";           // 왕실 법안 
import { SystemOfKingMacroPatrolInfoCompo }  from "../section2Component/gameInfoComponent/gamInfoInnerComponent/systemOfKing/SystemOfKingMacroPatrolInfoCompo";   //  매크로 순찰
import { SystemOfKingMacroThinkInfoCompo  }  from "../section2Component/gameInfoComponent/gamInfoInnerComponent/systemOfKing/SystemOfKingMacroThinkInfoCompo";    // 매크로 판별창

/* 장인 목록 */
import { CraftsManListInfoCompo           }  from "../section2Component/gameInfoComponent/gamInfoInnerComponent/craftsMan/CraftsManListInfoCompo";                 // 장인 모곩

/* 주민수 통계 */
import { VillageStaticsInfoCompo          }  from "../section2Component/gameInfoComponent/gamInfoInnerComponent/villageStatics/VillageStaticsInfoCompo";           // 주민수 통계
import { YangStaticsInfoCompo             }  from "../section2Component/gameInfoComponent/gamInfoInnerComponent/yangStatics/YangStaticsInfoCompo";                 // 양이전쟁 통계

/* 홍길동 */
import HongGilDongWordInfoCompo              from "../section2Component/gameInfoComponent/gamInfoInnerComponent/honGilDong/HongGilDongWordInfoCompo";              // 홍길동
import HongGilDongRecommandCompo             from "../section2Component/gameInfoComponent/gamInfoInnerComponent/honGilDong/HongGilDongRecommandCompo";             // 전투향상술 추천

/* 공통 컴포넌트 location */
import LocationCompo            from "../commComponent/LocationCompo";
import Section1                 from "./Section1";
import { Section2DivInner }     from "../utils/commonStyles";

const Section2 = () => {
    const location = useLocation();
    const {state} = location;
    
    return (
        <>
                <Section1/>
                <section id="section2">
                <div className="section2Div">
                        <LocationCompo submenu={state?.menuName} mainMenuName={state?.mainMenuName}></LocationCompo>
                                <Section2DivInner className="section2DivInner" width={ state?.url === "hongGilDongRecommand" ? '85rem' : '95rem'}>
                                <Routes>
                                <Route path="horseListInfo"           element={<HorsListCompo/>}/>
                                        <Route path="horseHouseInfo"    element={<GameInfoHorseHouseCompo/>}>
                                                <Route path="horseHouseWordInfo"      element={<HorsHouseExplainCompo/>}/>
                                                <Route path="horseHouseWideMehodInfo" element={<HorseHouseWideMehodCompo/>}/>
                                                <Route path="horseListInfo"           element={<HorsListCompo/>}/>
                                        </Route>
                                        <Route path="heroChangeInfo"    element={<GameInfoHeroChangeCompo/>}/>
                                        <Route path="recallHeroInfo"    element={<GameInfoRecallHeroCompo/>}>
                                                <Route path="recallHeroWordInfo"      element={<RecallHeroWordInfoCompo/>}/>
                                                <Route path="recallHeroRecommand"     element={<RecallHeroRecomandCompo/>}/>
                                                <Route path="recallHeroAmulet"        element={<RecallHeroAmuletCompo/>}/>
                                                <Route path="recallHeroExpiration"    element={<RecallHeroExpireCompo/>}/>
                                                <Route path="recallHeroList"          element={<RecallHeroListCompo/>}/>
                                        </Route>
                                        <Route path="systemOfKing"      element={<GameInfoSystemOfKingCompo/>}>
                                                <Route path="systemOfKingWordInfo"     element={<SystemOfKingWordInfoCompo/>}/>
                                                <Route path="systemOfKingLawInfo"      element={<SystemOfKingLawInfoCompo/>}/>
                                                <Route path="systemOfKingMacroPatrol"  element={<SystemOfKingMacroPatrolInfoCompo/>}/>
                                                <Route path="systemOfKingMacoThinking" element={<SystemOfKingMacroThinkInfoCompo/>}/>
                                        </Route>
                                        <Route path="craftsManInfo"     element={<GameInfoCraftsManCompo/>}>
                                                <Route path="craftsManListInfo"        element={<CraftsManListInfoCompo/>}/>
                                        </Route>
                                        <Route path="staticsInfo"       element={<GameInfoVillageStaticsCompo/>}>
                                                <Route path="villageStaticsInfo"       element={<VillageStaticsInfoCompo/>}/>
                                        </Route>
                                        <Route path="staticsInfo"       element={<GameInfoYangStaticsCpCompo/>}>
                                                <Route path="yangStaticsInfo"          element={<YangStaticsInfoCompo/>}/>
                                        </Route>
                                        <Route path="hongGilDongInfo"    element={<GameInfoHongGilDong/>}>
                                                <Route path="hongGilDongWordInfo"       element={<HongGilDongWordInfoCompo/>}/>
                                                <Route path="hongGilDongRecommand"      element={<HongGilDongRecommandCompo/>}/>
                                        </Route>
                                        <Route path="questInfo"         element={<GameInfoQuestCompo/>}/>
                                </Routes>
                        </Section2DivInner>
                </div>
                </section>
        </>
    );
}

export default Section2;