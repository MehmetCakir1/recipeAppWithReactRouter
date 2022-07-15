import styled from 'styled-components';

const HeaderDiv = styled.header`
text-align: center;
width: 100%;
margin: auto;
padding: 0.3rem;

`;

export default HeaderDiv;


export const H1 = styled.h1`
color:brown;
font-size: 2rem;
font-weight: 600;
padding: 0.5rem;
`;

export const Input = styled.input`
padding: 0.2rem;
font-size: 1.2rem;
width: 55%;
max-width: 380px;
margin-right: 0.5rem;
`;
export const Select = styled.select`
padding: 0.2rem;
font-size: 1.2rem;
width: 40%;
max-width: 270px;
`;
export const Button = styled.button`
padding: 0.2rem 0.5rem;
margin-top: 1rem;
font-size: 1.2rem;
border-radius: 10px;
border:1px inset lightblue;
background-color: lightblue;
cursor: pointer;
&:active{
    transform: scale(0.97);
}
`;
