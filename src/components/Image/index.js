import styled from 'styled-components';
import BeerDefault from '../../assets/beer2.png';

const Image = (props) => {
  return (
    <StyledDiv {...props}/>
  )
};

const StyledDiv = styled.div`
   background-image: url(${({background})=> background ? background : BeerDefault});
   background-repeat: no-repeat;
   background-position: center;
   width: auto;
   height: ${({height}) => height ? height : '150px'};
   background-size: contain;  
   ${({isAnimation}) => isAnimation && `
    &:hover {
      animation: shake 0.5s;
      animation-iteration-count: infinite;
   }
   `} 
   ${({opacity}) => opacity && `
      opacity: ${opacity};
   `}

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`;

export default Image;

