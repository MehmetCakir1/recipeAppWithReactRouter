import styled from 'styled-components';
import Flex from "../globalStyles/Flex"
import {Link} from "react-router-dom"

const Nav = styled(Flex)`
font-size: 1.5rem;
padding: 0rem 2rem;
@media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
    }
`;

export default Nav;


export const Div = styled(Flex)`
    padding: 1rem;
    width:100%;
    @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
`;
export const Span = styled.span`
    padding: 1rem;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    display:none;
    @media (max-width: ${({ theme }) => theme.screens.md}) {
    display:inline-block;
  }
`;

export const Ul = styled(Flex)`
    /* padding: 1rem; */
    @media (max-width: ${({ theme }) => theme.screens.md}) {
    max-height: ${({ isVisible }) => (isVisible ? '400px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in;
  }
`;

export const Li = styled.li`
    list-style-type: none;
    margin-right: 2rem;
    font-weight: 500;
    @media (max-width: ${({ theme }) => theme.screens.md}) {
    margin:0rem 1rem;
    font-size: 1.1rem;
  }
`;

export const MenuLink = styled(Link)`
    text-decoration:none;
    color:black;
`;

export const Logo = styled(Link)`
    width:150px;
`;
export const Img = styled.img`
    width:150px;
`;


