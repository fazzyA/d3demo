import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';

function Line() {
  const [data, setData] = useState([]);

  useEffect(() => {
    regenerateData();
  }, []);

  function regenerateData() {
    const chartData = [];
    for (let i = 0; i < 20; i++) {
      const value = Math.floor(Math.random() * i + 3);
      chartData.push({
        date: new Date(),
        label: i,
        value,
        tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`
      });
    }
    setData(chartData)
    // const line = d3.line()
    // .x(d => x(d.date))
    // .y(d => y(d.value));  
  }
 //sample data [[10, 60], [20, 70], [30, 80], [40, 100], [40, 100], [50, 120], [60, 200]]
  return (
    <div className="App">
      {/* <button onClick={regenerateData}>Change Data</button> */}

      <LineChart data={data} width={400} height={300} />
    </div>
  );
}

export default Line;