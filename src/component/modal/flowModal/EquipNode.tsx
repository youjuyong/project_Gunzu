import React, { memo }                from "react";
import { ItemsContentDivStyle    }    from "../../../utils/commonStyles";
import { ItemsContentButtonStyle }    from "../../../utils/commonStyles";
import { Handle, Position        }    from "reactflow";

import { ItemsContentUlStyle }         from '../../../utils/commonStyles';
import { ItemsContentliStyle }         from '../../../utils/commonStyles';
import { ItemsContentImgDivStyle }     from '../../../utils/commonStyles';
import { ItemsContentTitleDivStyle }   from '../../../utils/commonStyles';
import { ItemsPtagStyle }              from '../../../utils/commonStyles';
import { ItemsSpanTagStyle }           from '../../../utils/commonStyles';
import { EquipmentItemsSpanTagStyle }  from '../../../utils/commonStyles';

import water from "../../../assets/image/equipment/water.png";
import fire  from "../../../assets/image/equipment/fire.png";
import ston  from "../../../assets/image/equipment/ston.png";
import wind  from "../../../assets/image/equipment/wind.png";

export default memo(({ data, isConnectable } : any) => {
    let enchantImg = null;

    if ( data.enchantYn === 'Y' ) {
      enchantImg = data.enchantType === 'ELST1' ? water
                 : data.enchantType === 'ELST2' ? fire
                 : data.enchantType === 'ELST3' ? ston
                 : data.enchantType === 'ELST4' ? wind
                 : '';
    }
    
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
        <ItemsContentDivStyle width={'240px'} $bgcolor={'azure'}>
          <ItemsContentUlStyle>
            <ItemsContentliStyle>
             { data.enchantYn === 'N' ? <></> :<img src={enchantImg} alt='소환영웅1' ></img> }  
            </ItemsContentliStyle>
          </ItemsContentUlStyle>
          <ItemsContentButtonStyle>
              <ItemsContentImgDivStyle aria-selected="false">
                  <picture>
                    <img src={require("../../../assets/image/book.png")}  alt='소환영웅1' ></img>
                  </picture>
              </ItemsContentImgDivStyle>
              <ItemsContentTitleDivStyle>
                <ItemsPtagStyle>
                  {data?.detlName}
                </ItemsPtagStyle>
                <ItemsSpanTagStyle>{ data?.statFir } {  data.enchantYn === 'Y' ?  '/ 인챈트 : ' + data.enchantLevl : '' }<br></br>{ data?.statSec }   </ItemsSpanTagStyle>
              </ItemsContentTitleDivStyle>
          </ItemsContentButtonStyle>
        </ItemsContentDivStyle>

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </>
  );
});
