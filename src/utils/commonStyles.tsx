import styled, { keyframes } from 'styled-components';
import st2 from '../assets/image/st2.png';
import st6 from '../assets/image/st6.png';
import st7 from '../assets/image/st7.png';

interface divBackGroundType {
    width  : any,
    height : any
}
const Section2Background = styled.div<divBackGroundType>`
        max-width      : ${(props)  => props.width  ? props.width  : '400px'};
        max-height     : ${(props)  => props.height ? props.height  : '400px'};
        margin         : 0 auto;
        display        : flex;
        flex-direction : column;
`;

interface innerDivType {
    width  : string,
}
export const Section2DivInner = styled.div<innerDivType>`
        padding     : 8rem 0 6rem 0;
        margin      : 0 auto;
        width       : ${(props)  => props.width ? props.width  : '95rem'} !important;
        text-align  : center;
`;
interface innerh3Type {
    url  : string,
}

export const Section2Titleh3 = styled.h3<innerh3Type>`
         font-size   : 40px;
         line-height : 64px;
         height      : 64px;
         font-weight : 700;
         background  :  ${(props) => props.url === 'st6' ? `url(${st6})` 
                                   : props.url === 'st7' ? `url(${st7})` :  `url(${st2})` }center top no-repeat;
         background-size : 503px 64px;
`;

interface backImageDivType {
    height  : string,
}

export const BackImageDiv = styled.div<backImageDivType>`
    height            : ${(props) => props?.height  ? props?.height  : '0px'};
`;

export default Section2Background;

interface FotterButtonType {
    width : string
}
export const FotterButton = styled.button<FotterButtonType>`
    width : ${(props) => props?.width };
    margin-left: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
    height : 30px;
    
    &:hover {
        background : #fff;
    }
`;


interface Section2TableDivType {
    width : string
}
export const Section2TableDiv = styled.div<Section2TableDivType>`
  width : ${(props) => props?.width }  !important;
  margin : 0 auto;
`;

interface Section2TheadType {
    color : string
}
export const Section2Thead = styled.thead<Section2TheadType>`
   background : var(${(props) => props.color});
   position : relative !important;
`;

interface Section2TheadThType {
    widthpertectage : string
}
export const Section2TheadTh = styled.th<Section2TheadThType>`
   width : ${(props) => props?.widthpertectage }  !important;
`;

interface Section2TBodyType {
    color : string,
    height : string
}
export const Section2Tbody = styled.tbody<Section2TBodyType>`
   background : var(${(props) => props.color});
   height : ${(props) => props?.height };
   position : relative !important;
   top : 0 !important;
`;

interface Section2TbodyThType {
    widthpertectage : string
}
export const Section2TbodyTh = styled.th<Section2TbodyThType>`
   width : ${(props) => props?.widthpertectage } !important;
`;

interface spanTagStyle1Type {
    color : string,
    weight : number
}
export const SpanTagStyle1 = styled.span<spanTagStyle1Type>`
   color : var(${(props) => props?.color });
   text-decoration : underline;
   text-align:center;
   font-weight : ${(props) => props?.weight };
`;

interface humanStaticsliTagStyleType {
    width : string
}
export const HumanStaticsliTagStyle = styled.li<humanStaticsliTagStyleType>`
    display: inline-block;
    font-size: 13px;
    color: #000;
    line-height: 35px;
    float: none;
    width : ${(props) => props?.width };
`;

interface selectTagSpanType {
    width : string
}
export const SelectTagSpanTypeStyle = styled.span<selectTagSpanType>`
        display : block;
         height : 10px;
          width : ${(props) => props?.width};
`;

interface selectTagType {
          width : string,
     marginleft : string,
     borderleft : string
}
export const SelectTagTypeStyle = styled.select<selectTagType>`
         height : 100%;
         border : none;
         border-right : 1px solid #ddd;
         border-left  : ${(props) => props.borderleft}; solid #ddd;
         font-size : 14px;
         padding-left : 10px;
         display : block;
         float : left;
         width : ${(props) => props.width};
         padding-left : 10px;
         margin-left : ${(props) => props.marginleft};
`;

interface inputTagType {
    width : string,
    right : string
}
export const InputTagTypeStyle = styled.input<inputTagType>`
    position  : absolute;
    right     : ${(props) => props.right};
    bottom    : 0;
       top    : 0;
    height    : 100%;
     width    : ${(props) => props.width};
    border    : 1px solid #ddd;
`;

interface buttonTagType {
    width : string,
}
export const ButtonTagTypeStyle = styled.button<buttonTagType>`
    position   : absolute;
    right      : 0;
    top        : 0;
    bottom     : 0;
    width      : ${(props) => props.width};
    background : #667a00;
    color      : #fff;
    font-size  : 15px;
    cursor: pointer;

    &:hover {
        background :rgb(125, 146, 18);
    }
`;


/*
*
* 장비 대여 items
* 
*/

interface ItemsLiTagStyle1Type {
    height : string,
    width  : string,
    margin : string
}
export const ItemsLiTagStyle1 = styled.li<ItemsLiTagStyle1Type>`
    height : ${(props) => props.height};
    margin : ${(props) => props.margin};
    float  : left;
    display : block;
    width :  ${(props) => props.width};
`;

interface ItemsDivTagStyle1Type {
    height : string,
    width  : string
}
export const ItemsDivTagStyle1 = styled.div<ItemsDivTagStyle1Type>`
    height : ${(props) => props.height};
    background-color : #fff;
    transition : all .15s linear;
    cursor : pointer;
    position  : relative;
    display : block;
    width :  ${(props) => props.width};
    overflow : hidden;

    &:active {
        box-shadow: 0 0 16px 0 rgba(0,0,0,.16);
        transition: all .2s linear
    }

    &:hover {
        box-shadow: 0 0 16px 0 rgba(0,0,0,.16);
        transition: all .2s linear;
        
            img {
                transition : all .6s cubic-bezier(.23,1,.32,1);
                transform  : scale(1.1) translateZ(0);
            }
    }
`;

interface ItemsSpanImgStyleType {
    height : string,
    width  : string 
}
export const ItemsSpanImgStyle1 = styled.span<ItemsSpanImgStyleType>`
    height : ${(props) => props.height};
     width : ${(props) => props.width};
   display : block;
   overflow : hidden;
`;

export const ItemsImgStyle1 = styled.img`
    transition : all .15s cubic-bezier(.23,1,.32,1);
    transform  : scale(1) translateZ(0);
    top : 0;
    left : 0;

    &:hover {
        transition : all .6s cubic-bezier(.23,1,.32,1);
        transform  : scale(1.1) translateZ(0);
    }
`;

export const ItemsNameSpanStyle1 = styled.span`
   position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 15
`;

export const ItemsNameAStyle1 = styled.a`
    display: block;
    padding-top: 224px;
    color: #17191d;
`;

interface ItemsNameSpanStyleType {
    width : string,
    height : string
}

export const ItemsNameStyle1 = styled.span<ItemsNameSpanStyleType>`
    display : block;
    height : ${(props) => props.height};
    width  : ${(props) => props.width};
    margin : 0 auto;
    word-wrap : break-word;
    padding-right : 24px;
    font-family : 'Pretendard-Regular';
    font-weight : 700;
`;

interface ItemsStateSpanStyleType {
    width : string,
    height : string
}

export const ItemsStateStyle1 = styled.span<ItemsStateSpanStyleType>`
    height : ${(props) => props.height};
    width  : ${(props) => props.width};
    display: block;
    margin: 50px auto 0;
    color: #737881;
    letter-spacing: -.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
`;

interface ItemsInlineStateSpanStyleType {
     color : string
}

export const ItemsInlineStateStyle1 = styled.span<ItemsInlineStateSpanStyleType>`
    display: inline-block;
    color:${(props) => props.color };
    text-transform: uppercase;
    font-family : 'Pretendard-Regular';
     font-weight : 700;
`;

export const ItemsPeriodSpanStyle = styled.span`
   display: table;
   width : 100%;
   margin-bottom : 12px;
`;

export const ItemsBorrowNameSpanStyle = styled.span`
    padding : 4px 0 4px 20px;
    text-align : left;
    display : table-cell;
    white-space : nowrap;
    font-family : 'Pretendard-Regular';
`;

export const ItemsPeriodTextSpanStyle = styled.span`
    display : table-cell;
    white-space : nowrap;
    text-align : right;
    padding-right : 12px;
    font-family : 'Pretendard-Regular';
`;


/*
*
* 장비 대여 items 모달
* 
*/

interface ItemsContentDivStyleType {
    width : string,
    $bgcolor : string
} 
export const ItemsContentDivStyle = styled.div<ItemsContentDivStyleType>`
    max-width : ${props => props.width };
    min-width : ${props => props.width };
    box-sizing : border-box;
    position : relative;
    width : 100%;
    padding : 0px;
    margin : 0px;
    border-radius : 8px;
    background-color : ${props => props.$bgcolor };
`;


export const ItemsContentButtonStyle = styled.button`
    position : relative;
    width : 100%;
    background-color : var(--white);
    margin : 0px;
    border : 1px solid #e0e0e0;
    padding : 8px 8px 32px;
    border-radius : 8px;
    display : grid;
    grid-template-columns : repeat(auto-fit, minmax(150px, auto));
    gap : 8px;
    align-items : center;
    flex-direction : row;
    transition : background-color 0.125s ease-in-out;
    overflow : hidden;

    &:hover  {
        cursor : pointer;
        background-color : rgba(255, 255, 255, 0.2);

           img {
            transition : all .6s cubic-bezier(.23,1,.32,1);
            transform : scale(1.1) translateZ(0);
        }
    }
`;

export const ItemsContentUlStyle = styled.ul`
    list-style : none;
    padding : 0px;
    margin : 0px;
    position : absolute;
    top : 12px;
    left : 12px;
    z-index : 1;
`

export const ItemsContentliStyle = styled.li`
  width: fit-content;
  font-size: 10px;
  border-radius: 8px;
  padding : 2px 4px;
  background-color : #eaeaea;
  trasition : box-shadow 0.125s ease-in-out;
`

export const ItemsContentImgDivStyle = styled.div`
    margin : 0px;
    padding : 0px;
    border-radius : 8px;
    text-align : center;
    transition : background-color 0.125s ease-in-out;
    background-color : #eaeaea;
    min-height : 80px;
    display : flex;
    justify-content: center;
    align-items:center;
`

export const ItemsContentTitleDivStyle = styled.div`
    height : 100%;
    display : flex;
    flex-direction : column;
    padding : 4px 0px;
    gap : 4px;
    box-sizing : border-box;
`
const textStyle = styled.p`
    color : rgba(0, 0, 0, 0.75);
    font-family : "Pretendard-Regular";
    padding : 0px;
    margin : 0px;
    font-size : 16px;
`

export const ItemsPtagStyle = styled(textStyle)`
    width : 100%;
    text-align : left;
    line-height : 1;
    font-weight : 500;
    text-wrap : balance;
`;

export const ItemsSpanTagStyle = styled.span`
    width : 100%;
    text-align : left;
    font-size : 12px;
    line-height : 1.2;
    display : flex;
    align-items : center;
    min-height : 30px;
`;

export const EquipmentItemsSpanTagStyle = styled.span`
    top : -5px;
    position : relative;
    margin-left : 4px;
`

export const MoreButton = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 16px;
  transition: 0.25s;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  color: var(--white);

  &:hover {
    letter-spacing: 2px;
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    transform: scale(1.5);
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  gap: 10px;
`;

export const SkeleTonStyle = () => {
    return (
        <li>
                <div className="post-container">
                <div className="post-thumbnail-wrapper">
                    <div className="post-thumbnail"></div>
                </div>
                <div className="post-article-wrapper">
                    <div className="post-article-item title"></div>
                    <div className="post-article-item summary"></div>
                    <div className="post-article-item author"></div>
                </div>
            </div>
        </li>
    )
}