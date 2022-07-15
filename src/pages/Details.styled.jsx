import styled from 'styled-components';
import Flex from '../globalStyles/Flex';

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
 
`;

export const DetailPart = styled(Flex)`
  flex-direction: row;
  margin: 1rem;
  border-radius: 5px;
  background-color: #e1f1dd;
  padding:0rem  1rem;
  box-shadow: 0 10px 10px grey;
  ;
`;

export const ImgContainer = styled.div`
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  width:60%;
  max-width: 20rem;;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
  }
`;

export const HeaderContainer = styled(Flex)`
  margin: 1.5rem;
  font-size: 2rem;
  font-weight: 600;
  color: brown;
  text-align: center;
`;

export const IngContainer = styled.div`
  font-size: 1.2rem;
  h2{
    color:brown;
  }
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: center;
  font-size: 1.4rem;
  h4{
    color:brown;
  }
`;
