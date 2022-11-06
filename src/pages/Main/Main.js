import React, { useEffect } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import Chart from './components/Chart';
import { Chart as ChartJS } from 'chart.js/auto';
import { getTrendSet, getChannelSet } from '../../api/api';
import { useDispatch } from 'react-redux';
import { getBuckets, getTrands } from '../../store/action';
import Calendar from './components/Calendar';
import { useState } from 'react';
import Selecter from './components/Selecter';

const Main = () => {
  const [newResult, setNewResult] = useState([]);
  const [selectors, setSelectores] = useState({ a: 'roas', b: 'cost' });
  const [rangs, setRangs] = useState(7);
  const dispatch = useDispatch();
  const fechDate = () => {
    getTrendSet().then(({ data }) => {
      dispatch(getBuckets(data.report.daily));
    });
    getChannelSet().then(({ data }) => {
      dispatch(getTrands(data));
    });
  };

  useEffect(() => {
    fechDate();
  }, []);

  return (
    <>
      <PageTitle>
        <h1>대시보드</h1>

        <Calendar setNewResult={setNewResult} setRangs={setRangs} />
      </PageTitle>
      <MainContainer>
        <DashboardBox>
          {LISTDATA.map((els, idx) => {
            return (
              <Card
                key={els + idx}
                title={els}
                persent="697%"
                subPersent="22%"
                newResult={newResult}
                rangs={rangs}
              />
            );
          })}
        </DashboardBox>
        <GraphBox>
          <Selecter setSelectores={setSelectores} selectors={selectors} />
          <Chart newResult={newResult} selectors={selectors} />
        </GraphBox>
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 240px);
`;

const DashboardBox = styled.div`
  margin: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GraphBox = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
`;

const LISTDATA = ['ROAS', '광고비', '노출수', '클릭수', '전환수', '매출'];

const PageTitle = styled.div`
  width: 100%;
  position: relative;
  h1 {
    font-size: 20px;
    line-height: 30px;
    padding: 10px 0;
    font-weight: 700;
  }
`;
