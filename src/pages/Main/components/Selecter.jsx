import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

const Selecter = ({ setSelectores, selectors }) => {
  const handleChangeA = value => {
    setSelectores({ ...selectors, a: value });
  };
  const handleChangeB = value => {
    setSelectores({ ...selectors, b: value });
  };

  return (
    <SelectBox>
      <Select
        defaultValue={selectors.a}
        style={{
          width: 120,
        }}
        onChange={handleChangeA}
        options={[
          {
            value: 'roas',
            label: 'ROAS',
            disabled: selectors.b === 'roas' ? true : false,
          },
          {
            value: 'cost',
            label: '광고비',
            disabled: selectors.b === 'cost' ? true : false,
          },
          {
            value: 'conv',
            label: '노출수',
            disabled: selectors.b === 'conv' ? true : false,
          },
          {
            value: 'click',
            label: '클릭수',
            disabled: selectors.b === 'click' ? true : false,
          },
          {
            value: 'cvr',
            label: '전환수',
            disabled: selectors.b === 'cvr' ? true : false,
          },
          {
            value: 'convValue',
            label: '매출',
            disabled: selectors.b === 'convValue' ? true : false,
          },
        ]}
      />
      <Select
        defaultValue={selectors.b}
        style={{
          width: 120,
        }}
        onChange={handleChangeB}
        options={[
          {
            value: 'roas',
            label: 'ROAS',
            disabled: selectors.a === 'roas' ? true : false,
          },
          {
            value: 'cost',
            label: '광고비',
            disabled: selectors.a === 'cost' ? true : false,
          },
          {
            value: 'conv',
            label: '노출수',
            disabled: selectors.a === 'conv' ? true : false,
          },
          {
            value: 'click',
            label: '클릭수',
            disabled: selectors.a === 'click' ? true : false,
          },
          {
            value: 'cvr',
            label: '전환수',
            disabled: selectors.a === 'cvr' ? true : false,
          },
          {
            value: 'convValue',
            label: '매출',
            disabled: selectors.a === 'convValue' ? true : false,
          },
        ]}
      />
    </SelectBox>
  );
};

export default Selecter;

const SelectBox = styled.div``;
