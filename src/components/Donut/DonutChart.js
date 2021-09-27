import React from 'react'
import { pie } from 'd3'
import Donut from './DonutSVG';

const DonutChart = () => {
    const data1 = [1, 1, 2, 3, 5, 8, 13, 21];
    const data = [
        { "data": 1, "value": 1, "index": 6, "startAngle": 6.050474740247008, "endAngle": 6.166830023713296, "padAngle": 0 },
        { "data": 1, "value": 1, "index": 7, "startAngle": 6.166830023713296, "endAngle": 6.283185307179584, "padAngle": 0 },
        { "data": 2, "value": 2, "index": 5, "startAngle": 5.817764173314431, "endAngle": 6.050474740247008, "padAngle": 0 },
        { "data": 3, "value": 3, "index": 4, "startAngle": 5.468698322915565, "endAngle": 5.817764173314431, "padAngle": 0 },
        { "data": 5, "value": 5, "index": 3, "startAngle": 4.886921905584122, "endAngle": 5.468698322915565, "padAngle": 0 },
        { "data": 8, "value": 8, "index": 2, "startAngle": 3.956079637853813, "endAngle": 4.886921905584122, "padAngle": 0 },
        { "data": 13, "value": 13, "index": 1, "startAngle": 2.443460952792061, "endAngle": 3.956079637853813, "padAngle": 0 },
        { "data": 21, "value": 21, "index": 0, "startAngle": 0.000000000000000, "endAngle": 2.443460952792061, "padAngle": 0 }
    ]

    const arcs = pie()(data);
    console.log(arcs);
    return (
<Donut
          data={data}
          width={500}
          height={500}
          innerRadius={80}
          outerRadius={200}
        />    )
}

export default DonutChart
