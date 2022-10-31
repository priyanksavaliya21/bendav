import React, { useState } from 'react';
import AppTable from './AppTable';
import r_tabel_arrow from '../assets/images/Dashboard/r_tabel_arrow.svg';
import l_tabel_arrow from '../assets/images/Dashboard/l_tabel_arrow.svg';
import r_tabel_arrow_hover from '../assets/images/Dashboard/r_tabel_arrow_hover.svg';
import l_tabel_arrow_hover from '../assets/images/Dashboard/l_tabel_arrow_hover.svg';

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

const Dashboard = () => {

  // chart_line 1
  const [linedata] = useState({
    labels: ["12", "30", "16", "02", "19", "08", "26", "12", "29", "16", "02", "20", "08", "26", "12", "30", "16"],
    datasets: [
      {
        label: "First dataset",
        data: [11, 13, 15, 18, 16, 14, 15, 15, 15, 12, 10, 16, 12, 10, 12, 13, 14],
        fill: "start",
        backgroundColor: (context: ScriptableContext <line>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(30, 0, 0, 250);
          gradient.addColorStop(0, "#A535D9");
          gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
          return gradient;
        },
        borderColor: "#AA14F0",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.5,
      }
    ]
  })

  const options_Line = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          barPercentage: 1,
          borderColor: '#30374B',
        },
        ticks: {
          font: {
            size: 16,
            weight: 500,
            color: "#fff",
          }
        },
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
      },
    },
  };

  // chart_line 2
  const [linedata2] = useState({
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "First dataset",
        data: [50, 100, 140, 160, 200, 150, 100, 110, 50, 100],
        fill: "start",
        backgroundColor: (context: ScriptableContext<line>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(30, 0, 0, 250);
          gradient.addColorStop(0, "#A535D9");
          gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
          return gradient;
        },
        borderColor: "#AA14F0",
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        pointRadius: 5,
        tension: 0,
      }
    ]
  })

  const options_Line2 = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
          barPercentage: 1,
          borderColor: '#30374B',
        },
        ticks: {
          font: {
            size: 16,
            weight: 500,
            color: "#fff",
          }
        },
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <div className='Dashboard_main_wrapper'>
        <div className='app_page '>
          <h2 className='Dashboard_heading'>MercuryFinance</h2>
          <div className='chart_row'>
            <div className='chart_items'>
              <div className='chart_1'>
                <div className='line_block'>
                  <Line data={linedata} options={options_Line} id="chart"></Line>
                </div>
              </div>
              <div className='chart_2'>
                <div className='line_block'>
                  <Line data={linedata2} options={options_Line2} id="chart"></Line>
                </div>
              </div>
            </div>
          </div>
          <div className='top_tokens_block'>
            <div className='top_tokens_heading'>
              <h2 className='Dashboard_heading'>Top Tokens</h2>
            </div>
            <div className='apptable_block'>
              <AppTable />
              <div className='table_arrow'>
                <div className='hover_arrow'>
                  <img src={l_tabel_arrow} alt="" />
                  <img src={l_tabel_arrow_hover} alt="" />
                </div>
                <span>Page 1 of 4</span>
                <div className='hover_arrow'>
                  <img src={r_tabel_arrow} alt="" />
                  <img src={r_tabel_arrow_hover} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;