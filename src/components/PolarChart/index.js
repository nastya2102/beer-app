import { Polar }  from 'react-chartjs-2';

const PolarChart = ({data, allData, handleClickBeer}) => {
  const colors = ["orange", "gray"];
  return (
    <Polar
      data={{
        datasets: [{
          data: data,
          backgroundColor: data.map((_, i) => colors[i%2]),
        }],
        labels: allData.map(i => i.name)
      }}
      onElementsClick={elem => {
        if(!elem.length) return;
        const index = elem[0]._index;
        handleClickBeer(allData[index].id);
      }}
      options={{
        padding: "0px",
        defaultFontSize: "14px",
        legend: {
          display: false,
        },
        scale: {
          ticks: {
            max: Math.max(...data),
            min: 0,
            z: 13,
          },
        },
      }}
    />
  )
};

export default PolarChart;