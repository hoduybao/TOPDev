import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(...registerables);

const StatChart = () => {
  const labels = [
    'Campaign is opened',
    'Reception cv',
    'Job postings are displayed',
    'New application cv',
  ];

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'TopDev Recruitment Stats',
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'value of amount',
        data: [150, 200, 3, 50],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default StatChart;
