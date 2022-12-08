import styled from "styled-components";


export const CalendarContainer = styled.div`
   width: 100%;
   height: 100%;
   background-color: var(--color-white);
   box-shadow: 0px 4px 4px var(--color-grey05);
   border-radius: 20px;
   padding: 20px;
   margin-bottom: 40px;

   // Custom calendar styles
   .fc-theme-standard td,
   .fc-theme-standard th,
   .fc-theme-standard,
   .fc-scrollgrid {
      border: 0px;
      font-family: var(--font-main);
      overflow: hidden;
   }
   .hTgEHV .fc-theme-standard td {
      cursor: pointer;
      padding: 5px 10px;
      background-color: blue;
   }

   .fc .fc-daygrid-day-top {
      justify-content: center;
   }
   .fc .fc-daygrid-day-frame {
      border: 1px solid red;
      width: 40px;
      min-height: 20px;
		border-radius: 10px;
      margin: auto;
   }

   .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
      position: relative;
      min-height: 1em;
      display: none;
   }

   .fc .fc-button-primary,
   .fc .fc-button-primary:focus,
   .fc .fc-button-primary:active,
   .fc .fc-button-primary:active:focus {
      color: var(--color-gray);
      background: none;
      border: none;
      box-shadow: none;
   }
   .fc .fc-daygrid-day.fc-day-today {
      background-color: var(--color-greenDark);
      border-radius: 20px;
      color: var(--color-white);
      min-height: 10px;
   }
`;
