import styled from 'styled-components';
import Flex from "../globalStyles/Flex"

const Div = styled(Flex)`
flex-direction: row;
`;

export default Div;


export const RecipeDiv = styled(Flex)`
flex-direction: column;
  height: 18rem;
  width: 20rem;
  background-color: lightskyblue;
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;


export const Image = styled.img`
  height: 10rem;
  border-radius: 10px;
  margin:0.5rem 0rem;
`;


export const Button = styled.button`
  background: ${({ theme }) => theme.colors.btnColor};
  color:white;
  padding: 0.7rem;
  outline: none;
  border: none;
  margin: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

