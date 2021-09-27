import React, { useEffect } from 'react';
import * as d3 from 'd3';

// import './index.css';

function LineChart(props) {
  const { data, width, height } = props;

  useEffect(() => {
    drawChart();
  }, [data]);
  
  function drawChart() {
    // Add logic to draw the chart here
  }
  return <div id="container" />;
}

export default LineChart;