import React,{useEffect,useState} from 'react'
import ReactApexChart from 'react-apexcharts';

function PolarArea({data,size}) {
    const [label,setLabel] = useState(data.map(item=>item.x))
    const [value,setValue] = useState(data.map(item=>item.y))
    useEffect(()=>{
        setLabel(data.map(item=>item.x))
        setValue(data.map(item=>item.y))
    },[data])
    
    const chartOptions = {
        labels: {
            style: {
              colors: '#da0204', // Specify colors for the labels
            },
          },
        chart: {
            type: 'polarArea',
            background: '#0a0f1d', // Background color of the chart
            foreColor: '#FFFFFF', // Color of the text and chart elements
            fontFamily: 'Arial, sans-serif',
        },
        series: value,
        labels: label,
        stroke: {
            width: 0, // Width of the stroke around each data point
        },
        fill: {
            opacity: 0.9, // Opacity of the data points
        },
    };
  return (
    <div className='barChart'>
        <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="polarArea"
            height={size.height}
            width={size.width}
        />
    </div>
  )
}

export default PolarArea
