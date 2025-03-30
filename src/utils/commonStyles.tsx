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
     marginLeft : string,
     borderLeft : string
}
export const SelectTagTypeStyle = styled.select<selectTagType>`
         height : 100%;
         border : none;
         border-right : 1px solid #ddd;
         border-left  : ${(props) => props.borderLeft}; solid #ddd;
         font-size : 14px;
         padding-left : 10px;
         display : block;
         float : left;
         width : ${(props) => props.width};
         padding-left : 10px;
         margin-left : ${(props) => props.marginLeft};
`;

interface inputTagType {
    width : string,
}
export const InputTagTypeStyle = styled.input<inputTagType>`
    position  : absolute;
    right     : -78px;
    bottom    : 0;
       top    : 0;
    height    : 100%;
     width    : ${(props) => props.width};
    border    : 1px solid #ddd;
`;