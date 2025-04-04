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


export default memo(({ data, isConnectable } : any) => {
    console.log(data,isConnectable );
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
               <img src={require("../../../assets/image/equipment/water.png")} alt='소환영웅1' ></img>
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
                  푸르미르의 신발
                </ItemsPtagStyle>
                <ItemsSpanTagStyle>6챈</ItemsSpanTagStyle>
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
