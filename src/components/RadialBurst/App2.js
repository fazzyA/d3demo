import { useState, useEffect } from 'react'
import './App.css'
import * as d3 from 'd3'
import { message } from './Message'

const csvUrl = "https://gist.githubusercontent.com/Sir-Unkie/8e7a83acaab32c3f6aa6224aea3c3b6c/raw/2179315d0abb1e2dfdaea0e39b19080b0e1a53ca/" 

function App2() {


  const [data, setData] = useState(null)

  useEffect(() => {
    d3.csv(csvUrl).then(data => setData(data))
    .catch(e=>console.log(e))
  }, [])
  console.log(data)

  if(!data) return 'Loading....'
  return (
    <div className="App">
      <div>{message(data)}</div>
      {data.map(d=>(
        <div style={{
          backgroundColor: d['RGB hex value'],
          width: 960,
          height:5
        }}/>
      ))}
    </div>
  );
}

export default App2;
