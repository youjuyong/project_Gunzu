import { memo, useEffect } from "react";
import React    from "react";
import { LazyImageHook    } from "../../../../../src/utils/common/common";
import { LazyDivHook      } from "../../../../../src/utils/common/common";
import systemKingTitle      from "../../../../assets/image/systemKingTitle.png";
import MetaTag              from "../../../../utils/common/SEOMetaTag";

/* 매크로 판별창 */
const SystemOfKingMacroThinkInfo = () => {
    
    useEffect(() => {
        LazyDivHook(".lazy-background",".skeleton-image",".skeleton-wrapper");
    },[]);

    return (
        <> 
         <MetaTag title="[군주온라인 매크로 판별창]" description="[군주온라인 매크로 판별창] 에대한 정보를 알려주는 페이지입니다." keywords="군주온라인, 매크로 판별창"></MetaTag>
            <div className='intro_title_think_macro '>
                <div className='intro_div2 intro1 lazy-background' data-bg={`url(${systemKingTitle})`}>
                    <div className="skeleton-wrapper">
                        <div className="skeleton-image">
                        <h3 className="king_title_h3">매크로 판별창</h3>
                        <p className="king_title_pTag">
                                "운영자가 매크로를 잡기 위해 인게임에 넣어 놓은 프로그램 입니다.
                                <br/>
                                사냥 도중 매크로 여부를 판별 하기 위해 10분 ~ 20분 간격으로 다양한 질문을 하는 팝업창이 표출 됩니다. 
                        </p>
                        </div>
                    </div>
                </div>
                <div className="king_body_div pretend">
                    <div className="content1">
                        <p>매크로 판별창은 유저와 별개로 "운영자"가 매크로를 잡기 위해 인게임에 넣어 놓은 프로그램입니다.</p>
                        <p>하지만 왕실 카테고리에 놓은 이유는 왕실 시스템의 매크로 순찰과 목적은 똑같지만 </p>
                        <p>시스템적 불편함이 매우 많고 게임을 하는 유저들 이라면 이 것 때문에 수감을 한 번씩은 당해봤기 때문에</p>
                        <p>복귀 or 초보자 에게는 매우 중요한 사항으로 유의점 몇 가지를 숙지 하고 계셔야 합니다.</p>
                        <h3>1. 무게는 반드시 소수점을 포함해서 입력 하자.</h3>
                        <LazyImageHook src={require("../../../../assets/image/macro10.png")} alt={'매크로'} className={'img1'} height={659}/> 
                        <p>게임을 시작하고 야외지역 or 사냥터 에서 20분 정도 사냥시에 위와 같은 창하나가 뜨기 시작 할 겁니다.</p>
                        <p>질문은 대체로 아이템 이름을 묻거나 수명을 묻거나 무게를 묻거나 다양합니다. 이번에는 무게를 묻는 판별창입니다.</p>
                        <h2>문제는 소수점을 포함 해서 "256.0"을 입력 해야 되는데 "256" 까지만 입력 해서 수감을 당하시는 분들이 굉장히 많습니다. </h2>
                        <h3>2. 잠수는 되도록 마을 or 경복궁 에서 하자.</h3>
                        <p>제일 많이 수감 당하는 경우 입니다. 사냥도중에 잠시 전화가 와서 캐릭터를 옆에 세우고 자리를 비우다가</p>
                        <p>판별창이 떠서 수감된 사례가 있습니다. 사냥도중 자리를 비울 경우 마을 or 경복궁에 세우고 자리를 비우시길 권장합니다.</p>
                        <h2>매크로 판별창은 유저의 사냥 상태를 인식 못하고 판별창을 띄우니 잠수는 마을 or 경복궁에서 해야 합니다.</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export const  SystemOfKingMacroThinkInfoCompo = React.memo(SystemOfKingMacroThinkInfo);