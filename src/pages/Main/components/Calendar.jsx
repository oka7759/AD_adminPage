import React, { useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'moment/locale/ko';
import { ko } from 'date-fns/locale';
import { useDispatch, useSelector } from 'react-redux';
import { getDate, checkRangs, getPastDate } from '../../../store/action';
import moment from 'moment/moment';
import { result } from 'lodash';

const Calendar = ({ setNewResult }) => {
  const days = useSelector(state => state.date.value);
  const buckets = useSelector(state => state.buckets.value);
  const rangs = useSelector(state => state.rangs.value);

  const { start, end } = days;
  const dispatch = useDispatch();

  const Result = [];
  const pastResult = [];
  const ckeckdate = () => {
    buckets.map(els => {
      const selectDate = new Date(els.date);
      const startDate = new Date(start);
      const endDate = new Date(end);
      const pastStartDate = new Date(moment(start).subtract(rangs, 'days'));
      const pastEndDate = new Date(moment(end).subtract(rangs, 'days'));

      if (startDate <= selectDate && selectDate <= endDate) {
        Result.push(els);
      }

      if (pastStartDate <= selectDate && selectDate <= pastEndDate) {
        pastResult.push(els);
      }
      return [Result, pastResult];
    });
  };

  ckeckdate();

  useEffect(() => {
    setNewResult([...Result]);
    end &&
      start &&
      dispatch(
        checkRangs(
          Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24))
        )
      );
    pastResult && dispatch(getPastDate(pastResult));
  }, [days]);

  return (
    <Datepick>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selectsRange={true}
        startDate={start}
        endDate={end}
        locale={ko}
        disabledKeyboardNavigation
        onChange={update => {
          dispatch(getDate({ start: update[0], end: update[1] }));
        }}
        isClearable={true}
      />
    </Datepick>
  );
};

export default Calendar;
const Datepick = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  input {
    background-color: white;
    margin-right: 30px;
    border: 1px solid black;
    width: 200px;
  }
`;
