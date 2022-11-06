import { Select } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getAdListSelect } from '../../../store/action';

const Selecter = () => {
  const dispatch = useDispatch();

  const handleChange = value => {
    dispatch(getAdListSelect(value));
  };

  return (
    <Select
      defaultValue="all"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'all',
          label: '전체광고',
        },
        {
          value: 'active',
          label: '진행중',
        },
        {
          value: 'ended',

          label: '중단됨',
        },
      ]}
    />
  );
};

export default Selecter;
