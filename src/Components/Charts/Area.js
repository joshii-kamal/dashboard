import React,{useEffect, useState} from 'react'
import ReactApexChart from 'react-apexcharts';

function Area({data,size}) {
    const [label,setLabel] = useState(data.map(item=>item.x))
    const [value,setValue] = useState(data.map(item=>item.y))
    useEffect(()=>{
        setLabel(data.map(item=>item.x))
        setValue(data.map(item=>item.y))
    },[data])
    var chartOptions = {
        tooltip: {
            theme: 'dark', // Set the tooltip theme to 'dark'
            style: {
              background: '#FF0000', // Set the background color of the tooltip
              color: '#FFFFFF', // Set the text color of the tooltip
            },
        },
        plotOptions: {
            bar: {
                show : false,
                isDumbbell: false,
                columnWidth: 5,
                dumbbellColors: [['#008FFB', '#00E396','#FF0000']]
            }
        },
        legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: label
        },
        fill: {
        type: 'gradient',
        gradient: {
            type: 'vertical',
            gradientToColors: ['#00E396'],
            inverseColors: true,
            stops: [0, 100]
        }
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
        categories: label,
        tickPlacement: 'on'
        },
        chart: {
            toolbar: {
              show: false, // Hide the toolbar
            },
            menu: {
              show: false, // Hide the menu options
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
            type="line"
            height={size.height}
            width={size.width}
        />
    </div>
  )
}

export default Area
