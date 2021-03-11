import { useState, useEffect, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Name from '../../components/Name';
import Table from '../../components/Table';
import Loader from '../../components/Loader';
import Container from '../../components/Container';
import Pagination from '../../components/Pagination';
import PolarChart from '../../components/PolarChart';

import { getAllBeers } from '../../service/beers';

const AllBeers = ({}) => {
  let history = useHistory();
  const { page } = useParams();

  const [activePage, setActivePage] = useState(page ? Number.parseInt(page) : 1);
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [currentSort, setCurrentSort] = useState('none');

  const handleChangePage = (page) => {
    history.push(`/${page}`);
    setActivePage(page);
  };

  const handleClickBeer = (id) => {
    history.push({pathname: `/beer/${id}`, state: { prevPath: history.location.pathname }});
  };

  const handleChangeSort = () => {
    const newSort = currentSort === 'none' ? 'hight' : currentSort === 'low' ? 'none' : 'low';
    setCurrentSort(newSort);
  };

  useEffect(async() => {
    setLoading(true);
    const data = await getAllBeers(activePage);

    setBeers(data);
    setLoading(false);
  }, [activePage]);

  const sortBeers = useMemo(() => {
    if (currentSort === 'none') return beers;
    return [...beers].sort((a, b) => currentSort === 'low' ? a.abv - b.abv : b.abv - a.abv)
  }, [currentSort, beers]);


  if (loading) return <Container><Loader/></Container>;

  return (
    <Container>
      <StyledDiv>
        <Name>A fine beer may be judged with only one sip, but it's better to be thoroughly sure.</Name>
        {!!beers.length && <>
        <SubTitle>P.S. Chart with abv in beers</SubTitle>
        <PolarChart
          data={[...beers.map(i =>  i.abv)]}
          allData={[...beers.map(i => ({abv: i.abv, name: i.name, id: i.id}))]}
          handleClickBeer={handleClickBeer}
        />
        </>}
      </StyledDiv>
      <Table
        data={sortBeers}
        currentSort={currentSort}
        handleClickBeer={handleClickBeer}
        handleChangeSort={handleChangeSort}
      />
      <Pagination active={activePage} onChange={handleChangePage} isLastPage={!beers.length}/>
    </Container>
  );
};


const StyledDiv = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const SubTitle = styled.div`
   font-weight: 700;
   text-align: right;
`;

export default AllBeers