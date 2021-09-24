import { useState, useEffect } from 'react'
import './App.css'
import * as d3 from 'd3'

const csvUrl = "https://gist.githubusercontent.com/Sir-Unkie/8e7a83acaab32c3f6aa6224aea3c3b6c/raw/2179315d0abb1e2dfdaea0e39b19080b0e1a53ca/" 

const message = data => {
  let msg ='Total data weight: ';
  msg = msg + Math.round(d3.csvFormat(data).length/1024) + 'kb'
  return msg
}
function App() {


  const [data, setData] = useState(null)

  useEffect(() => {
    d3.csv(csvUrl).then(data => setData(data))
    .catch(e=>console.log(e))
  }, [])
  console.log(data)
  return (
    <div className="App">
      {data ? message(data) : 'loading'}
    </div>
  );
}

export default App;
