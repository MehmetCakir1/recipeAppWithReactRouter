import styled from 'styled-components';
import Flex from "../globalStyles/Flex";



const LoginContainer = styled(Flex)`

form{
  width: 100%;
  margin: auto;
  text-align:center;
}
`
export default LoginContainer


export const Input =  styled.input`
width: 100%;
max-width:30rem;
padding: 0.4rem;
margin:0.5rem 0rem;
`;


export const Div =  styled.div`
padding: 1rem;
margin: auto;
`;

export const Button =  styled.button`
padding: 0.3rem 0.8rem;
border-radius:10px;
border: 1px inset pink;
font-size: 1.2rem;
font-weight: 600;
background-color: lightpink;
cursor: pointer;
&:active{
  transform: scale(0.97);
}
`;