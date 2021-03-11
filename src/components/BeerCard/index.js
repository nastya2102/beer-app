import styled from 'styled-components';
import Name from '../../components/Name';
import Image from '../../components/Image';

const BeerCard = ({name, image_url, tagline, abv, handleClickBeer, id}) => {

  return (
    <Card onClick={() => handleClickBeer(id)}>
      <Abv>{abv}%</Abv>
      <Image background={image_url} isAnimation/>
      <Name>{name}</Name>
      <Tagline>{tagline}</Tagline>
    </Card>
  )
};

const Card = styled.div`
  position: relative;
  cursor: pointer;
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

export default BeerCard;

