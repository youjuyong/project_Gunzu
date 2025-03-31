import styled from 'styled-components';
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
