import { useState, useEffect } from 'react'
import './App.css'
import { csv, arc, pie } from 'd3'

const csvUrl = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv"
const width = 960
const height = 500
const centerX = width / 2
const centerY = height / 2

const App = () => {
  const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2)


  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData)
      .catch(e => console.log(e))
  }, [])

  if (!data) {
    return <pre>'Loading....'</pre>;
  }
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {pie()
        .value(1)(data).map((d,i) => (
          <path key={i} fill={d.data['RGB hex value']} d={pieArc(d)}
          />
        ))}
      </g>
    </svg>
  );
}

export default App;
