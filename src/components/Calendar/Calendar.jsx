import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {CalendarContainer} from "./CalendarStyled";


const Calendar = () => {
   
	const getWeek = (day) => {
      const dayNumber = day.getDay() - 1 < 0 ? 6 : day.getDay() - 1;

      day.setDate(day.getDate() - dayNumber);
      const week = [];

      for (let i = 0; i < 7; i += 1) {
         const currentDay = new Date(day);
         week.push(currentDay);
         day.setDate(day.getDate() + 1);
      }

      return week;
   };

   const handleDateClick = (arg) => {
      const day = new Date(arg.dateStr);
      const week = getWeek(day);

      console.info(week);
   };
   return (
      <CalendarContainer>
         <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
         />
      </CalendarContainer>
   );
};

export default Calendar;