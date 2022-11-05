import React, { useEffect } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import Chart from './components/Chart';
import BarChart from './components/BarChart';
import { Chart as ChartJS } from 'chart.js/auto';
import { getTrendSet, getChannelSet } from '../../api/api';
import { useDispatch } from 'react-redux';
import { getBuckets, getTrands } from '../../store/action';
import TableBoard from './components/TableBoard';

const Main = () => {
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
    <MainContainer>
      <DashboardBox>
        {LISTDATA.map((els, idx) => {
          return (
            <Card key={els + idx} title={els} persent="697%" subPersent="22%" />
          );
        })}
      </DashboardBox>
      <GraphBox>
        <Chart />
      </GraphBox>
      <GraphBox>
        <BarChart />
      </GraphBox>
      <TableBoard />
    </MainContainer>
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
