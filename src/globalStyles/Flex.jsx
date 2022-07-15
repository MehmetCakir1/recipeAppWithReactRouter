import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: ${({align})=> align || "center"};
    justify-content: ${({justify})=>justify || "center"};
    flex-wrap: ${({wrap})=> wrap && "wrap"};
`;

export default Flex;
