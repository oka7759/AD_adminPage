import { Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const TableBoard = () => {
  const trands = useSelector(state => state.trands.value);

  const brand = useSelector(state => state.brand);
  const newResult = {
    google: [0, 0, 0, 0, 0],
    naver: [0, 0, 0, 0, 0],
    kakao: [0, 0, 0, 0, 0],
    facebook: [0, 0, 0, 0, 0],
  };
  const resultDate = () => {
    for (let i = 0; i < trands.length; i++) {
      if (trands[i].channel === 'google') {
        newResult.google[0] = newResult.google[0] + trands[i].cost;
        newResult.google[1] = newResult.google[1] + trands[i].convValue;
        newResult.google[2] = newResult.google[2] + trands[i].roas;
        newResult.google[3] = newResult.google[3] + trands[i].imp;
        newResult.google[4] = newResult.google[4] + trands[i].click;
      } else if (trands[i].channel === 'naver') {
        newResult.naver[0] = newResult.naver[0] + trands[i].cost;
        newResult.naver[1] = newResult.naver[1] + trands[i].convValue;
        newResult.naver[2] = newResult.naver[2] + trands[i].roas;
        newResult.naver[3] = newResult.naver[3] + trands[i].imp;
        newResult.naver[4] = newResult.naver[4] + trands[i].click;
      } else if (trands[i].channel === 'kakao') {
        newResult.kakao[0] = newResult.kakao[0] + trands[i].cost;
        newResult.kakao[1] = newResult.kakao[1] + trands[i].convValue;
        newResult.kakao[2] = newResult.kakao[2] + trands[i].roas;
        newResult.kakao[3] = newResult.kakao[3] + trands[i].imp;
        newResult.kakao[4] = newResult.kakao[4] + trands[i].click;
      } else if (trands[i].channel === 'facebook') {
        newResult.facebook[0] = newResult.facebook[0] + trands[i].cost;
        newResult.facebook[1] = newResult.facebook[1] + trands[i].convValue;
        newResult.facebook[2] = newResult.facebook[2] + trands[i].roas;
        newResult.facebook[3] = newResult.facebook[3] + trands[i].imp;
        newResult.facebook[4] = newResult.facebook[4] + trands[i].click;
      }
    }

    return newResult;
  };
  resultDate();

  const columns = [
    {
      title: '검색플렛폼',
      dataIndex: 'name',
    },
    {
      title: '광고비',
      dataIndex: 'cost',
      sorter: {
        compare: (a, b) => a.cost - b.cost,
        multiple: 3,
      },
    },
    {
      title: '매출',
      dataIndex: 'convValue',
      sorter: {
        compare: (a, b) => a.convValue - b.convValue,
        multiple: 2,
      },
    },
    {
      title: 'ROAS',
      dataIndex: 'roas',
      sorter: {
        compare: (a, b) => a.roas - b.roas,
        multiple: 1,
      },
    },
    {
      title: '노출수',
      dataIndex: 'imp',
      sorter: {
        compare: (a, b) => a.imp - b.imp,
        multiple: 1,
      },
    },
    {
      title: '클릭수',
      dataIndex: 'click',
      sorter: {
        compare: (a, b) => a.click - b.click,
        multiple: 1,
      },
    },
  ];
  const data = [
    {
      key: '1',
      name: '구글',
      cost: newResult.google[0],
      convValue: newResult.google[1],
      roas: newResult.google[2],
      imp: newResult.google[3],
      click: newResult.google[4],
    },
    {
      key: '2',
      name: '네이버',
      cost: newResult.naver[0],
      convValue: newResult.naver[1],
      roas: newResult.naver[2],
      imp: newResult.naver[3],
      click: newResult.naver[4],
    },
    {
      key: '3',
      name: '페이스북',
      cost: newResult.facebook[0],
      convValue: newResult.facebook[1],
      roas: newResult.facebook[2],
      imp: newResult.facebook[3],
      click: newResult.facebook[4],
    },
    {
      key: '4',
      name: '카카오',
      cost: newResult.kakao[0],
      convValue: newResult.kakao[1],
      roas: newResult.kakao[2],
      imp: newResult.kakao[3],
      click: newResult.kakao[4],
    },
    {
      key: '5',
      name: '총계 ',
      cost: newResult.kakao[0],
      convValue: newResult.kakao[1],
      roas: newResult.kakao[2],
      imp: newResult.kakao[3],
      click: newResult.kakao[4],
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={false}
    />
  );
};

export default TableBoard;
