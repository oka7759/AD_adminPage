import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const Card = ({ title, subPersent, newResult, rangs }) => {
  const filter = DATA[title];
  const newArr = { click: 0, convValue: 0, cost: 0, cvr: 0, imp: 0, roas: 0 };
  const sum = () => {
    for (let i = 0; i < newResult.length; i++) {
      newArr.click += newResult[i].click;
      newArr.convValue += newResult[i].convValue;
      newArr.cost += newResult[i].cost;
      newArr.cvr += newResult[i].cvr;
      newArr.imp += newResult[i].imp;
      newArr.roas += newResult[i].roas;
    }
    return newArr;
  };

  sum();

  return (
    <CardItem>
      <h1>{title}</h1>
      <p>
        {title === 'ROAS'
          ? `${Math.floor(newArr[filter] / rangs)} %`
          : Math.floor(newArr[filter]).toLocaleString('ko-KR')}

        <span>{subPersent}</span>
      </p>
    </CardItem>
  );
};

export default Card;

const CardItem = styled.div`
  width: 33%;
  max-width: 300px;
  padding: 18px 40px;
  background: #ffffff;
  border: 0.5px solid #edeff1;
  border-radius: 10px;
  margin: 5px 0px;
  h1 {
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    color: #94a2ad;
  }
  p {
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    span {
      font-size: 12px;
      float: right;
    }
  }
`;
const DATA = {
  ROAS: 'roas',
  광고비: 'cost',
  노출수: 'imp',
  클릭수: 'click',
  전환수: 'cvr',
  매출: 'convValue',
};
