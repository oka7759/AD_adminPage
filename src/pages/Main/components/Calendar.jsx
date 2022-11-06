import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'moment/locale/ko';
import { ko } from 'date-fns/locale';
import { useSelector } from 'react-redux';

const Calendar = ({ setNewResult, setRangs }) => {
  const [days, setStart] = useState({
    start: new Date('2022-02-01'),
    end: new Date('2022-02-07'),
  });
  const { start, end } = days;

  const buckets = useSelector(state => state.buckets.value);
  const Result = [];
  const ckeckdate = () => {
    buckets.map(els => {
      const selectDate = new Date(els.date);
      const startDate = new Date(start);
      const endDate = new Date(end);
      if (startDate <= selectDate && selectDate <= endDate) {
        Result.push(els);
      }
      return Result;
    });
  };

  ckeckdate();

  useEffect(() => {
    setNewResult([...Result]);
    end &&
      start &&
      setRangs(
        Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24))
      );
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
          setStart({ start: update[0], end: update[1] });
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
