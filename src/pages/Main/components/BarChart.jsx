import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const Chart = () => {
  const trands = useSelector(state => state.trands.value);

  const newResult = {
    google: [0, 0, 0],
    naver: [0, 0, 0],
    kakao: [0, 0, 0],
    facebook: [0, 0, 0],
  };
  const resultDate = () => {
    for (let i = 0; i < trands.length; i++) {
      if (trands[i].channel === 'google') {
        newResult.google[0] = newResult.google[0] + trands[i].cpc;
        newResult.google[1] = newResult.google[1] + trands[i].cost;
        newResult.google[2] = newResult.google[2] + trands[i].click;
      } else if (trands[i].channel === 'naver') {
        newResult.naver[0] = newResult.naver[0] + trands[i].cpc;
        newResult.naver[1] = newResult.naver[1] + trands[i].cost;
        newResult.naver[2] = newResult.naver[2] + trands[i].click;
      } else if (trands[i].channel === 'kakao') {
        newResult.kakao[0] = newResult.kakao[0] + trands[i].cpc;
        newResult.kakao[1] = newResult.kakao[1] + trands[i].cost;
        newResult.kakao[2] = newResult.kakao[2] + trands[i].click;
      } else if (trands[i].channel === 'facebook') {
        newResult.facebook[0] = newResult.facebook[0] + trands[i].cpc;
        newResult.facebook[1] = newResult.facebook[1] + trands[i].cost;
        newResult.facebook[2] = newResult.facebook[2] + trands[i].click;
      }
    }

    return newResult;
  };
  resultDate();

  const data = {
    labels: ['클릭당 지출비', '비용', '클릭'],
    datasets: [
      {
        label: 'google',
        data: [newResult.google[0], newResult.google[1], newResult.google[2]],
        backgroundColor: '#AC8AF8',
      },
      {
        label: 'naver',
        data: [newResult.naver[0], newResult.naver[1], newResult.naver[2]],
        backgroundColor: '#85DA47',
      },
      {
        label: 'kakao',
        data: [newResult.kakao[0], newResult.kakao[1], newResult.kakao[2]],
        backgroundColor: 'yellow',
      },
      {
        label: 'facebook',
        data: [
          newResult.facebook[0],
          newResult.facebook[1],
          newResult.facebook[2],
        ],
        backgroundColor: '#4FADF7',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    plugins: { stacked100: { enable: true, individual: true } },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return <Bar type="bar" data={data} options={options} />;
};
export default Chart;
