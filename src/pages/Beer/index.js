import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Loader from '../../components/Loader';
import Name from '../../components/Name';
import BeerItem from '../../components/BeerItem';
import Container from '../../components/Container';
import { getBeer } from '../../service/beers'

const Beer = () => {
  let history = useHistory();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [currentBeer, setCurrentBeer] = useState([]);

  useEffect(async() => {
    setLoading(true);

    const data = await getBeer(id);
    setCurrentBeer(data[0]);
    setLoading(false);
  }, []);

  const HandleBackToAll = () => {
    const prevPath = history.location.state?.prevPath || '/1';
    history.push({pathname: prevPath});
  };

  if (loading) return (<Loader />);

  return (
    <Container>
      <BackContainer onClick={HandleBackToAll}><Name isOrange onClick={HandleBackToAll} position={'start'}>Back to all Beers</Name></BackContainer>
      <BeerItem {...currentBeer}/>
    </Container>)
};

const BackContainer = styled.div`
  cursor: pointer;
`;

export default Beer;