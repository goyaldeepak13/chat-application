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
 
 
import {purple, lightpurple } from '../../constants/color';

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
const LineChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data:[1,2,34,6],
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
const DoughnutChart = () => {
    return <div>chart</div>
  }

export {LineChart, DoughnutChart}