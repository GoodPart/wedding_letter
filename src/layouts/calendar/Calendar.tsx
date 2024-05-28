import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarWrap = () => {
  const [value, onChange] = useState<Value>(new Date(2024, 10, 16));

  return (
    <CalendarWrapper>
      <Calendar showNavigation={false} calendarType="gregory" value={value} />
    </CalendarWrapper>
  );
};

export default CalendarWrap;

const CalendarWrapper = styled.div`
  display: block;

  * {
    text-decoration: none;
  }
  .react-calendar__month-view__weekdays {
    font-size: 14px;
  }
  .react-calendar__month-view__days__day:not(
      .react-calendar__month-view__days__day--weekend
    ) {
    color: #544f4f;
    /* color: #d10000; */
  }
  .react-calendar__tile--active {
    background-color: coral;
    border-radius: 30px;
    font-weight: 900;
  }
`;
