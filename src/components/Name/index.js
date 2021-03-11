import styled from 'styled-components';

const Name = ({children, isOrange, position}) => {
  return(<StyledDiv isOrange={isOrange} position={position}>{children}</StyledDiv>)
};

const StyledDiv = styled.div`
  text-shadow: -1px 0 orange, 0 1px orange, 1px 0 orange, 0 -1px orange;
  color: black;
  font-size: 20px;
  font-weight: 700;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({isOrange}) => isOrange && `
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: orange;
  `}
  
  ${({position}) => position && `
    justify-content: ${position === 'start' ? 'flex-start' : 'flex-end'};
  `}
`;

export default Name;