import styled from 'styled-components';
import Image from '../../components/Image';
import loading from '../../assets/loading.gif';

const Loader = () => {
  return(
    <LoaderContainer>
      <Image background={loading} height={'300px'}/>
    </LoaderContainer>);
};


const LoaderContainer = styled.div`
   height: 100vh;
   margin: 0 auto;
   padding: 50px 0;
   box-sizing: border-box;
`;

export default Loader