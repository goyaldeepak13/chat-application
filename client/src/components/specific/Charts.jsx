import React from 'react'
import { Line, Doughnut} from "react-chartjs-2"
import {Chart as Chartjs,
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
    plugins,
    scales,
} from "chart.js"
 
 
import {purple, lightpurple, orange, lightOrange } from '../../constants/color';
import { getLast7days } from '../../lib/features';

Chartjs.register(
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
);
const labels = getLast7days()

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },

    
        scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            }
        }
        }
    
}
const LineChart = ({value = []}) => {
    const data = {
        labels,
        datasets: [
            {
                data:value,
                label: "Revenue",
                fill: true,
                backgroundColor: lightpurple,
                borderColor:   purple
             
            },
            
        ]
    };
  return (
     <Line data={data} options={lineChartOptions} />
  )
}
const doughnutChartOptions = {
    responsive: true,
    plugins:{
        legend:{
            display: true,
        },
         
    },
    cutout: 120, // more value of cutout more  dougnut chart will be more thin
}

const DoughnutChart = ({value = [],labels = []}) => {
    const data = {
        labels,
        datasets: [
            {
                data:value,
                // label: "Total Chats vs Groups Chats", 
                backgroundColor: [lightpurple, lightOrange],
                hoverBackgroundColor: [purple, orange],
                borderColor:   [purple, orange],
                offset: 20,
             
            },
            
        ],
    };
    // console.log(data.labels)
   return <Doughnut 
   style={{zIndex: 1}}
   data={data}
    options={doughnutChartOptions}/>
  }

export {LineChart, DoughnutChart}