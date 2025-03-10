
import LocationCompo             from "../../commComponent/LocationCompo";
import { useLocation }           from "react-router-dom";
import { LazyDivHookMulti      } from "../../../src/utils/common/common";
import React, { useEffect,memo } from "react";
import { BackImageDiv }          from "../../../src/utils/commonStyles";
import pitcuilt                  from "../../assets/image/pitcuilt.png";
import yangPng                   from "../../assets/image/yangPng.png";
import craftIntroduce            from "../../assets/image/craftIntroduce.png";
                                
const IntroduceCp = () => {
    const { state } = useLocation();
    
    useEffect(() => {
            LazyDivHookMulti(".skeleton-wrapper",".skeleton-image");
    },[]);

    return (
        <div id="event_wrap">
                    <article className="articlewrap">
                    <LocationCompo submenu={state.menuName} mainMenuName={state.mainMenuName}></LocationCompo> 
                        <div className="contentstitle snans"><h3>홈페이지 소개</h3></div>
                        <div className="contenbox">
                            <div className="hpIntroduce snans">
                                <strong>구리댁 닷컴</strong>
                                은 <br></br>
                                군주온라인 초보자, 복귀자를 위해 유용한 (게임, 통계) 정보를<br></br>
                                제공하는 사이트입니다.
                            </div>
                            <div className="hpIntroduce2 snans">
                                    <dl>
                                        <dt>
                                            <BackImageDiv height={'325px'}>
                                                <div className="skeleton-wrapper">
                                                            <div className="skeleton-image">{`url(${pitcuilt})`}</div>
                                                </div>
                                            </BackImageDiv>
                                            <span>캐릭터 육성에 반드시<br></br> 필요한 게임 정보들</span>
                                        </dt>
                                        <dd>
                                            마구간 ( 소개, 유의사항, 탈것 ), 홍길동 ( 전투향상술,<br></br> 무기별 기술 추천 ) 캐릭터 육성에 반드시 필요한 <br></br> 정보들을 제공 해드립니다. 
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>
                                            <BackImageDiv height={'325px'}>
                                                <div className="skeleton-wrapper">
                                                            <div className="skeleton-image">{`url(${yangPng})`}</div>
                                                </div>
                                            </BackImageDiv>
                                            <span>양이 전쟁, 주민수 통계 정보</span>
                                        </dt>
                                        <dd>
                                           초보자들이 마을 선택에 참고 할 수 있도록 <br></br> 다양한 통계 정보를 제공 해드립니다.
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>
                                             <BackImageDiv height={'325px'}>
                                                <div className="skeleton-wrapper">
                                                            <div className="skeleton-image">{`url(${craftIntroduce})`}</div>
                                                </div>
                                            </BackImageDiv>
                                            <span>마을별 장인 정보</span>
                                        </dt>
                                        <dd>
                                            마을 선택에 참고 할 수 있도록 <br></br> 마을별 장인 정보를 제공 해드립니다.
                                        </dd>
                                    </dl>
                            </div>
                            <div className="hpIntroduce snans">
                                <strong>사이트에 대한 건의, 지적 사항은</strong> <br></br>
                                 하단의 주소로 문의 부탁드립니다. <br></br>
                            </div>
                        </div>
                    </article>
        </div>
    )
}

const IntroduceCompo = React.memo(IntroduceCp);
export default IntroduceCompo;