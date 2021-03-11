import styled from 'styled-components';

const Container = ({children}) => {

  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
   padding: 60px 0;
   margin: 0 auto;
   width: 1000px;
`;

export default Container;

