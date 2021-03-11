import { useMemo } from 'react';
import styled from 'styled-components';

const Pagination = ({active, onChange, isLastPage}) => {
  const currentRange = useMemo(() => {
    let start = active < 4 ? 1 : active - 2;
    let end = active < 3 ? 6 : active + 3;

    if (isLastPage) {
      end = active + 1;
      start = active - 4;
    }

    return Array(end - start).fill().map((_, idx) => start + idx)
  }, [active, isLastPage]);

  return (
    <PaginationContainer>
      <PaginationItem onClick={() => onChange(active - 1)} disabled={active === 1}>&laquo;</PaginationItem>
      {currentRange.map(i => <PaginationItem key={i} active={active === i} onClick={() => onChange(i)}>{i}</PaginationItem>)}
      <PaginationItem onClick={() => onChange(active + 1)} disabled={isLastPage}>&raquo;</PaginationItem>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: inline-block;
`;

const PaginationItem = styled.span`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
  ${({active}) => !active && `
    &:hover {
      background-color: #ddd;
    }
  `}
  
  ${({active}) => active && `
    background-color: orange;
    color: white;
  `}
  
   ${({disabled}) => disabled && `
     pointer-events: none;
     color: gray;
     cursor: not-allowed;
  `}
`;

export default Pagination;