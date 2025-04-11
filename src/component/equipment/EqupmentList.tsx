import React, { FC, PropsWithChildren, useState, useRef, useEffect, Suspense, ReactElement } from "react";

import { ItemsLiTagStyle1    }    from '../../../src/utils/commonStyles';
import { ItemsDivTagStyle1   }    from '../../../src/utils/commonStyles';
import { ItemsSpanImgStyle1  }    from '../../../src/utils/commonStyles';

import { ItemsImgStyle1      }    from '../../../src/utils/commonStyles';
import { ItemsNameStyle1     }    from '../../../src/utils/commonStyles';

import { ItemsStateStyle1         }    from '../../../src/utils/commonStyles';
import { ItemsInlineStateStyle1   }    from '../../../src/utils/commonStyles';
import { ItemsNameSpanStyle1      }    from '../../../src/utils/commonStyles';
import { ItemsNameAStyle1         }    from '../../../src/utils/commonStyles';

import { ItemsPeriodSpanStyle     }    from '../../../src/utils/commonStyles';
import { ItemsBorrowNameSpanStyle }    from '../../../src/utils/commonStyles';
import { ItemsPeriodTextSpanStyle }    from '../../../src/utils/commonStyles';
import { SkeleTonStyle            }    from '../../../src/utils/commonStyles';

import  { MoreButton }  from "../../utils/commonStyles";


type EquipmentProps = {
    data : any,
    EquipmentData : any,
    setFlowModal : any
};

type Equip = {
    EQUIP_ID : number,
    EQUIP_NAME : string,
    EQUIP_LENT_STATUS : string,
    EQUIP_LENT_PERIOD_END : string,
    EQUIP_LENT_PERIOD_STRT : string,
    EQUIP_LENT_PERIOD_STRT_CODE : string,
    EQUIP_LENT_STATUS_CODE : string,
    EQUIP_TYPE             : string,
    SYMB_IMAG_TYPE : string,
    imgUrl : string,
    EQUIP_LENT_NAME : string
}

const EquipmentListCompo : FC<PropsWithChildren<EquipmentProps>> = ( { data, EquipmentData, setFlowModal, children } )=> {
    const [visibleItems, setVisibleItems] = useState(4);
    const [viewAll, setViewAll] = useState(false);
    const listRef = useRef(null);
    const [equipmentData, setEquipmentData] = useState(
        Array.isArray(data) && data.length > 0 ? data : EquipmentData
    );
    const [target, setTarget] = useState<any>(null);
    const arr1 = equipmentData.length < 4 ? equipmentData : equipmentData.slice(0, 4);
    const itemsToShow = viewAll ? equipmentData : arr1;

    const loadMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
      };

    const observer = useRef(
        new IntersectionObserver(
          (entries) => {
            const first = entries[0];
   
            if (first.isIntersecting) {
              loadMoreItems();
            }
          },
          { threshold: 1 }
        )
    );  

    useEffect(() => {
        const currentElement = target;
        const currentObserver = observer.current;
        
        return () => {
          if (currentElement) {
            currentObserver.unobserve(currentElement);
          }
        };
      }, [target]);
    
    useEffect(() => {
        if (viewAll && target) {
          observer.current.observe(target);
        }
    }, [viewAll, target]);

    // 더보기 버튼 클릭시
    const moreButton = () => {
        setViewAll(true);
        loadMoreItems();
    };

    useEffect(() => {
        setEquipmentData(
          Array.isArray(data) && data.length > 0 ? data : EquipmentData
        );
    }, [data, EquipmentData]);

    const equipClickHandler = ( equipId : number, openValue : boolean, lentStatus : string ) => {
        setFlowModal({ equipId : equipId, openValue : openValue, lentStatus : lentStatus });
    }
    
    return (
        <>
           { 
             Array.isArray(itemsToShow) && itemsToShow.slice(0, visibleItems).map( ( equipinfo : Equip, index : number) => {
                
                                    const lentName = equipinfo.EQUIP_NAME,
                                            lentHuman = equipinfo.EQUIP_LENT_NAME,
                                            strtDate = equipinfo.EQUIP_LENT_PERIOD_STRT,
                                            endDate = equipinfo.EQUIP_LENT_PERIOD_END,
                                            status = equipinfo.EQUIP_LENT_STATUS,
                                            imgType = equipinfo.SYMB_IMAG_TYPE,
                                            imgUrl = equipinfo.imgUrl,
                                           equipId = equipinfo.EQUIP_ID,
                                           lentStatus = equipinfo.EQUIP_LENT_STATUS_CODE;
                                    let color = '';
                                    
                                    switch ( lentStatus ) {
                                        case  'ELTL1' :  color = 'var(--green300)';
                                                         break;
                                        case  'ELTL2' :  color = 'var(--orange400)';
                                                         break;
                                        case  'ELTL3' :  color = 'var(--red400)';
                                                         break;
                                    }
                                    
                                    const img = 'data:image/' + imgType.toLowerCase()  + ';base64,' + imgUrl;
                        return (
                                <Suspense fallback={ SkeleTonStyle() } key={equipinfo.EQUIP_ID + 'Suspense'}>
                                    <ItemsLiTagStyle1 ref={listRef} key={equipinfo.EQUIP_ID + 'ItemsLiTagStyle1'} width ={'302px'} height={'320px'} margin={'0 24px 60px 0'} onClick={() => equipClickHandler(equipId, true, lentStatus)} >
                                        <ItemsDivTagStyle1 width ={'302px'} height={'320px'} key={equipinfo.EQUIP_ID + 'ItemsDivTagStyle1'}>
                                            <ItemsSpanImgStyle1 width ={'302px'} height={'200px'} key={equipinfo.EQUIP_ID + 'ItemsSpanImgStyle1'}>
                                                        <img src={img} alt={lentName} key={equipinfo.EQUIP_ID} ></img>
                                            </ItemsSpanImgStyle1>
                                        <ItemsNameSpanStyle1 key={equipinfo.EQUIP_ID + 'ItemsNameSpanStyle1'}>
                                                <ItemsNameAStyle1 key={equipinfo.EQUIP_ID + 'ItemsNameAStyle1'}></ItemsNameAStyle1>
                                                <ItemsNameStyle1 width ={'262px'} height={'36px'} key={equipinfo.EQUIP_ID + 'ItemsNameStyle1'}>
                                                    {lentName}
                                                </ItemsNameStyle1>
                                            </ItemsNameSpanStyle1>
                                            <ItemsStateStyle1 width ={'262px'} height={'32px'} key={equipinfo.EQUIP_ID + 'ItemsStateStyle1'}>
                                                <ItemsInlineStateStyle1 color={color} key={equipinfo.EQUIP_ID + 'ItemsStateStyle1'}>{status}</ItemsInlineStateStyle1>
                                            </ItemsStateStyle1>
                                            <ItemsPeriodSpanStyle>
                                                    <ItemsBorrowNameSpanStyle>
                                                            {lentHuman && lentHuman}
                                                    </ItemsBorrowNameSpanStyle>
                                                    <ItemsPeriodTextSpanStyle>
                                                                {endDate === undefined ? '' : strtDate + ' ~ ' + endDate}
                                                    </ItemsPeriodTextSpanStyle>
                                            </ItemsPeriodSpanStyle>
                                        </ItemsDivTagStyle1>
                                    </ItemsLiTagStyle1>
                                </Suspense>
                        )
                    })
             }
             {viewAll && visibleItems < equipmentData.length && (
                <div >
                    <div className="loadingWrapper" ref={setTarget}>
                        <div className="loadingSpinner"></div>
                        <div className="loadingText">🤖 장비정보를 불러오는 중 입니다...</div>
                    </div>
                </div>
             )}
             <div className="listAddButton">
                {!viewAll && equipmentData.length > 4 && (
                    <MoreButton onClick={moreButton}>더보기</MoreButton>
                )}
            </div>
        </>
    )
}

 const EquipmentList = React.memo(EquipmentListCompo);
 export default EquipmentList;