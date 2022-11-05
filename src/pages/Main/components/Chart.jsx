import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const Chart = () => {
  const buckets = useSelector(state => state.buckets.value);
  const dateList = [];
  const roasList = [];
  const clickList = [];

  const resultDate = () => {
    for (let i = 0; i < buckets.length; i++) {
      dateList.push(buckets[i].date);
      clickList.push({ x: buckets[i].date, y: buckets[i].click });
      roasList.push({ x: buckets[i].date, y: buckets[i].roas });
    }
    return [clickList, roasList, dateList];
  };
  resultDate();

  const data = {
    labels: dateList,
    datasets: [
      {
        type: 'line',
        label: 'Roas',
        borderColor: '#4FADF7',
        borderWidth: 2,
        data: roasList,
      },
      {
        type: 'line',
        label: 'click',
        borderColor: '#85DA47',
        borderWidth: 2,
        data: clickList,
      },
    ],
  };

  const options = {
    spanGaps: true,
    maxBarThickness: 30,
    grouped: true,
    interaction: {
      mode: 'index',
    },
    plugins: {
      title: {
        display: true,
        font: {
          family: "'Noto Sans KR', 'serif'",
          size: '20',
        },
      },
      legend: {
        labels: {
          usePointStyle: true,
          padding: 5,
          font: {
            family: "'Noto Sans KR', 'serif'",
            lineHeight: 2,
            size: '12',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(48, 48, 48, 0.8)',
        padding: 10,
        bodyFont: {
          font: {
            family: "'Noto Sans KR', sans-serif",
          },
        },
        usePointStyle: true,
        filter: item => item.parsed.y !== null,
        callbacks: {
          title: context => context[0].label,
          label: context => {
            let label = context.dataset.label + '' || '';
            return context.parsed.y !== null
              ? label + ': ' + context.parsed.y + ''
              : null;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: true,
          tickLength: 4,
          color: '#E2E2E230',
        },
        axis: 'x',
        position: 'bottom',
        ticks: {
          minRotation: 45,
          padding: 5,
        },
      },
      y: {
        type: 'linear',
        grid: {
          color: '#E2E2E230',
        },
        axis: 'y',
        display: true,
        position: 'left',
        title: {
          display: true,
          align: 'end',
          color: '#808080',
          font: {
            size: 12,
            family: "'Noto Sans KR', sans-serif",
            weight: 300,
          },
          text: '단위 ',
        },
      },
    },
  };

  return <Line type="line" data={data} options={options} />;
};
export default Chart;
