import { useState, useEffect } from 'react'
import './App.css'
import { csv, arc, pie } from 'd3'
import { message } from './Message'

const csvUrl =
  'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width)

const App = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData)
      .catch(e => console.log(e))
  }, [])

  if (!data) {
    return <pre>'Loading....'</pre>;
  }
  const colorPie = pie().value(1);
console.log(data);
  return (
    <>
<h4>CSV CSS Color Data in form of Radial Burst Using D3</h4>
      <div>{message(data)}</div>
      <div>The data which is visualized below is <a href="https://gist.github.com/curran/b236990081a24761f7000567094914e0/">here</a></div>
<br></br>      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {colorPie(data).map(d => (
            <path fill={d.data['RGB hex value']} d={pieArc(d)} />
          ))}
        </g>
      </svg>
    </>);
}
// To compute the arcs manually (without d3.pie):
// data.map((d, i) => (
//   <path
//     fill={d['RGB hex value']}
//     d={pieArc({
//       startAngle: (i / data.length) * 2 * Math.PI,
//       endAngle: ((i + 1) / data.length) * 2 * Math.PI
//     })}
//   />
// ))

export default App;
