import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarWrap = () => {
  const [value, onChange] = useState<Value>(new Date(2024, 10, 16));

  return (
    <div>
      <Calendar showNavigation={false} calendarType="gregory" value={value} />
    </div>
  );
};

export default CalendarWrap;
