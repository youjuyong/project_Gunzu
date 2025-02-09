import { memo , useState } from "react";
import { FlippingPages }   from 'flipping-pages';
import React    from "react";
import 'flipping-pages/dist/style.css';

const SystemOfKingLawInfo = ( ) => {

    const [selected, setSelected] = useState(0);

    const back = () => {
        setSelected(selected =>  selected - 1);
    };

    const next = () => {
        setSelected(selected => selected + 1);
    };

    return (
        <>
        <div className='intro_title'>
            <h3 className="magutganAlert_h5">117대 왕실 법안</h3>
            <div className="raw_Div">
                <div className="pages">
                    <label className="book_label">
                        <FlippingPages
                            direction="right-to-left"
                            onSwipeEnd={setSelected}
                            selected={selected}
                            animationDuration={1000}
                        >
                            {/* 1페이지 */}
                            <div className="book_page_content">
                                <div className="page">
                                       <h1 className="conent_title">제 1 장 [ 왕실 ] </h1>
                                       <div className="page__content-blockquote">
                                            <p className="page__content-blockquote-text">1. 세종 왕실은 투표를 통해 정해진 군주와 군주가 임명한 판서 및 포교와 수호천사로 이루어지며, 왕실은 운영자가 부여한 고유한 권한을 가진다.</p>
                                            <p className="page__content-blockquote-text">2. 왕실에게 부여되는 의무와 권리는 https://goonzu.valofe.com/vote/info에 있는 운영원칙을 따른다.(홈페이지-군주선거-선거안내 및 등록)</p>
                                       </div>
                                       <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">1조 [ 집행 방해 ]</p>
                                             <p className="page__content-text1_2">1. 왕실의 권한 및 법안은 군주온라인 운영원칙의 보호를 받는다.</p>
                                       </div>
                                       <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 법안 집행  ]</p>
                                                <p className="page__content-text1_2">1. 왕실은 제정된 법안을 집행하는 것을 방해를 받지 않는다. <span>단, 왕실은 서버 내 법안에 대한 숙지 요청을 늘 해야한다.(2항에서 보충)</span></p>
                                                <p className="page__content-text1_2">2. 사건에 대하여 법안의 미숙지는 회피의 사유가 되지 않는다.</p>
                                                <p className="page__content-text1_2">3. 법안은 운영원칙 아래 보호받으며, ‘왕실회의’와 역대 ‘왕실회의’를 통해 작성된 ‘세종서버 판례’를 통하여, 법안에 언급되지 않은 사건들을 처리한다.</p>
                                             <p className="page__content-text1">2항 [ 법안 숙지 의무  ]</p>
                                                 <p className="page__content-text1_2">1. <span>세종서버 유저는 왕실법안을 숙지하며, 지킬 의무가 있다.</span></p>
                                                <p className="page__content-text1_2">2. 왕실은 항상 법안을 숙지할 것을 홍보하며, 권장할 의무가 있다.</p>
                                                <p className="page__content-text1_2">3. 마을 간부는 마을 주민들이 법안을 숙지할 수 있도록, 늘 권장할 의무가 있다.</p>
                                                <p className="page__content-text1_2">4. 세종서버 유저는 법안을 숙지하거나, 혹 문제가 발생했을때 먼저 법안을 찾아보고 확인 후에 [ 문제 제기 ] 를 할 권리와 의무가 있다.</p>
                                                <p className="page__content-text1_2">5. 유저가 [ 문제 제기 ] 를 할 경우, 각 마을 대표자들과의 회의를 통해 결정한다.</p>
                                       </div>
                                       <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                            </div>

                             {/* 2페이지 */}
                            <div className="book_page_content">
                                <div className="page">
                                        <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">2조 [ 순찰 ]</p>
                                             <p className="page__content-text1_2"><span>1. 군주,판서.포교들은 모든 사냥 가능한 지역(사냥터,수렵장,야외지역,섬 등)을 순찰할 권리와 의무가있다.</span></p>
                                             <p className="page__content-text1_2">2. 순찰 거부, 순찰 방해는 범죄에 해당된다.</p>
                                             <p className="page__content-text1_2">3. 왕실 구성원은 순찰 시 왕실의복(ex.포교모자)을 착용할 필요가 없다. . 순찰 대상은 1초라도 사냥하는 것이 보이는 유저를 대상으로 한다. (포교의 순찰 멘트는 일반창이 사라진 뒤 다음 멘트 사용 가능)</p>
                                             <p className="page__content-text1_2">( 예시- 순찰 거부 및 순찰 방해 )</p>
                                             <p className="page__content-text1_2">A. 순찰 거부 : 순찰 중인 해당 구성원에게 순찰 응답을 하지 않는 경우</p>
                                             <p className="page__content-text1_2">a. 순찰 멘트에 3회 불응하면 순찰자는 해당 유저에 대해 신고하기 이용권을 사용한다</p>
                                             <p className="page__content-text1_2">b. 피순찰자가 순찰멘트를 놓치는경우 순찰자는 1회 불응할 때마다 몬스터 사이를 왔다갔다 할 수있다. ( 상황에 맞게 순찰자의 자율적판단)</p>
                                             <p className="page__content-text1_2"><span>c. 순찰 멘트에 3회 이상 불응한 횟수가 2회 이상일 경우 블랙리스트 등록 후 왕실과 대행수과 관리하며 블랙리스트에 등록된 인원은 순찰 멘트 없이 신고하기 이용권 사용 가능(단, 1회차 거부 이후 10회 연속 응답시 블랙리스트 삭제)</span></p>
                                             <p className="page__content-text1_2">B. 순찰 방해 : 순찰 중인 해당 구성원에게 폭언 및 욕설을 하는 경우</p>
                                             <p className="page__content-text1_2">C. 악의적 응답 : 순찰 중인 해당 구성원에게 욕설형 응답 및 불만 / 비꼬는 응답인 경우</p>
                                             <p className="page__content-text1_2">(채팅에 응답은 하였으나 순찰 채팅에 명시된  응답을 하지 않을 경우도 포함)</p>
                                       </div>
                                       <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 처벌 ]</p>
                                                <p className="page__content-text1_2">A. 순찰 거부로 인한 신고하기 이용권 사용 시, 1차, 경고 및 마을 소속 유저는 해당마을 대행수 보고, 2차 이상부터 120분 수수감, 3차 무한수감 + 운영진 보고한다.추가적으로 순찰 거부로 불응한 자에 한하여 멘트 없이 바로 신고하기 이용권 사용 가능하다.A-1(신규). 순찰 불응자는 1차 대행수 알림, 2차 수감후 서버게시판에 아이디를 공개한다.(이름변경시 변경내용도 공개)[정보공개 범위는 108대 임기 시작부터 끝까지로 한다] - 23.04.22 추가(역참메세지를 통한 회의 참석자 과반의 동의)</p>
                                                <p className="page__content-text1_2">B. 순찰 방해 : 폭언 욕설에 대한 처벌과 동일하게 처리한다. 또한 비협조 시 경고 없이 120분 수감한다.</p>
                                                <p className="page__content-text1_2">C. 악의적 응답 : 포교의 일반 순찰 채팅 스크린샷을 기준으로 왕실 판서진의 의결을 통하여 1차 경고, 2차시 60분 수감한다.</p>
                                        </div>
                                        <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">3조 [ 왕실 사칭 ]</p>
                                            <p className="page__content-text1_2">1. 운영자와 유저들이 부여해준 권한을 갖는 왕실 구성원과 악의적으로 비슷한 아이디를 만들거나 혹은 왕실 구성원 사칭을 금지한다.</p>
                                            <p className="page__content-text1_2">2. 왕실의 공적인 업무 빙자 및 유저들이 혼동할 만한 행위를 금지한다.(예시) 일반 유저가 순찰하는 행위(포교업무빙자), 수호천사 멘트와 유사한 전체창/자막광고</p>
                                        </div>
                                        <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                 </div>
                            </div>   

                            
                             {/* 3페이지 */}
                            <div className="book_page_content">
                                <div className="page">
                                        <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 처벌 ]</p>
                                                <p className="page__content-text1_2">1. 왕실 사칭 행위에 대해서 120분 수감 및 운영자에게 사칭 신고한다.</p>
                                        </div>
                                        <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">4조 [ 수감 사유 ]</p>
                                            <p className="page__content-text1_2">1. 수감사유는 시스템상, 총 3종 [ 매크로 사냥 프로그램 / 비매너 / 사기 ] 가 있다.</p>
                                            <p className="page__content-text1_2">a. 사냥프로그램 : 신고하기 이용권, 형조판서 책상 판별의뢰등으로 자동 수감되며, 수감사유는 매크로 사냥 프로그램으로 기록된다.</p>
                                            <p className="page__content-text1_2">b. 사기 : 거래가 관련된 모든 수감은 [ 사기 ] 죄목으로 수감 한다.</p>
                                            <p className="page__content-text1_2">c. 비매너 : 거래를 제외한 모든 수감은 [ 비매너 ] 죄목으로 수감 한다.</p>
                                        </div>
                                        <h1 className="conent_title">제 2 장 [ 증거 ] </h1>
                                        <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">1조 [ 스크린샷  ]</p>
                                            <p className="page__content-text1_2">1. 기본적으로 모든 사건의 최우선 증거는 [ALT+P] 스크린샷을 원칙으로 한다.</p>
                                            <p className="page__content-text1_2">a. 물증 없이 [ 심증 ] 으로 판단을 금지한다. (모든 스크린샷 내용엔 군주력이 나와 있어야 한다.)</p>
                                            <p className="page__content-text1_2">b. 추가적으로 영상자료도 증거로 인정한다. ( 영상자료 또한 군주력이 나와야 한다. )</p>
                                            <p className="page__content-text1_2">c. 채팅 내용의 경우 대화의 시작과 끝이 모두 제출되어야 한다.</p>
                                        </div>
                                        <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 수정 금지 ]</p>
                                                <p className="page__content-text1_2">1. 스크린샷은 [ ALT +P ] 로 촬영한 파일 그대로 수정 없는 것을 증거로 인정한다.</p>
                                                <p className="page__content-text1_2">2. 단, [ ALT+P ] 스크린샷을 최우선적인 증거물로 인정하나, 이를 확보하지 못했을 때는 군주력이 명확히 나와있고 개인을 충분히 판별 가능한 사진 파일도 증거로 채택될 수 있다.</p>
                                                <p className="page__content-text1">2항 [ 수정 가능 범위 ]</p>
                                                <p className="page__content-text1_2">1. 마을 채팅, 상단 채팅 등 프라이버시 관련이 있다면 이를 가리는 것은 가능함.</p>
                                                <p className="page__content-text1">3항 [ 위조 ]</p>
                                                <p className="page__content-text1_2">1. 증거 스크린샷을 [ 위조 ] 할 경우, 처벌한다. ( 운영자 신고 및 영구 수감 )</p>
                                        </div>
                                        <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div>   

                             {/* 4페이지 */}
                             <div className="book_page_content">
                                <div className="page">
                                     <h1 className="conent_title">제 3장 [ 경복궁 ] </h1>
                                        <div className="page__content-blockquote">
                                            <p className="page__content-blockquote-text">1. 경복궁 내부에서는 일기토, 광고창 및 개인 상점을 금지한다.</p>
                                            <p className="page__content-blockquote-text">2. 경복궁 근처 한강 유역에서 광고창, 개인 상점, 보스 몬스터 소환을 금지한다.</p>
                                            <p className="page__content-blockquote-text">3. 경복궁 신문고 위는 수호천사 근무지로 지정한다.</p>
                                       </div>
                                        <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">1조 [ 예외  ]</p>
                                            <p className="page__content-text1_2">1. 한 마을당 1인씩 마을 홍보 가능 ( 단, NPC를 가리지 않는 범주에서. 경복궁 내에서만 가능 )</p>
                                            <p className="page__content-text1_2">2. 무 마을 소속 캐릭으로 마을 홍보 금지, 부 마을로 확인되는 경우 부 마을 소속 캐릭으로 홍보 가능.</p>
                                            <p className="page__content-text1_2">3. 합의된 이중마을의 경우, 하나의 마을로 간주하여 한곳에서만 홍보 가능.</p>
                                            <p className="page__content-text1_2">4. 경복궁 신문고 위 수호천사 관련 광고 ( 단 수호천사모 착용 필수 ).</p>
                                            <p className="page__content-text1_2">5. 경복궁 신문고 위 또는 NPC를 가리는 등 방해가 되는 범위에서 잠수일 시, 신문고 뒤 사각 틀 안으로 리콜한다. ( 단, 리콜하기 전 사유를 알리고 주의를 준 후 리콜할 것 )</p>
                                            <p className="page__content-text1_2">※ 합의된 이중 마을 : 같은 대주주의 별도로 운영되는 마을 및 부마을이지만 별도로 운영되는 마을로 한명의 대주주(혹은 마을)가(이) 회의 등에 서 2개 이상의 투표권을 행사할 위험이 있어, 별도의 대행수로 운영되나 하나의 마을로 간주한다.</p>
                                        </div>
                                        <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 처벌 ]</p>
                                            <p className="page__content-text1_2">1. 경복궁 내부 불법행위에 대해서는 경고 및 마을 리콜을 시행하며, 불법 행위가 지속 되면(3회 이상) 120분 수감 및 운영자 보고한다.</p>
                                        </div>
                                        <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">2조 [ 불공정한 홍보 행위 금지   ]</p>
                                            <p className="page__content-text1_2">1. 1 ~ 29 레벨 유저에게 [ 직접적인 ] 마을홍보, 스승홍보 귓속말 금지 * 위와 같은 내용 외에는 허용 [ 질문답변, 파티 및 지원 등 ]</p>
                                            <p className="page__content-text1_2">2. 타서버 유저의 마을홍보 , 스승홍보 등 불공정한 홍보 행위를 금지한다.</p>
                                        </div>
                                        <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 유도금지 ]</p>
                                            <p className="page__content-text1_2">1. 2장 2조의 조항을 악용하여 타인을 유도하여 신고하는 행위를 금지한다.</p>
                                            <p className="page__content-text1_2">a. 타 마을에 패널티를 줄 목적으로 그 마을에 가입하여 불공정한 홍보행위를 한 경우</p>
                                            <p className="page__content-text1_2">b. 타 마을에 패널티를 줄 목적으로 1~29레벨 캐릭터로 마을/스승 홍보를 유도한 경우.</p>
                                        </div>
                                        <div className="pageCntView"><p>- {selected + 1} / 16  -</p></div>
                                </div>
                             </div> 

                            {/* 5페이지 */}
                             <div className="book_page_content">
                                <div className="page">
                                    <div className="page__content-blockquote_hang">
                                                <p className="page__content-text1">2항 [ 처벌 ]</p>
                                                <p className="page__content-text1_2">1. 불공정한 홍보행위의 경우 1차 경고 후 2차부터 유저가 소속된 마을의 경복궁 광고창 포함 주민모집을 금지한다.</p>
                                                <p className="page__content-text1_2">2. 조항을 악용하여 타인을 유도하는 경우 사칭과 동일한 처벌을 한다.</p>
                                                <p className="page__content-text1_2">3. 타서버 유저의 불공정한 홍보 행위에 대해선 무한수감과 함께 운영자에게 보고한다.</p>
                                    </div>
                                    <h1 className="conent_title">제 4장 [ 사냥터 ] </h1>
                                    <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">1조 [ 자리  ]</p>
                                            <p className="page__content-text1_2">1. 범위 공격을 하는 게임의 특성상 범위가 겹치지 않도록, 몬스터가 몰리는 위치를 [자리] 라는 개념으로 인정한다.</p>
                                            <p className="page__content-text1_2">2. 자리는 현재 사용하는 사람이 그 소유권을 가진다.</p>
                                            <p className="page__content-text1_2">3. 기억의 돌 사용시, 몬스터 리젠자리(좌표)로 바로 이동(젠자리텔)을 금지한다.</p>
                                            <p className="page__content-text1_2"><span>-검/지팡이 사냥을 위하여 좌표를 저장했을 경우, 좌표 근처에 이동 후 자리가 빈 것을 확인 후에 젠자리텔을 한다.</span></p>
                                            <p className="page__content-text1_2">- 섬의 경우는 섬 중앙이 아니라, 섬 가장자리 외곽에 저장한다.</p>
                                    </div>
                                    <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 소유권  ]</p>
                                            <p className="page__content-text1_2">1. 빈 자리의 소유권은 몬스터를 먼저 치는 사람이 우선권을 가진다.</p>
                                            <p className="page__content-text1_2">2. 2명 이상이 동시에 빈 자리에 도착하여, 동시에 몬스터를 친 경우 왕실 중재로 사다리 타기 등의 제비뽑기 방식으로 소유권을 정한다.</p>
                                            <p className="page__content-text1_2">3.  자리에 잠수 중인 사람이 있는 경우 [잠수 광고창]이 안보이는 경우를 대비하여, 귓속말 후 3분 동안 [무응답 시 ] 스크린샷 후에 사냥한다. (스크린샷에 타임라인을 활성화한다)</p>
                                            <p className="page__content-text1_2">(응답 시 자리 소유권은 잠수 중이었던 사람에게 있으며, 휴식 1회 차감한다)</p>
                                            <p className="page__content-text1_2">(예시) 자리에 계신가요? (15:20)</p>
                                            <p className="page__content-text1_2">* 단, 해당 자리 사용인이 스크린샷을 보유하고, 광고창을 이용한 잠수였을 시, 후 사냥인은 자리 박탈 + 경고 1회 를 적용하며, 해당 자리 사용인은 시간 확인 후, 자리 소유권 인정한다.</p>
                                            <p className="page__content-text1_2">4. 필드보스는 소유권 없이 모든 유저가 자유롭게 타격한다.</p>
                                       </div>
                                       <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div> 

                            {/* 6페이지 */}
                             <div className="book_page_content">
                                <div className="page">
                                    <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">2항 [ 휴식(광고창 잠수) ]</p>
                                            <p className="page__content-text1_2"><span>1. 사냥 중 최대 2회간 [ 휴식(광고창 잠수) ]를 인정한다.</span></p>
                                            <p className="page__content-text1_2">2. [ 휴식(광고창 잠수) ] 는 [휴식 시작시간을 기재한 것만 ] 인정하며 1회당 10분이다.</p>
                                            <p className="page__content-text1_2">3. [ 휴식(광고창 잠수) ] 는 광고창이 내려가는 것을 방지하기 위하여,반드시[ 탈것 ]에서 내린 뒤에 시행한다.</p>
                                            <p className="page__content-text1_2">4. 1차 휴식 시작 시간을 기준으로 최소 20분이 지난 후 부터 2차 휴식이 가능하다. (예시) 13:20 1차 휴식 시작 → 13:30 1차 휴식 종료 → 2차 휴식은 13:40 이후부터 가능 (13:20분부터 13:40분까지 휴식 2개를 붙여 20분 연속 휴식하는 행위 금지)</p>
                                            <p className="page__content-text1_2">5. [ 광고창이 없는 잠수 ] 및 [ 휴식 시작 시간 기재 없는 광고창 잠수 ] 일 경우</p>
                                            <p className="page__content-text1_2">ㄱ. 대기자가 자리 소유자에게 귓말 후 자리 소유자가 3분 이내 대답 및 사냥을 재개할 경우 휴식으로 치지 않는다. (휴식 횟수 차감하지 않는다.)</p>
                                            <p className="page__content-text1_2">→ 채팅, 시공서를 통한 버프 및 물약 구매, 보안관 등장에 의한 잠깐의 사냥 정지는 휴식이 아닌 사냥의 일부로 인정</p>
                                            <p className="page__content-text1_2">ㄴ. 대기자가 자리 소유자에게 귓말 후 자리 소유자가 3분 이내 대답을 했더라도 첫 귓말을 보낸 시점부터 3분 초과하여 사냥을 하지 않을 경우 휴식 1회 차감한다. (대기자는 영상 촬영으로 증거를 남긴다.)</p>
                                            <p className="page__content-text1_2">ㄷ. 대기자가 자리 소유자에게 귓말 후 자리 소유자가 3분 이내 대답도 하지않고 사냥도 하지 않을 경우 자리의 소유권은 대기자에게 넘어간다.</p>
                                            <p className="page__content-text1_2">ㄹ. 단, [ 탈것에서 내린 상태 ]일 경우 광고창 없는 휴식에 한하여 (기타 사유로 광고창이 보이지 않는 것으로 간주) 귓말을 보낸 시점부터 10분간 휴식을 인정 및 휴식 1회 차감하며,</p>
                                            <p className="page__content-text1_2">10분을 초과하였는데도 대답 및 사냥 재개 하지 않을 경우 자리 소유권은 대기자에게 넘어간다.</p>
                                            <p className="page__content-text1_2">6. 시간 이내와 초과의 기준 적용 예시</p>
                                            <p className="page__content-text1_2">[13 : 20] A : 안녕하세요. 사냥하시나요?</p>
                                            <p className="page__content-text1_2">[13 : 23] B : 보안관이 나와서 잠깐 대기하고 있었습니다.</p>
                                            <p className="page__content-text1_2">→ 23분 - 20분 = 3분</p>
                                            <p className="page__content-text1_2">→ 3분 이내로 판단</p>
                                            <p className="page__content-text1_2">→ [13 : 20] A : 안녕하세요. 사냥하시나요?</p>
                                            <p className="page__content-text1_2">[13 : 24] B : 보안관이 나와서 잠깐 대기하고 있었습니다.</p>
                                            <p className="page__content-text1_2">→ 24분 - 20분 = 4분</p>
                                            <p className="page__content-text1_2">→ 3분 초과로 판단</p>
                                            <p className="page__content-text1_2">실제 대답 시간은 전자의 경우가 더 오래 걸렸을수도 있으나 판단의 편의성을 위해 해당 기준을 적용.</p>
                                    </div>
                                    <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div> 

                            {/* 7페이지 */}
                             <div className="book_page_content">
                                <div className="page">
                                    <div className="page__content-blockquote_hang">
                                        <p className="page__content-text1">3항 [ 소유권 박탈 ]</p>
                                        <p className="page__content-text1_2">1. 사망, 버프템 구매, 어사패 종료, 행수 오오라석 설치 등의 어떤 이유에서도 자리를 이탈하면 소유권을 박탈한다.</p>
                                        <p className="page__content-text1_2">2. 사망의 경우, [부활서] 사용 시, 자리 소유권을 인정한다.</p>
                                        <p className="page__content-text1_2">3. 어사패의 경우 버그(오류)로 인하여 남아있게 되더라도 [대기자]가 그것을 입증하면 소유권을 박탈한다.(2시간 간격의 2장의 스크린 샷으로 하며, 군주력으로 시간이 지남을 판단한다.)</p>
                                        <p className="page__content-text1_2">4. 오오라석으로 해당 자리의 소유권을 주장할 수 없다.</p>
                                        <p className="page__content-text1">4항 [ 예외 ]</p>
                                        <p className="page__content-text1_2">1. (공성)공성 시간 30분간은 사망으로 인해 자리가 비워질 경우를 대비하여 사망 이전에 미리 대기자에게 미리 양해를 구하며 3분 내로 자리로 복귀하면 소유권를 인정한다. ( 단, 공성 진행 마을의 경우 순간이동 불가능으로 인해 5분 내로 복귀 )</p>
                                        <p className="page__content-text1_2">2. (공성) 대기자가 없는 경우, 사냥 중인 스크린샷과 죽은 후 해당 자리에서 찍은 사망 알림 스크린샷 확인 후 소유권을 인정한다.</p>
                                        <p className="page__content-text1_2">3. (순간이동) 검, 지팡이 등의 특정 좌표 이용을 위한 [제자리 순간이동]의 경우 제자리 순간이동에 대한 증거 확인 후 판단한다.</p>
                                        <p className="page__content-text1">5항 [ 양도금지  ]</p>
                                        <p className="page__content-text1_2">1. 자리에 대한 본인의 [현재] 소유권은 인정하지만, 그 소유권을 타인, 지인에게 양도/판매하는 행위를 금지한다.</p>
                                        <p className="page__content-text1_2">2. 대기자가 없을 시 잠정적으로 허용한다..</p>
                                        <p className="page__content-text1_2">(예시)</p>
                                        <p className="page__content-text1_2">A. 같은 마을 B에게 귓속말로 자리를 양도 하는 경우 ( 단, 대기자가 없을 시 양도 허용 )</p>
                                        <p className="page__content-text1_2">B. 용무 후에 다시 자리를 쓰기 위해 친한 C에게 잠시 자리를 양도 하는 경우 ( 대기자가 없을 시 지인 양도 허용 )</p>
                                        <p className="page__content-text1">6항 [ 처벌 ]</p>
                                        <p className="page__content-text1_2"><span>1. 2회 이상 혹은 타인의 제지에도 불구하고, 계속해서 반복하는 행위를 [악의적]이라 정의한다.</span></p>
                                        <p className="page__content-text1_2"><span>2. (소유권) [악의적]으로 통한 자리 소유권 침범은 1회 60분 수감, 2회 120분 수감, 3회부턴 120분 수감 및 운영자 신고한다.</span></p>
                                        <p className="page__content-text1_2">3. (소유권 박탈) 소유권 박탈에 불복하여 방해행위(스틸, 겹치기)를 하는 경우에는 1차 60분 수감, 2차 120분 수감한다.</p>
                                        <p className="page__content-text1_2">4. (휴식) [악의적]으로 대기자가 있는데, 3회 이상 휴식(광고창 잠수)를 지속할 경우 1차 경고, 2차이상 60분 수감한다.</p>
                                        <p className="page__content-text1_2">5. (양도) 대기자가 있을 때, 자리를 양도/판매하는 행위 적발 시 120분 수감한다.</p>
                                        <p className="page__content-text1_2">6. (양도) 대기자가 없는 순간을 노려 법안을 악용하는 행위 적발 시 120분 수감한다.</p>
                                    </div>
                                    <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div> 

                              {/* 8페이지 */}
                             <div className="book_page_content">
                                <div className="page">
                                    <div className="page__content-blockquote_hang">
                                        <p className="page__content-text1_2">7. [3회 이상 휴식 판별]</p>
                                        <p className="page__content-text1_2">a. 휴식(광고창잠수)횟수 체크는 [ 대기자 ]가 대기를 선 그 시간 이후부터 직접 체크한다. ( 스크린샷 )</p>
                                        <p className="page__content-text1_2">b. 잠수자는 만일을 대비하여 광고창 후, [ 스크린샷 ] 을 남긴다. ( 증거자료 )</p>
                                        <p className="page__content-text1_2">c. 동일 대기자인 경우, 다른 곳으로 이동하고 오면 횟수체크는 초기화되며, 다시 카운트 한다.</p>
                                        <p className="page__content-text1_2">8.[젠자리텔] 시간이 아니라, 동일 인물에 대한 누적 3회 시 1차 경고, 2차 60분 수감, 3차 120분 수감 및 악의적인 게임 방해행위로 신고한다.- 신고 스샷은 Alt+A 상태창과 젠자리텔 한 사람의 아이디가 확인될 수 있도록 스크린샷을 찍어 3장(1회,2회,3회) 제출한다.[판별을 위함]</p>
                                        <p className="page__content-text1_2">누적 예시</p>
                                        <p className="page__content-text1_2">a. 오후 5시에 A가 사냥하는 자리에 B가 젠자리 텔을 한 뒤에 오후 6시에 A가 여전히 사냥하는 동일 자리에 B가 다시 젠자리텔을 한경우 누적 2회</p>
                                        <p className="page__content-text1_2">b. 오후 5시에 A가 사냥하는 자리에 B가 젠자리 텔을 한 뒤에 오후 6시에 C가 사냥하는 동일 자리에 B가 다시 젠자리텔을 한경우 누적 없음</p>
                                        <p className="page__content-text1_2">c. 오후 5시에 A가 사냥하는 자리에 B가 젠자리 텔을 한 뒤에 오후 6시에 A가 이동한 다른 자리에 B가 젠자리텔을 한경우 누적 2회</p>
                                    </div>
                                    <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">2조 [ 대기 ]</p>
                                            <p className="page__content-text1_2">1. [자리]의 [소유권]에 대하여, 다음 차례로 그 [소유권]을 얻기 위해 기다리는 유저를 [대기자]라 정의한다.</p>
                                    </div>
                                    <div className="page__content-blockquote_hang">
                                        <p className="page__content-text1">1항 [ 대기자 ]</p>
                                         <p className="page__content-text1_2">1. 현재 [자리]의 소유자가 자리를 이탈할 때, [ 대기자 ]가 있으면 [ 소유권 ]은 대기자에게 넘어간다.</p>
                                        <p className="page__content-text1_2">2. [대기자]는 동일인(동일 자리)에 대해 잠수 확인 귓말 최대 [4] 회 가능하며, 횟수는 자정을 기준으로 초기화된다.</p>
                                        <p className="page__content-text1_2">b. 잠수자는 만일을 대비하여 광고창 후, [ 스크린샷 ] 을 남긴다. ( 증거자료 )</p>
                                        <p className="page__content-text1">2항 [ 예약 ]</p>
                                        <p className="page__content-text1_2">1. 대기자는 해당 자리를 [ 예약 ] 하기 위해, [ 광고창 ]을 이용하여, [대기시작시간(현실시간), 자리위치(최대 1곳)]을 반드시 표기한다.</p>
                                        <p className="page__content-text1_2">2. [탈 것]에서 내려서 광고창을 이용하여, 광고창이 사라지는 것을 방지한다.</p>
                                        <p className="page__content-text1_2">3. 대기자 위치에서 여러 자리가 동시에 보이는 경우 반드시 명확한 위치를 표기해야한다.</p>
                                        <p className="page__content-text1_2">(예시) [ 용궁 아랫판서 우측자리 대기 13:30 ] , [ 13:30, 내부판서 좌측 윗자리 ]</p>
                                    </div>
                                    <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div> 

                             {/* 9페이지 */}
                             <div className="book_page_content">
                                <div className="page">
                                 <div className="page__content-blockquote_hang">
                                    <p className="page__content-text1">3항 [ 대기자 박탈 ]</p>
                                    <p className="page__content-text1_2">1. 어떠한 경우라도 [예약]한 자리를 이탈한 경우 대기를 초기화 한다.</p>
                                    <p className="page__content-text1_2">2. [ 시간 표기 없는 ] 대기자 광고창의 경우 인정하지 않는다.</p>
                                    <p className="page__content-text1">4항 [ 금지 ]</p>
                                    <p className="page__content-text1_2">1. 1조 5항 [ 양도 금지 ]에 의거하여, [동일 마을], [동일 상단], [동일 가족]의 1순위 대기를 금지한다.</p>
                                    <p className="page__content-text1_2">(예시)</p>
                                    <p className="page__content-text1_2">a. 자리소유자 A 대기 1번 B (같은 마을 불가능)</p>
                                    <p className="page__content-text1_2">b. 자리소유자 A 대기 1번 B (다른 마을) - 대기 2번 C(A와같은마을 가능, B와 같은 마을 불가)</p>
                                    <p className="page__content-text1_2">c. b. 자리소유자 A대기 1번 B (다른 마을) - 대기 2번 C(A와같은마을 가능, B와 같은 마을 불가) - 대기 3번 D</p>
                                    <p className="page__content-text1_2">2. 부캐릭터로 예약(대기)하는 것을 금지한다.</p>
                                    <p className="page__content-text1_2">a . 자신이 자리 사용중일 때, 부캐릭터로 예약하는 행위</p>
                                    <p className="page__content-text1_2">b . 부캐릭터로 예약하고, 본캐릭터로 사냥하는 행위</p>
                                    <p className="page__content-text1">5항 [ 처벌 ]</p>
                                    <p className="page__content-text1_2">1. (대기) 동일마을 연속 대기자는 1차 경고, 2차 이상은 60분 수감한다.</p>
                                    <p className="page__content-text1_2">2. (대기) 우선 대기자에게 귓속말 없이 사용 시 2회까지는 자리박탈과 사과 후 경고 조치 하지만, 사과가 납득되지 않으면 60분 수감, 3회차 이후부터는 경고 없이 60분 수감한다.</p>
                                    <p className="page__content-text1_2">3. 동일인(동일 자리)에 대한 잠수 확인 귓말 [4회] 초과 시 1차 경고, 2차 이상은 60분 수감한다.</p>
                                 </div>
                                 <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">3조 [ 기타 ]</p>
                                </div>
                                <div className="page__content-blockquote_hang">
                                    <p className="page__content-text1">1항 [ 리콜 ]</p>
                                    <p className="page__content-text1_2">1. 몹 리젠 자리 혹은 사냥에 방해되는 위치 및 소환구슬 사용을 위한 섬 지역에서 하는 잠수는, 사냥하는 유저의 유무에 상관없이 발견되는 즉시[ 야옹이방석, 포근한이글루, 숲의방석 등 ] 사용 중에도 리콜한다.</p>
                                    <p className="page__content-text1_2">* 일반 사냥터는 위치 변경(몬스터 클릭 방해되지 않는 곳), 리콜이 안되는 경우는 해당마을로 소환(대마도해적선,용궁2층,어사패 사용자)</p>
                                    <p className="page__content-text1">2항 [ 소환구슬 사용 금지 ]</p>
                                    <p className="page__content-text1_2">1. 모든 사냥터 내에서 소환구슬 사용을 금지한다.</p>
                                </div>
                                <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div> 

                            {/* 10페이지 */}
                             <div className="book_page_content">
                                <div className="page">
                                <div className="page__content-blockquote_hang">
                                    <p className="page__content-text1_2">2. 3마리 이상의 보스몬스터 소환은 독도/ 무역항/ 섬 지역을 제외한 곳에서 금지한다.</p>
                                    <p className="page__content-text1_2">3. 해양몬스터는 경복궁 주변을 제외한 호수지역에서 소환 가능하다.</p>
                                    <p className="page__content-text1_2">4. 초보유저들의 퀘스트를 위한 소환구슬 사용은 다른 유저에게 피해가 가지 않는 범위내에서 필드소환을 허용한다.</p>
                                    <p className="page__content-text1">3항 [ 공성 ]</p>
                                    <p className="page__content-text1_2">1. 공성시간(22:00-22:30)에는 소환구슬 사용이 불가하지만, 공성시간에 영향을 미칠 수 있는 공성 시작전 20분(21:40)부터 불가사리를 포함 해 독도 /섬 / 무역항을 제외한 모든 지역에 소환구슬 사용을 금지한다.( 소환형 이벤트 몬스터의 경우도 3마리 이상 소환 포함)</p>
                                    <p className="page__content-text1_2">2. 해당 시간에는 각 차시의 공성룰을 적용하여 제재하도록 한다.</p>
                                    <p className="page__content-text1">4항 [ 수렵장 ]</p>
                                    <p className="page__content-text1_2">1. 타 마을의 수렵장을 허락 없이 이용하는 것을 금지한다.</p>
                                    <p className="page__content-text1">5항 [ 순찰 ]</p>
                                    <p className="page__content-text1_2">1. 순찰 멘트에 대한 답변 도중 사망 시, 부활서를 사용하지 않아도, 포교는 해당 자리에서 주인이 올 때 까지 기다려 주어 자리 소유를 보장해 준 다. ( 대기자가 있어도 자리 인정 )</p>
                                    <p className="page__content-text1">6항 [ 섬지역 ]</p>
                                    <p className="page__content-text1_2">1. 소환구슬을 사용하여 사냥을 하는 모든 섬지역의 자리 및 대기 규정은 사냥터와 동일하게 적용한다.</p>
                                    <p className="page__content-text1">7항 [ 처벌 ]</p>
                                    <p className="page__content-text1_2">1. (소환구슬) 모든 사냥터 내에서 소환구슬 사용 적발시 1차부터 120분 수감 후 운영자에게 신고한다.</p>
                                    <p className="page__content-text1_2">2. (소환구슬) 3마리 이상의 보스 몬스터를 독도/무역항/섬지역 외에서 소환시 1차 경고, 2차부터 120분 수감 후 운영자 신고한다.</p>
                                    <p className="page__content-text1_2">3. (소환구슬) 단, 군주나 판서의 재량에 따라 소환자에게 악의적인 의도가 있다고 판단되면, 경고 없이 120분 수감 후 운영자 신고를 허용한다.</p>
                                    <p className="page__content-text1_2">4. (공성) 공성 시작 20분(21:40이후)전부터 3마리 이상의 보스 몬스터를 독도/무역항/섬지역 외에서 소환 시 경고 없이 120분 수감 후 운영자 신고한다.</p>
                                    <p className="page__content-text1_2">5. (수렵장) 타 마을 수렵장을 허락없이 무단 사용 적발시 1차 경고, 2차부터 120분 수감한다.</p>
                                </div>
                                <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div> 

                              {/* 11페이지 */}
                              <div className="book_page_content">
                                <div className="page">
                                     <h1 className="conent_title">제 5장 [ 채팅창 ] </h1>
                                         <div className="page__content-blockquote">
                                            <p className="page__content-blockquote-text">1. 모든 채팅창에서의 비매너를 금지하며, 세부사항은 다음과 같다.</p>
                                       </div>
                                    <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">1조 [ 욕설 ]</p>
                                            <p className="page__content-text1_2">1. 이유를 불문하고 욕설은 즉시 수감한다.</p>
                                            <p className="page__content-text1_2">2. 수호천사, 포교 근무시에 폭언, 욕설, 성희롱 등도 욕설 부분과 동일하게 처벌한다.</p>
                                            <p className="page__content-text1_2">3. 악의성, 시비성 채팅은 왕실 회의 후 결정한다.</p>
                                     </div>
                                     <div className="page__content-blockquote_hang">
                                        <p className="page__content-text1">1항 [ 처벌 ]</p>
                                        <p className="page__content-text1_2">1. 욕설을 할 경우 1차 120분 수감, 2차 240분 수감 및 운영자 신고 조치 한다.</p>
                                        <p className="page__content-text1_2">2. 욕설을 처벌할 때는 문장 단위가 아닌, 단어 단위로 한다. (예시) 홍길동 : 아니 형님, 열여덟 왜 형님을 형님이라고 못부릅니까? 꽃같네? 2회</p>
                                        <p className="page__content-text1">2항 [ 신고기한 ]</p>
                                        <p className="page__content-text1_2">1. 욕설의 신고기한은 해당 왕실 종료 후 7일까지로 한다.</p>
                                        <p className="page__content-text1_2">(예시) 108대 기간에 일어난 욕설 신고는 109대 1주차까지 신고할 수 있다.</p>
                                    </div>
                                    <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">2조 [ 도배 ]</p>
                                            <p className="page__content-text1_2">1. 동일한 내용, 맥락 및 노래가사 나열등이 3회이상 연속되는 채팅을 [도배]로 정의한다.</p>
                                            <p className="page__content-text1_2">2. 전체창, 또래창, 그리고 자막창에서의 [도배]를 금지한다.</p>
                                     </div>
                                     <div className="page__content-blockquote_hang">
                                        <p className="page__content-text1">1항 [ 예외 ]</p>
                                        <p className="page__content-text1_2">1. 공적인 업무(수호천사 등), 레벨업 축하, 전체창을 제외한 마을 홍보, 장사 관련 자막광고, 파티요청, 고백 요청은 예외로 둔다.</p>
                                        <p className="page__content-text1">2항 [ 처벌 ]</p>
                                        <p className="page__content-text1_2">1. 도배를 할 경우 1차 경고 후 60분 수감, 2차시부터 120분씩 수감한다.</p>
                                    </div>
                                    <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div> 

                              {/* 12페이지 */}
                              <div className="book_page_content">
                                <div className="page">
                                    <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">3조 [ 비방 ]</p>
                                            <p className="page__content-text1_2">1. 표현의 자유를 표방하여, 타인 혹은 단체에 대한 제 3자의 시각에도 부정적인 성격으로 언급하는 것을 [비방]으로 정의한다.</p>
                                            <p className="page__content-text1_2">2. 모든 게임 공간에서 타인에 대한 비방을 금지한다.</p>
                                    </div>
                                    <div className="page__content-blockquote_hang">
                                        <p className="page__content-text1">1항 [ 처벌 ]</p>
                                        <p className="page__content-text1_2">1. 비방을 할 경우 1차 경고 후 사과/수정(중재 내용에 따름), 2차부터 120분 수감 및 운영자에게 비방으로 신고한다.</p>
                                    </div>
                                    <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">4조 [ 현금거래 ]</p>
                                            <p className="page__content-text1_2">1. 군주온라인 내에 존재하는 재화가 아닌, 실제 현실에서 사용되는 돈 혹은 상품권, 노동력, 계정등의 재화를 거래하려는 행위를 [현/금거래]라 고 정의한다. (예시) 전낭을 현/금으로 구매/판매하는 행위, 상품권 거래, 아이디 판매, 대리육성 등</p>
                                            <p className="page__content-text1_2">2. 모든 채팅창/ 자막광고/ 각종 게시판에서 현/금 거래를 금지한다.</p>
                                            <p className="page__content-text1_2">3. 현/금 거래를 위한 카카오톡 오픈채팅방/ 사이트 등을 홍보하는 행위도 금지한다.</p>
                                            <p className="page__content-text1_2">4. 왕실은 제2장 1조 심증 유추 금지에 의거하여 처리한다.</p>
                                    </div>
                                    <div className="page__content-blockquote_hang">
                                        <p className="page__content-text1">1항 [ 처벌 ]</p>
                                        <p className="page__content-text1_2">1.모든 현/금거래에 대하여 경고없이 120분 수감 및 운영자 신고한다.</p>
                                        <p className="page__content-text1_2">2. 부캐릭터를 이용하여 현/금거래를 한 사실이 확인될 경우 경고 없이 120분 수감 및 운영자 신고한다.</p>
                                    </div>
                                    <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">5조 [ 기타 채팅창 규정 ]</p>
                                    </div>
                                    <div className="page__content-blockquote_hang">
                                        <p className="page__content-text1">1항 [ 쩔요구 및 구걸 금지 ]</p>
                                        <p className="page__content-text1_2">1. 모든 채팅창에서 쩔 요구 및 구걸을 금지한다.</p>
                                        <p className="page__content-text1_2">2. 세종서버 외의 다른서버혹은 세종서버라도 지속적인 서버이전이나 마을가입 권유는 구걸로 간주한다.</p>
                                        <p className="page__content-text1">2항 [ 전체채팅 ]</p>
                                        <p className="page__content-text1_2">1. 전체 채팅창에서 마을홍보 및 장사글을 금지한다.</p>
                                        <p className="page__content-text1_2">2. 전체 채팅과 유사한 성격이 있는 또래창에서도 장사글은 금지한다.</p>
                                        <p className="page__content-text1">3항 [ 쌍방 욕설/비방 ] (신규)</p>
                                        <p className="page__content-text1_2">1. 양측이 서로 욕설 혹은 비방을 했을 경우 왕실 중재로 처리되며, 중재를 거부할 경우 운영자에게 판별을 의뢰한다.</p>
                                    </div>
                                    <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div> 

                              {/* 13페이지 */}
                              <div className="book_page_content">
                                <div className="page">
                                    <div className="page__content-blockquote_hang">
                                         <p className="page__content-text1">4항 [ 처벌 ]</p>
                                            <p className="page__content-text1_2">1. 쩔요구 및 구걸에 대해서는 1차 경고이며, 중복되지 않은 2차 제보부터 120분 수감한다.</p>
                                            <p className="page__content-text1_2">2. 전체채팅에 대해서는 1차 경고 이후 2차 60분, 3차시부터 120분씩 수감한다.</p>
                                    </div>
                                    <h1 className="conent_title">제 6장 [ 거래 ] </h1>
                                    <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">1조 [ 사기 ]</p>
                                            <p className="page__content-text1_2">1. 다른 유저를 속여 금전적 이득을 취하려는 모든 행위를 [사기]로 정의 한다.</p>
                                            <p className="page__content-text1_2">2. 어떠한 경우에서도 사기 행위를 금지한다.</p>
                                    </div>
                                    <div className="page__content-blockquote_hang">
                                         <p className="page__content-text1">1항 [ 처벌 ]</p>
                                         <p className="page__content-text1_2">1. 사기행위 적발 시, 무한 수감 및 운영자에게 사기로 신고한다.</p>
                                    </div>
                                    <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">2조 [ 개인상점 ]</p>
                                    </div>
                                    <div className="page__content-blockquote_hang">
                                         <p className="page__content-text1">1항 [ 일반 마을 내 ]</p>
                                         <p className="page__content-text1_2">1. 일반 마을 내 개인 상점은 제조 및 재료 수급을 위해 최대 3개까지 허용한다.</p>
                                         <p className="page__content-text1_2">2. 마을 내 개인상점은 해당 마을의 주민만 허용한다.</p>
                                         <p className="page__content-text1_2">3. 공성룰에 의거하여 해당차시 참여마을은 공성시간중에 마을 내 개인상점을 금지한다.</p>
                                    </div>
                                    <div className="page__content-blockquote_hang">
                                         <p className="page__content-text1">2항 [ 장터  ]</p>
                                         <p className="page__content-text1_2">1. 세종서버 유저들의 개인상점/거래광고를 위한 장터는 [한양]마을로 지정한다.</p>
                                         <p className="page__content-text1_2">2. 제조/의뢰를 제외한 금전적 이득을 취하는 모든 판캐/구매 개인상점은 장터에서만 허용한다.</p>
                                         <p className="page__content-text1_2">3. 장터내부에서 타인의 개인상점/광고를 겹치거나 가리는 행위는 금지한다.</p>
                                         <p className="page__content-text1_2">4. 장터에서 개인상점을 이용한 0빼기 및 착시유도 사기 행위를 금지한다.</p>
                                         <p className="page__content-text1">3항 [ 처벌   ]</p>
                                         <p className="page__content-text1_2">1. 일반마을에서 주민 외 개인상점 및 일반 개인상점의 경우 1차 경고 후 리콜, 2차시부터 120분 수감한다.</p>
                                         <p className="page__content-text1_2">2. 마을 외 필드, 경복궁 등에서 개인상점 역시 1차 경고 후 리콜, 2차시부터 120분 수감한다.</p>
                                         <p className="page__content-text1_2">3. 장터에서 겹치거나 가리는 행위에 대하여 리콜조치하며 반복될 경우 120분 수감한다.</p>
                                    </div>
                                    <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                </div>
                             </div> 

                                {/* 14페이지 */}
                                <div className="book_page_content">
                                    <div className="page">
                                    <div className="page__content-blockquote_hang">
                                          <p className="page__content-text1_2">4. 개인상점을 이용한 사기행위는 사기로 간주하여 무한 수감 및 운영자 신고한다.</p>
                                          <h1 className="conent_title">제 7장 [ 왕실중재 ]</h1>
                                          <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">1조 [ 중개거래 ]</p>
                                            <p className="page__content-text1_2">1. 수수료 절약을 위한 중개거래는 왕실 [ 판서 ] 이상이 담당한다.</p>
                                            <p className="page__content-text1_2">2. 판서 중개거래 시, 판서의 실수로 인하여 손해가 발생한 경우, 군주가 전적인 책임을 진다.</p>
                                            <p className="page__content-text1_2">3. 수호천사 / 포교는 중개거래를 금지한다.</p>
                                            <p className="page__content-text1_2">4. 사당거래 및 시전거래는 모든 왕실이 개입하지 않는다. 해킹전낭 및 복사 영웅 문제로 인하여 중개거래는 잠정 중단한다.</p>
                                            <p className="page__content-text1">2조 [ 중재 ]</p>
                                         </div>
                                         <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 중재불가 ]</p>
                                            <p className="page__content-text1_2">1. 사냥터에 대한 분쟁은 [어떠한] 사정이 있던, 법안대로 집행한다.</p>
                                            <p className="page__content-text1_2">2. 왕실 권한 이상의 것, 즉 운영자의 도움이 필요한 일은 [ 해당자 ]들이 [ 직접 ] 운영자에게 요청한다.</p>
                                            <p className="page__content-text1">2항 [ 중재원칙 ]</p>
                                            <p className="page__content-text1_2">1. 마을 간 문제시, 해당마을 군 / 판서는 참여하지 않는다. ( 중립 )</p>
                                            <p className="page__content-text1_2">2. 개인 간 문제시, 개인의 마을 간부진의 중재를 우선한다.</p>
                                            <p className="page__content-text1_2">3. 중재 시 스크린샷과 양측의 의견을 듣고, 충분히 검토하고 결정한다.</p>
                                            <p className="page__content-text1_2">4. 중재요청 후에 결정에 대하여 불응할 수 없다.</p>
                                            <p className="page__content-text1_2">5. 중재요청을 받은 판서가 어떠한 설명도 없이 중재를 거절하고 자리를 비운다면, 군주는 해당 판서에 대해 직무유기의 책임을 물어, 최고 해임 에 이르는 제재를 한다. 그리고 그 결과는 서버 게시판을 통해 유저 분들에게 알려드린다.</p>
                                            <p className="page__content-text1">3항 [ 중재 회의 ]</p>
                                            <p className="page__content-text1_2">1. 중재 회의 의장은 중립 된 군/판서가 맡는다.</p>
                                            <p className="page__content-text1_2">2. 중재회의는 현실 시간 1시간을 원칙으로 한다. ( 회의시작시, 시작시간을 명시한다.)</p>
                                            <p className="page__content-text1_2">3. 회의 참여자는 각 마을 대표 1인, 그리고 의장이다. ( 총 3명 )</p>
                                            <p className="page__content-text1_2">4. 개인간의 문제의 경우도, 각 마을 간부 중재를 거친 후에 간부 1인씩과 의장 총 3명이 진행한다.</p>
                                        </div>
                                    </div>
                                    <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                    </div>
                                </div>

                                {/* 15페이지 */}
                                <div className="book_page_content">
                                    <div className="page">
                                        <div className="page__content-blockquote_hang">
                                             <p className="page__content-text1_2">5. 개인 간 문제에 간부가 그 개인을 보증하지 못할 경우 중재 회의는 성립되지 않는다.</p>
                                            <p className="page__content-text1_2">6. 회의 후에 개인에게 다시 중재 불응에 대한 연락이 오는 경우, 왕실은 더 이상 중재하지 않는다.</p>
                                            <p className="page__content-text1">4항 [ 회의 무산 ]</p>
                                            <p className="page__content-text1_2">1. 중재회의 시간이 1시간이 초과되는 경우, 해당 분쟁의 쟁점이 중재를 통해 해결되지 않는다고 판단하고, 회의를 중단한다.</p>
                                            <p className="page__content-text1_2">2. 이후 현실시간 24시간 이내에, 중재 신청자들끼리 접점을 찾고, 왕실은 그대로 이행해 준다.</p>
                                            <p className="page__content-text1_2">3. 접점을 찾지 못하면, 그 회의는 잠정적으로 무산된다.</p>
                                        </div>
                                        <h1 className="conent_title">제 8장 [ 예외규정  ] </h1>
                                        <div className="page__content-blockquote">
                                            <p className="page__content-blockquote-text">1. 법안에 [명시]되어 있지 않은 사고 발생시, [예외규정]에 의거하여 판단한다.</p>
                                       </div>
                                       <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">1조 [ 판례 ]</p>
                                            <p className="page__content-text1_2">1. 법안에 명시되지 않은 예외 사건에 대하여 과거에 처리한 [ 판례 ]가 있다면, 그 판례를 참조하여 해결하며 최근의 판례를 적용한다.</p>
                                            <p className="page__content-text1_2">2. 판례의 경우, 몇 대 왕실에서 어떻게 집행했는지 정확한 예시를 든다.</p>
                                            <p className="page__content-text1_2">3. 해당 왕실 군주는 판례집을 작성하여 보관하도록 하며 다음 임기 군주에게 넘기도록 한다.</p>
                                            <p className="page__content-text1">2조 [ 운영자 ]</p>
                                            <p className="page__content-text1_2">1. 해결 방법이 없는 예외 사건은 [운영자]에게 의뢰하며, 운영자의 판단에 따른다.</p>
                                            <p className="page__content-text1">3조 [ 해킹피해의심자 ]</p>
                                            <p className="page__content-text1_2">1. 해킹피해유저의 피해를 최소화 하기 위하여 아래 조건 중 일부조건이 충족 될 경우 해킹 피해 의심 유저로 간주할 수 있다.</p>
                                            <p className="page__content-text1_2">a. 아이템을 모두 벗는 행위</p>
                                            <p className="page__content-text1_2">b. 한양으로 이동하는 행위</p>
                                            <p className="page__content-text1_2">c. 마을 채팅과 귓속말에 응답없는 경우</p>
                                            <p className="page__content-text1_2">d. 마을 자체에서 심사 후 의심자로 판단 될 경우</p>
                                            <p className="page__content-text1_2">2. 마을행수진은 [해킹피해의심]유저로 간주할 경우 스크린샷으로 확보 후 왕실에 수감요청을 할 수 있다.(미접으로인하여 마을이 탈퇴된 유저 는 이전 마을 행수진이 신고한다)</p>
                                        </div>
                                        <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                    </div>
                                </div>

                                {/* 16페이지 */}
                                <div className="book_page_content">
                                    <div className="page">
                                        <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1_2">3. 왕실은 빠른 대처를 위하여 즉시 그 캐릭터를 수감 후 스크린샷을 확인한다.</p>
                                        </div> 
                                        <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 수감 사전 비동의 ]</p>
                                            <p className="page__content-text1_2">1. 공식적으로 수감기록 삭제가 불가함에 따라, 수감기록이 남는 것에 비동의 할 경우, 수감 비동의를 할 수 있다. (마을 자체에서 관리한다.)</p>
                                            <p className="page__content-text1_2">2. 수감 기록 삭제는 불가하지만, 추후 수감기록으로 인하여 불이익을 받지 않도록 왕실은 판례집에 해킹피해의심수감자 명단을 만들어 관리한다.</p>
                                            <p className="page__content-text1">2항 [ 추가 수감 요청 ]</p>
                                            <p className="page__content-text1_2">1. 제 8장 3조 에 의거하여 수감된 해킹 피해 의심 캐릭터가 다음의 경우에 해당할 때, 해당 마을 대행수 및 행수진의 요청을 통하여 최대치까지 추가 수감할 수 있다.</p>
                                            <p className="page__content-text1_2">a. 해킹 피해 의심 캐릭터가 접속 또는 접속종료를 반복하는 경우</p>
                                            <p className="page__content-text1_2">b. 해킹 피해 의심 캐릭터가 접속한 상태에서 잠수하는 경우</p>
                                        </div>
                                        <div className="page__content-blockquote_zno">
                                            <p className="page__content-text1">4조 [ 버그 악용  ]</p>
                                            <p className="page__content-text1_2">1. 게임 내 시스템 오류나 버그의 악용을 금지한다.</p>
                                        </div> 
                                        <div className="page__content-blockquote_hang">
                                            <p className="page__content-text1">1항 [ 아이템 시세 오류 악용 ]</p>
                                            <p className="page__content-text1_2">1. 드랍되는 아이템의 시세 오류 발생 시, 마을 수렵장 내에서 해당 오류아이템에 해당하는 몬스터의 사용을 금지함.</p>
                                            <p className="page__content-text1">2항 [ 처벌 ]</p>
                                            <p className="page__content-text1_2">1. 드랍아이템 시세 오류 악용시 1차 경고이며, 경고시에도 멈추지않고 지속할시 120분 수감한다. 2차시 이후로는 경고 없이 120분 수감한다.</p>
                                            <p className="page__content-text1_2">2. 이 경우 해당 수렵장 행수의 경우는 처벌에서 제외하며, 운영자 보고를 통해 해당마을 수렵장 세금을 전체 초기화 한다.</p>
                                        </div> 
                                        <h1 className="conent_title">제 9장 [ 리콜   ] </h1>
                                        <div className="page__content-blockquote">
                                            <p className="page__content-blockquote-text">1. 각 마을의 대행수는 군주 또는 판서에게 행수 리콜에 대한 사전 요청을 할 수 있다.</p>
                                            <p className="page__content-blockquote-text">2. 리콜 권한이 있는 군주나 형조판서는 동의를 받은 마을 주민의 요청이 있을 시, 그 마을의 대행수나 행수를 리콜할 수 있다. (리콜 대상은 요청자가 정한다)</p>
                                       </div>
                                       <div className="pageCntView"><p>- {selected + 1} / 16 -</p></div>
                                    </div>
                                </div>
                        </FlippingPages>
                    </label>
                </div>
            </div>

            <div className="raw_button">
                    <button onClick={back}>이전</button>
                    <button onClick={next}>다음</button>
             </div>
       </div>
    </>
    );
}


export const  SystemOfKingLawInfoCompo = React.memo(SystemOfKingLawInfo);