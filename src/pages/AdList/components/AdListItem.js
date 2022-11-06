import React from 'react';
import styled from 'styled-components';
import moment from 'moment/moment';
import ModalWindow from './ModalWindow';
import { isIdx, isShow } from '../../../store/action';
import { useDispatch } from 'react-redux';

const AdListItem = ({ aditem, adList }) => {
  const { adType, title, budget, status, report, startDate, id } = aditem;
  const dispatch = useDispatch();

  return (
    <AdItem>
      <AdItemHead>{`${adType}_${title}`}</AdItemHead>
      <AdItemBody>
        <tr>
          <th>상태</th>
          <td>{STATUSDATA[status]}</td>
        </tr>
        <tr>
          <th>광고생성일</th>
          <td>{moment(startDate).format('YY/MM/DD')}</td>
        </tr>
        <tr>
          <th>일 희망 예산</th>
          <td>{budget.toLocaleString('ko-KR')} 원</td>
        </tr>
        <tr>
          <th>광고 수익률</th>
          <td>{report.roas}%</td>
        </tr>
        <tr>
          <th>매출</th>
          <td>{report.convValue.toLocaleString('ko-KR')} 원</td>
        </tr>
        <tr>
          <th>광고비용</th>
          <td>{report.cost.toLocaleString('ko-KR')} 원</td>
        </tr>
      </AdItemBody>
      <AdItemBottom
        onClick={() => {
          dispatch(isShow());
          dispatch(isIdx(id - 1));
        }}
      >
        수정하기
      </AdItemBottom>

      <ModalWindow adList={adList} />
    </AdItem>
  );
};

export default AdListItem;

const AdItem = styled.div`
  max-width: 350px;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
`;

const AdItemHead = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin: 20px 0;
`;

const AdItemBody = styled.table`
  width: 100%;
  border-top: 1px solid #edeff1;
  tr {
    text-align: left;
    border-bottom: 1px solid #edeff1;
    font-family: 'Roboto';
    font-style: normal;

    th {
      font-weight: 500;
      font-size: 12px;
      line-height: 30px;
      color: #94a2ad;
    }
    td {
      font-weight: 700;
      font-size: 12px;
      line-height: 30px;
      color: #3a474e;
    }
  }
`;
const AdItemBottom = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #3a474e;
  background: #ffffff;

  border: 1px solid #d1d8dc;
  border-radius: 10px;
  padding: 12px 20px;
  margin-top: 20px;
`;

const STATUSDATA = { active: '진행중', ended: '종료' };
