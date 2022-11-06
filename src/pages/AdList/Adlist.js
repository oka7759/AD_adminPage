import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import AdListItem from './components/AdListItem';
import { getDataSet } from '../../api/api';
import Selecter from './components/Selecter';
import { useSelector } from 'react-redux';

const Adlist = () => {
  const [adList, setAdList] = useState([]);
  const adlists = useSelector(state => state.adListSelect.value);

  const fetchData = () => {
    getDataSet().then(({ data }) => {
      setAdList(data);
    });
  };
  const groupByData = _.groupBy(adList, 'status');
  useEffect(() => {
    fetchData();
  }, [adList, adlists]);
  return (
    <AdListContainer>
      <AdListheader />
      <Selecter />
      <AdListBox>
        {adlists === 'all' &&
          adList.map((aditem, idx) => {
            return (
              <AdListItem
                key={`aditem,${idx}`}
                aditem={aditem}
                adList={adList}
              />
            );
          })}
        {groupByData.active &&
          adlists === 'active' &&
          groupByData.active.map((aditem, idx) => {
            return (
              <AdListItem
                key={`aditem,${idx}`}
                aditem={aditem}
                adList={adList}
              />
            );
          })}
        {groupByData.ended &&
          adlists === 'ended' &&
          groupByData.ended.map((aditem, idx) => {
            return (
              <AdListItem
                key={`aditem,${idx}`}
                aditem={aditem}
                adList={adList}
              />
            );
          })}
      </AdListBox>
    </AdListContainer>
  );
};

export default Adlist;
const AdListContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 240px);
`;

const AdListheader = styled.div`
  width: 100%;
`;
const AdListBox = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
