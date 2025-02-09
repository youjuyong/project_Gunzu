import { memo } from "react";
import React    from "react";

/* 왕실 매크로 순찰 */
const SystemOfKingMacroPatrolInfo = () => {
    return (
        <> 
             <div className='intro_title_macro'>
                <div className='intro_div2 intro1'>
                    <h3 className="king_title_h3">왕실 매크로 순찰</h3>
                    <p className="king_title_pTag">
                            왕실 인원이 매크로를 잡기 위해 마을을 제외한 곳에서 순찰 활동을 하는 것을 의미합니다.
                            <br/>
                            일반창으로 질문을 하면 일반창으로 대답을 하는식으로 순찰을 하며 
                            <br/>
                            무조건적으로 협조를 해야 하는 시스템입니다.
                    </p>
                </div>
                <div className="king_body_div">
                    <div className="content1">
                        <img className="img1" src={require("../../../../assets/image/macro3.png")}></img>
                        <p>세종 서버 기준 왕실 법안 "2조 [순찰]" 에 따르면 왕실 인원은 매크로 순찰 할 수 있는 권리와 의무가 있습니다.</p>
                        <p>다시말해, 운영자가 아닌 유저가 매크로 순찰을 하고 이 시스템에 무조건 따라 주셔야 합니다. 현실의 음주 단속과 비슷합니다.</p>
                        <p>순찰 방법은 간단합니다.</p>
                        <img className="img1" src={require("../../../../assets/image/macro5.png")}></img>
                        <p>사냥터에서 사냥 도중 군주/형조판서/포교가 일반창으로 ~대 아무개입니다. 아무개님 일반창으로 ~를 입력해주세요.</p>
                        <p>이런식으로 물어보면 '일반창' 으로 대답을 해주시면 됩니다.</p>
                        <img className="img1" src={require("../../../../assets/image/macro7.png")}></img>
                        <p>대답을 하실때에는 '일반창'을 반드시 확인해주세요. </p>
                        <img className="img1" src={require("../../../../assets/image/macro9.png")}></img>
                        <p>순찰을 무사히 통과하면 '협조 감사합니다'라는 말씀을 하실겁니다. </p>
                        <p>번거롭더라고 매크로 순찰에 최대한 협조 부탁 드리겠습니다. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const  SystemOfKingMacroPatrolInfoCompo = React.memo(SystemOfKingMacroPatrolInfo);