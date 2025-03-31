
import { useLocation }           from "react-router-dom";
import LocationCompo             from "../../commComponent/LocationCompo";
import React, { useEffect,memo } from "react";
import { SelectTagTypeStyle }    from '../../../src/utils/commonStyles';
import { InputTagTypeStyle  }    from '../../../src/utils/commonStyles';
import { ButtonTagTypeStyle }    from '../../../src/utils/commonStyles';

import { ItemsLiTagStyle1    }    from '../../../src/utils/commonStyles';
import { ItemsDivTagStyle1   }    from '../../../src/utils/commonStyles';
import { ItemsSpanImgStyle1  }    from '../../../src/utils/commonStyles';

import { ItemsImgStyle1      }    from '../../../src/utils/commonStyles';
import { ItemsNameStyle1     }    from '../../../src/utils/commonStyles';

import { ItemsStateStyle1       }    from '../../../src/utils/commonStyles';
import { ItemsInlineStateStyle1 }    from '../../../src/utils/commonStyles';
import { ItemsNameSpanStyle1    }    from '../../../src/utils/commonStyles';
import { ItemsNameAStyle1       }    from '../../../src/utils/commonStyles';

import { ItemsPeriodSpanStyle     }    from '../../../src/utils/commonStyles';
import { ItemsBorrowNameSpanStyle }    from '../../../src/utils/commonStyles';
import { ItemsPeriodTextSpanStyle }    from '../../../src/utils/commonStyles';
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";
const EquipmentLentCp = () => {
    const { state } = useLocation();
    
    const liClickHandler = (e : any) => {

    }

    return (
        <div id="event_wrap">  
                    <article className="articlewrap">
                        <LocationCompo submenu={state.menuName} mainMenuName={state.mainMenuName}></LocationCompo>
                        <div className='equipContentstitle equipment'>
                            <div className='select_value'>
                                <SelectTagTypeStyle width={'150px'} borderleft={'0px'} marginleft={'26px'}>
                                    <option>종류</option>
                                    <option>방어구</option>
                                    <option>무기</option>
                                    <option>소환영웅</option>
                                    <option>기타</option>
                                </SelectTagTypeStyle>
                                <SelectTagTypeStyle width={'200px'} borderleft={'0px'} marginleft={'0px'}>
                                    <option>대여상태</option>
                                    <option>대여중</option>
                                    <option>신청중</option>
                                    <option>대기중</option>
                                </SelectTagTypeStyle>
                                <SelectTagTypeStyle width={'110px'} borderleft={'1px solid #ddd'} marginleft={'122px'}>
                                    <option>검색조건</option>
                                    <option>장비명</option>
                                    <option>제목명</option>
                                </SelectTagTypeStyle>
                            </div>
                            <InputTagTypeStyle width={'160px'} right={'130px'}></InputTagTypeStyle>
                            <ButtonTagTypeStyle width={'132px'}>조회</ButtonTagTypeStyle>
                        </div>
                        <div className='contenbox'>
                            <div className='itemsDiv'>
                                <div className='items equipment'>
                                    <ul>
                                        <ItemsLiTagStyle1 width ={'302px'} height={'320px'} margin={'0 24px 60px 0'} onClick={liClickHandler} >
                                            <ItemsDivTagStyle1 width ={'302px'} height={'320px'}>
                                                <ItemsSpanImgStyle1 width ={'302px'} height={'200px'}>
                                                    <ItemsImgStyle1 src={require("../../assets/image/equipment/furmiru2.png")} ></ItemsImgStyle1>
                                                </ItemsSpanImgStyle1>
                                               <ItemsNameSpanStyle1>
                                                    <ItemsNameAStyle1></ItemsNameAStyle1>
                                                    <ItemsNameStyle1 width ={'262px'} height={'36px'}>
                                                        푸르미르 호품 셋트
                                                    </ItemsNameStyle1>
                                                </ItemsNameSpanStyle1>
                                                <ItemsStateStyle1 width ={'262px'} height={'32px'}>
                                                    <ItemsInlineStateStyle1 color={'var(--red400)'}>대여중</ItemsInlineStateStyle1>
                                                </ItemsStateStyle1>
                                                <ItemsPeriodSpanStyle>
                                                        <ItemsBorrowNameSpanStyle>
                                                                    달콤꾸꾸
                                                        </ItemsBorrowNameSpanStyle>
                                                        <ItemsPeriodTextSpanStyle>
                                                                    2024.05 ~ 2024.11
                                                        </ItemsPeriodTextSpanStyle>
                                                </ItemsPeriodSpanStyle>
                                            </ItemsDivTagStyle1>
                                        </ItemsLiTagStyle1>

                                       <ItemsLiTagStyle1 width ={'302px'} height={'320px'} margin={'0 24px 60px 0'} onClick={liClickHandler} >
                                            <ItemsDivTagStyle1 width ={'302px'} height={'320px'}>
                                                <ItemsSpanImgStyle1 width ={'302px'} height={'200px'}>
                                                    
                                                </ItemsSpanImgStyle1>
                                            </ItemsDivTagStyle1>
                                        </ItemsLiTagStyle1>
                                        
                                        <ItemsLiTagStyle1 width ={'302px'} height={'320px'} margin={'0 24px 60px 0'} onClick={liClickHandler} >
                                            <ItemsDivTagStyle1 width ={'302px'} height={'320px'}>
                                                <ItemsSpanImgStyle1 width ={'302px'} height={'200px'}>
                                                    
                                                </ItemsSpanImgStyle1>
                                            </ItemsDivTagStyle1>
                                        </ItemsLiTagStyle1>
                                        
                                        <ItemsLiTagStyle1 width ={'302px'} height={'320px'} margin={'0 24px 60px 0'} onClick={liClickHandler} >
                                            <ItemsDivTagStyle1 width ={'302px'} height={'320px'}>
                                                <ItemsSpanImgStyle1 width ={'302px'} height={'200px'}>
                                                    
                                                </ItemsSpanImgStyle1>
                                            </ItemsDivTagStyle1>
                                        </ItemsLiTagStyle1>
                                        <ItemsLiTagStyle1 width ={'302px'} height={'320px'} margin={'0 24px 60px 0'} onClick={liClickHandler} >
                                            <ItemsDivTagStyle1 width ={'302px'} height={'320px'}>
                                                <ItemsSpanImgStyle1 width ={'302px'} height={'200px'}>
                                                    
                                                </ItemsSpanImgStyle1>
                                            </ItemsDivTagStyle1>
                                        </ItemsLiTagStyle1>
                                        <ItemsLiTagStyle1 width ={'302px'} height={'320px'} margin={'0 24px 60px 0'} onClick={liClickHandler} >
                                            <ItemsDivTagStyle1 width ={'302px'} height={'320px'}>
                                                <ItemsSpanImgStyle1 width ={'302px'} height={'200px'}>
                                                    
                                                </ItemsSpanImgStyle1>
                                            </ItemsDivTagStyle1>
                                        </ItemsLiTagStyle1>
                                        <ItemsLiTagStyle1 width ={'302px'} height={'320px'} margin={'0 24px 60px 0'} onClick={liClickHandler} >
                                            <ItemsDivTagStyle1 width ={'302px'} height={'320px'}>
                                                <ItemsSpanImgStyle1 width ={'302px'} height={'200px'}>
                                                    
                                                </ItemsSpanImgStyle1>
                                            </ItemsDivTagStyle1>
                                        </ItemsLiTagStyle1>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
        </div>
    )
}

const EquipmentLentCompo = React.memo(EquipmentLentCp);
export default EquipmentLentCompo;