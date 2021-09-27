import React from 'react'
import { pie } from 'd3'
import Pie from './PieSVG';

const PieChart = () => {
    const data1 = [1, 1, 2, 3, 5, 8, 13, 21];
    const data = [
        { "data": 1, "value": 1, "index": 6},
        { "data": 1, "value": 1, "index": 7},
        { "data": 2, "value": 2, "index": 5},
        { "data": 3, "value": 3, "index": 4},
        { "data": 5, "value": 5, "index": 3},
        { "data": 8, "value": 8, "index": 2},
        { "data": 13, "value": 13, "index": 1},
        { "data": 21, "value": 21, "index": 0}
    ]

    // const arcs = pie().value(d=>d)(data1);
    // console.log(arcs);
    return (
<Pie
          data={data}
          width={500}
          height={500}
          innerRadius={0}
          outerRadius={100}
        />    )
}

export default PieChart
