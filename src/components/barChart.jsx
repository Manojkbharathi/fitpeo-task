import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import dollar from '../assets/dollar.avif';
import chart from '../assets/round.jpg';
import { HiOutlineSearch } from 'react-icons/hi';
import img3d from '../assets/3d.jpg';
import img2 from '../assets/3d2.webp';
const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');
    const barColors = [
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
      'rgb(47, 7, 226)',
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
      'rgb(240, 241, 255)',
    ];

    chartInstance.current = new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: [
          'jan',
          'feb',
          'mar',
          'apr',
          'may',
          'june',
          'july',
          'aug',
          'sep',
          'otc',
          'nov',
          'dec',
        ],
        datasets: [
          {
            label: 'data',
            data: [8, 9, 2, 7, 9, 8, 3, 10, 1, 4, 2, 5],
            backgroundColor: barColors,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true, // Hide the X-axis
            beginAtZero: true,
            grid: {
              display: false, // Hide grid lines on the Y-axis
            },
          },
          y: {
            display: false,
            grid: {
              display: false, // Hide grid lines on the Y-axis
            },
          },
        },
        plugins: {
          legend: {
            display: true, // Hide the legend
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='canvas'>
      <div className='bar-container'>
        <div className='bar-flex'>
          <div className='canvas-header'>
            <div>
              <h2>Overview</h2>
              <p>Monthly Earning</p>
            </div>
            <div>
              <select name='' id=''>
                <option value=''>Quantity</option>
              </select>
            </div>
          </div>
          <canvas width={600} ref={chartRef}></canvas>
        </div>
        <div>
          <h3>Customers</h3>
          <p>customers that buy products</p>
          <img className='chart' src={chart} alt='' />
          <div className='search'>
            <HiOutlineSearch />
            <input type='text' placeholder='search' />
          </div>
          <table>
            <tr>
              <td>
                <p>stack</p>
              </td>
              <td>
                <p>price</p>
              </td>
              <td>
                <p>Total price</p>
              </td>
            </tr>
            <tr>
              <td>32 in stock</td>
              <td>$45.99</td>
              <td>20</td>
            </tr>
            <tr>
              <td>32 in stock</td>
              <td>$45.99</td>
              <td>20</td>
            </tr>
          </table>
        </div>
      </div>
      <div className='footer'>
        <h2>Product Sell</h2>
        <p>Product Name</p>
        <div>
          <div className='footer-flex'>
            <img className='footer-img' src={img3d} alt='' />
            <div>
              <h4>Abstract 3d</h4>
              <p>
                voluptatibus iusto distinctio nesciunt quod quasi nam quis vero,
                aliquam vitae! Officia, ab!
              </p>
            </div>
          </div>
          <div className='footer-flex'>
            <img className='footer-img' src={img2} alt='' />
            <div>
              <h4>Abstract 3d</h4>
              <p>
                voluptatibus iusto distinctio nesciunt quod quasi nam quis vero,
                aliquam vitae! Officia, ab!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
