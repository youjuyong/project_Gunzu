import React, { PropsWithChildren, useState, useRef, useEffect } from "react";

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

import  { MoreButton }  from "../../utils/commonStyles";

type EquipmentProps = PropsWithChildren<{
    data : any,
    EquipmentData : any,
    setFlowModal : any
}>;

type Equip = {
    EQUIP_ID : number,
    EQUIP_NAME : string,
    EQUIP_LENT_STATUS : string,
    EQUIP_LENT_PERIOD_END : string,
    EQUIP_LENT_PERIOD_STRT : string,
    SYMB_IMAG_TYPE : string,
    imgUrl : string
}

const EquipmentListCompo = ( props : EquipmentProps ) => {
    const { children, data, EquipmentData, setFlowModal } = props;
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

    const moreButton = () => {
        setViewAll(true);
        loadMoreItems();
    };

    useEffect(() => {
        setEquipmentData(
          Array.isArray(data) && data.length > 0 ? data : EquipmentData
        );
    }, [data, EquipmentData]);

    const equipClickHandler = (open:boolean) => {
        setFlowModal(open);
    }

    return (
        <>
           { 
             Array.isArray(itemsToShow) && itemsToShow.slice(0, visibleItems).map( (equipinfo : Equip, index : number) => {
                                    const lentName = equipinfo.EQUIP_NAME,
                                            strtDate = equipinfo.EQUIP_LENT_PERIOD_STRT,
                                            endDate = equipinfo.EQUIP_LENT_PERIOD_END,
                                            status = equipinfo.EQUIP_LENT_STATUS,
                                            imgType = equipinfo.SYMB_IMAG_TYPE,
                                            imgUrl = equipinfo.imgUrl;
                                            
                                    const img = 'data:image/' + imgType.toLowerCase()  + ';base64,' + imgUrl;
                        return (
                            <>
                                    <ItemsLiTagStyle1 ref={listRef} key={equipinfo.EQUIP_ID + 'ItemsLiTagStyle1'} width ={'302px'} height={'320px'} margin={'0 24px 60px 0'} onClick={() => equipClickHandler(true)} >
                                        <ItemsDivTagStyle1 width ={'302px'} height={'320px'}>
                                            <ItemsSpanImgStyle1 width ={'302px'} height={'200px'}>
                                                        <img src={img} alt={lentName} key={equipinfo.EQUIP_ID} ></img>
                                            </ItemsSpanImgStyle1>
                                        <ItemsNameSpanStyle1>
                                                <ItemsNameAStyle1></ItemsNameAStyle1>
                                                <ItemsNameStyle1 width ={'262px'} height={'36px'}>
                                                    {lentName}
                                                </ItemsNameStyle1>
                                            </ItemsNameSpanStyle1>
                                            <ItemsStateStyle1 width ={'262px'} height={'32px'}>
                                                <ItemsInlineStateStyle1 color={'var(--red400)'}>{status}</ItemsInlineStateStyle1>
                                            </ItemsStateStyle1>
                                            <ItemsPeriodSpanStyle>
                                                    <ItemsBorrowNameSpanStyle>
                                                            {strtDate && strtDate}
                                                    </ItemsBorrowNameSpanStyle>
                                                    <ItemsPeriodTextSpanStyle>
                                                                {endDate === undefined ? '' : strtDate + ' ~ ' + endDate}
                                                    </ItemsPeriodTextSpanStyle>
                                            </ItemsPeriodSpanStyle>
                                        </ItemsDivTagStyle1>
                                    </ItemsLiTagStyle1>
                            </>
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