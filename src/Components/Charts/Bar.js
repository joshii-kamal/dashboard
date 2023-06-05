import React,{useEffect, useState} from 'react'
import ReactApexChart from 'react-apexcharts';

function Bar({data,size}) {
    const [label,setLabel] = useState(data.map(item=>item.x))
    const [value,setValue] = useState(data.map(item=>item.y))
    useEffect(()=>{
        setLabel(data.map(item=>item.x))
        setValue(data.map(item=>item.y))
    },[data])
    const chartOptions = {
        tooltip: {
            theme: 'dark', // Set the tooltip theme to 'dark'
            style: {
              background: '#FF0000', // Set the background color of the tooltip
              color: '#FFFFFF', // Set the text color of the tooltip
            },
        },
        toolbar:{
            exportMenu : {
                color : "#da0204"
            }
        },
        xaxis: {
            categories: label,
            labels: {
                style: {
                    fontSize: '12px', // Adjust the font size
                    colors: "#FFFFFF", // Set the font color
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: ['#FFFFFF'],
                },
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '70%', // Adjust the width of the bars
                colors: {
                    ranges: [{
                    from: 0,
                    to: 10000,
                    color: '#FF0000', // Color for bars with value 0-30
                    }, {
                    from: 10001,
                    to: 50000,
                    color: '#00FFFF', // Color for bars with value 31-50
                    }, {
                    from: 50001,
                    to: 100000,
                    color: '#00008B', // Color for bars with value 51-100
                    },{
                        from: 10001,
                        to: 100000000,
                        color: '#0000FF', // Color for bars with value 51-100
                    }]
                }
            },
        },
    };
      
    const chartSeries = [
        {
            data: value,
        },
    ];

  return (
    <div className='barChart'>
        <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={size.height}
            width={size.width}
            
        />
    </div>
  )
}

export default Bar
