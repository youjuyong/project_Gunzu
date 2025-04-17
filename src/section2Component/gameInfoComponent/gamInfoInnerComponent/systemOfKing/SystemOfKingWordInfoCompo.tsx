import { useEffect } from "react";
import React    from "react";
import { LazyImageHook    } from "../../../../../src/utils/common/common";
import { LazyDivHook      } from "../../../../../src/utils/common/common";
import systemKingTitle      from "../../../../assets/image/systemKingTitle.png";

/* 왕실시스템이란? */
const SystemOfKingWordInfo = () => {

    useEffect(()=> {
        LazyDivHook(".lazy-background",".skeleton-image",".skeleton-wrapper");
    },[]);

    return (
        <> 
            <div className='intro_title_raw'>
                <div className='intro_div2 intro1 lazy-background' data-bg={`url(${systemKingTitle})`}>
                    <div className="skeleton-wrapper">
                        <div className="skeleton-image">
                            <h3 className="king_title_h3">왕실이란?</h3>
                            <p className="king_title_pTag">
                            서버별로 유저들의 투표로 선출되는 '군주'를 중심으로 6조(이조, 에조, 호조, 병조, 공조, 형조) 판서들과
                                <br/>
                                포교, 수호천사를 일컫는 집단을 의미함. 군주의 임기는 현실 시간 72일(대략 3달)이며 임기 동안 
                                <br/>
                                서버 공지 수정, 유저 소환, 수감 권한을 가진다.
                                <br/>
                                군주는 마을들의 화합을 도모하며 유저들의 편의성을 고려하는 중재자의 위치에 있다.
                            </p>
                        </div>
                    </div>
                </div>
                 <div className="king_body_div">
                    <div className="content1">
                        <h3 className="king_body_h3">왕실 목록</h3>
                        <div className = "content1_div">
                            <dl className="dl1">
                                <dt>
                                    <LazyImageHook src={require("../../../../assets/image/test33.png")} alt={'군주'} className={''} height={309}/> 
                                    <span className="dl1Span">군주</span>
                                </dt>
                                <dd>
                                    <br></br>
                                    <div className="img1"><img src={require("../../../../assets/image/sub_title_arrow.png")} alt='화살표'></img></div><h3 className="h11">제한 : 200렙이상</h3>
                                    <div className="img2"><img src={require("../../../../assets/image/sub_title_arrow.png")} alt='화살표'></img></div><h3 className="h22">임기 : 72일</h3>
                                    <div className="img3"><img src={require("../../../../assets/image/sub_title_arrow.png")} alt='화살표'></img></div><h3 className="h33">권한 : 유저소환(/recall), 캐릭터 수감, 서버 공지(/king)</h3>
                                    <div className="img4"><img src={require("../../../../assets/image/sub_title_arrow.png")} alt='화살표'></img></div><h3 className="h44">임기 규정: 연임은 1회에 가능, 중임 무제한</h3>
                                    <div className="img5"><img src={require("../../../../assets/image/sub_title_arrow.png")} alt='화살표'></img></div><h3 className="h55">임명권한 : (이조, 예조, 호조, 병조, 형조, 공조) 판서</h3>
                                </dd>
                            </dl>
                        </div>
                        <div className = "content2_div">
                            <dl className="dl2">
                                <dt>
                                    <span className="dl2_sp">이조판서</span>
                                    <span className="info"></span>
                                </dt>
                                <dd>
                                    <br></br>
                                    역할 : 서버내 경제, 정책 담당
                                    <br></br>
                                    <br></br>
                                    권한 : (1) 명나라 상인의 구매가격을 설정 
                                    <br></br>
                                    (2) 하멜의 선박 구매가격을 설정 
                                    <br></br>
                                    (3) 무역상인의 관세 설정
                                </dd>
                            </dl>
                            <dl className="dl2">
                                <dt>
                                    <span className="dl2_sp">호조판서</span>
                                    <span className="info"></span>
                                </dt>
                                <dd>
                                    <br></br>
                                    역할 : 주민 관련 담당
                                    <br></br>
                                    <br></br>
                                    권한 : (1) 마을 주민수 설정
                                    <br></br>
                                    (2) 추천인 포상금 설정
                                    <br></br>
                                    (3) 신규 유저 정착금 설정
                                    <br></br>
                                    (4) 마을 내 상점 수 설정
                                    <br></br>
                                    (5) 가족 등록
                                </dd>
                            </dl>
                            <dl className="dl2">
                                <dt>
                                    <span className="dl2_sp">예조판서</span>
                                    <span className="info"></span>
                                </dt>
                                <dd>
                                    <br></br>
                                    역할 : 서버 정착 지원 담당
                                    <br></br>
                                    <br></br>
                                    권한 : (1) 수호 천사 임명권
                                    <br></br>
                                    (2) 양이 전쟁 수 설정
                                </dd>
                            </dl>
                            <dl className="dl2">
                                <dt>
                                    <span className="dl2_sp">병조판서</span>
                                    <span className="info"></span>
                                </dt>
                                <dd>
                                    <br></br>
                                    역할 : 공성전 담당
                                    <br></br>  <br></br>
                                    권한 : (1) 마을 공성전 중재
                                    <br></br>
                                    (2) 공성 지속시간 설정
                                </dd>
                            </dl>
                            <dl className="dl2">
                                <dt>
                                    <span className="dl2_sp">형조판서</span>
                                    <span className="info"></span>
                                </dt>
                                <dd>
                                    <br></br>
                                    역할 : 게임 내 범죄 관리
                                    <br></br>  <br></br>
                                    권한 : (1) 포교 임명 권한
                                    <br></br>
                                    (2) 캐릭터 수감
                                    <br></br>
                                    (3) 캐릭터 소환(/recall)
                                    <br></br>
                                    (4) 매크로 순찰 시스템
                                </dd>
                            </dl>
                            <dl className="dl2">
                                <dt>
                                    <span className="dl2_sp">공조판서</span>
                                    <span className="info"></span>
                                </dt>
                                <dd>
                                    <br></br>
                                    역할 : 장인 관리 담당
                                    <br></br>  <br></br>
                                    권한 : (1) 제조 경험치 보너스 수치 설정
                                </dd>
                            </dl>
                        </div>
                    </div>
                      
                </div>
            </div>
        </>
    )
}

export const  SystemOfKingWordInfoCompo = React.memo(SystemOfKingWordInfo);