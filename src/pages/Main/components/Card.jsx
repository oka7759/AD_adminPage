import React from 'react';
import styled from 'styled-components';

const Card = ({ title, persent, subPersent }) => {
  return (
    <CardItem>
      <h1>{title}</h1>
      <p>
        {persent} <span>{subPersent}</span>
      </p>
    </CardItem>
  );
};

export default Card;

const CardItem = styled.div`
  width: 33%;
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
