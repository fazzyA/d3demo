import * as d3 from 'd3'

export const message = data => {
    let msg ='Total data weight: ';
    msg = msg + Math.round(d3.csvFormat(data).length/1024) + ' kb\n'
    msg = msg + data.length + ' rows\n'
    msg = msg + data.columns.length + ' columns\n'
    return msg
  }
  