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
export default Section2Background;

