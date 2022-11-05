import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'moment/locale/ko';
import { ko } from 'date-fns/locale';

const Calendar = () => {
  const today = new Date();
  const [days, setStart] = useState({ start: '', end: '' });
  const { start, end } = days;

  console.log(days);

  return (
    <Datepick>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selectsRange={true}
        startDate={start}
        endDate={end}
        minDate={today}
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
