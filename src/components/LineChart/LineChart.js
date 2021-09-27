import React, { useEffect } from 'react';

// import './index.css';

function LineChart(props) {
  const { data } = props;

  useEffect(() => {
    drawChart();
  }, [data]);
  
  function drawChart() {
    // Add logic to draw the chart here
  }
  return <div id="container" />;
}

export default LineChart;