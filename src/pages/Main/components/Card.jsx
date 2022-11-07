import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Card = ({ title, subPersent, newResult }) => {
  const rangs = useSelector(state => state.rangs.value);
  const past = useSelector(state => state.pastDate.value);
  const filter = DATA[title];
  const pastArrnewArr = {
    click: 0,
    convValue: 0,
    cost: 0,
    cvr: 0,
    imp: 0,
    roas: 0,
  };
  const newArr = { click: 0, convValue: 0, cost: 0, cvr: 0, imp: 0, roas: 0 };
  const pastArr = { click: 0, convValue: 0, cost: 0, cvr: 0, imp: 0, roas: 0 };
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

  const pastsum = () => {
    for (let i = 0; i < past.length; i++) {
      pastArr.click += past[i].click;
      pastArr.convValue += past[i].convValue;
      pastArr.cost += past[i].cost;
      pastArr.cvr += past[i].cvr;
      pastArr.imp += past[i].imp;
      pastArr.roas += past[i].roas;
    }
    return pastArr;
  };
  pastsum();

  return (
    <CardItem>
      <h1>{title}</h1>
      <p>
        {title === 'ROAS'
          ? `${Math.floor(newArr[filter] / rangs)} %`
          : Math.floor(newArr[filter]).toLocaleString('ko-KR')}

        <span>
          {title === 'ROAS' &&
            `${Math.floor((newArr[filter] - pastArr[filter]) / rangs)} %`}
          {title === '광고비' &&
            `${Math.floor((newArr[filter] - pastArr[filter]) / rangs)} `}
          {title === '노출수' &&
            `${Math.floor((newArr[filter] - pastArr[filter]) / rangs)} `}
          {title === '클릭수' &&
            `${Math.floor((newArr[filter] - pastArr[filter]) / rangs)} `}
          {title === '전환수' &&
            `${Math.floor((newArr[filter] - pastArr[filter]) / rangs)} `}
          {title === '매출' &&
            `${Math.floor((newArr[filter] - pastArr[filter]) / rangs)} `}
        </span>
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
