import styled from 'styled-components';
import Name from '../../components/Name';
import Image from '../../components/Image';
import NothingFound from '../../components/NothingFound';

const BeerItem = ({name, image_url, tagline, abv, description, first_brewed, brewers_tips}) => {
  if (!name) return <NothingFound />;

  return (
    <ItemContainer>
      <ImageContainer>
        <Abv>{abv}</Abv>
        <Image background={image_url} height={'500px'}/>
      </ImageContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Since>Since {first_brewed}</Since>
        <Tagline>{tagline}</Tagline>
        <Description isOrange>
          {description}
          </Description>
        <Description isOrange>
          <SubTitle>Brewers tips: </SubTitle>
          {brewers_tips}
        </Description>
      </InfoContainer>
    </ItemContainer>
  )
};

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 300px;
`;

const InfoContainer = styled.div`
  width: 45%;
  max-width: calc(100% - 330px);
`;

const Abv = styled.div`
  position: absolute;
  top: -5px;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: orange;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
`;

const Tagline = styled.div`
  font-style: italic;
  color: gray;
`;

const Description = styled.div`
  background-color: #ffa5008f;
  padding: 30px 5px;
  border-radius: 5px;
  margin: 15px 0;
`;

const SubTitle = styled.span`
  font-weight: 700;
`;

const Since = styled.div`
  color: black;
  font-weight: 700;
  margin-top:  -15px;
  margin-bottom: 30px;
`;

export default BeerItem;

