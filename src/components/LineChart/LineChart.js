import React, { useEffect } from 'react';
import * as d3 from "d3";

// import './index.css';

function LineChart(props) {
  const { width, height } = props;
  // const data = [
  //   {date: new Date(2007, 3, 24), value: 93.24},
  //   {date: new Date(2007, 3, 25), value: 95.35},
  //   {date: new Date(2007, 3, 26), value: 98.84},
  //   {date: new Date(2007, 3, 27), value: 99.92},
  //   {date: new Date(2007, 3, 30), value: 99.80},
  //   {date: new Date(2007, 4,  1), value: 99.47},
  // ];
  // const line = d3.line()
  //   .x(d => x(d.date))
  //   .y(d => y(d.value));

const data = [[10, 60], [20, 70], [30, 80], [40, 100], [40, 100], [50, 120], [60, 200]];
  const line = d3.line()(data)

  return (
  <svg width={width} height={height}>
    <path d={line} fill={d3.schemeCategory10} />
  </svg>
  );
}

export default LineChart;