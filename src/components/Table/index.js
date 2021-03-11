import styled from 'styled-components';
import Name from '../../components/Name';
import SortIcon from '../../icons/sort';
import BeerCard from '../../components/BeerCard';
import NothingFound from '../../components/NothingFound';

const Table = ({data, handleClickBeer, currentSort, handleChangeSort}) => {
  if (!data.length) return <NothingFound />;

  return (
    <>
      <Name isOrange position={'end'}>
        Sort beers by abv
        <IconWraper onClick={handleChangeSort}><SortIcon currentSort={currentSort}/></IconWraper>
      </Name>
      <TableLayout>
        {data.map((item,) => <BeerCard key={item.id} {...item} handleClickBeer={handleClickBeer}/>)}
      </TableLayout>
    </>
  );
};

const TableLayout = styled.div`
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
`;

const IconWraper = styled.span`
  cursor: pointer;
  margin-left: 15px;
`;

export default Table