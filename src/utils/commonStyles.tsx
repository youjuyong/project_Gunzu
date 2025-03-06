import styled from 'styled-components';

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

export default Section2Background;
