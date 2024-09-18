import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

import data from "../../data.json";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarWrap = () => {
  const { weddingInfo } = data;
  const y = weddingInfo.year;
  const m = weddingInfo.month;
  const date = weddingInfo.date;
  const day = weddingInfo.day;
  const hours = weddingInfo.hours;
  const minutes = weddingInfo.minutes;
  const type = weddingInfo.type;

  const [value, onChange] = useState<Value>(new Date(y, m - 1, date));

  return (
    <CalendarWrapper>
      <span style={{ fontSize: 18, letterSpacing: 4, fontWeight: 700 }}>
        {`${y}.${m}.${date}`}
      </span>
      <br />
      {day}요일 {type} {hours}시 {minutes}분
      <br />
      <br />
      <Calendar
        showNavigation={false}
        formatDay={(locale, date) => dayjs(date).format("DD")}
        calendarType="gregory"
        value={value}
      />
    </CalendarWrapper>
  );
};

export default CalendarWrap;

const CalendarWrapper = styled.div`
  display: block;

  * {
    text-decoration: none;
    font-family: "Serif_KR_light";
  }
  *:not(abbr) {
    background-color: #f9f9f9;
  }
  .react-calendar {
    pointer-events: none;
  }
  .react-calendar__month-view__weekdays {
    font-size: 14px;
  }
  .react-calendar__month-view__days__day:not(
      .react-calendar__month-view__days__day--weekend
    ) {
    color: #544f4f;
  }
  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #d10000;
  }
  .react-calendar__tile--active {
    background-color: #f7a3a7;
    border-radius: 30px;
    font-weight: 900;
  }
`;
