import styled from 'styled-components';
import Name from '../../components/Name';
import Image from '../../components/Image';
import EmptyBeers from '../../assets/empty-beer.jpg';

const NothingFound = () => {
  return(
    <StyledDiv >
      <Image background={EmptyBeers} height={'500px'} opacity={0.6}/>
      <NameContainer><Name>Nothing Found</Name></NameContainer>
    </StyledDiv>)
};

const StyledDiv = styled.div`
  position: relative;
  margin: 15px 0;
`;

const NameContainer = styled.div`
  position: absolute;
  top: 230px;
  left: 345px;
  
  & > div {
    font-size: 40px;
  }
`;

export default NothingFound;