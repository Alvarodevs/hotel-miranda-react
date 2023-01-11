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

   .fc .fc-daygrid-day {
      width: 10px;
      min-height: 10px;
      border-radius: 10px;
      margin: auto;
   }

   .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
      position: relative;
      min-height: 0.5em;
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
      color: var(--color-white);
      /* width: 40px; */
      /* min-height: 10px; */
      border-radius: 10px;
      margin: auto;
   }



   /* .fc-toolbar-title {
      display: inline;
      font-size: 16px;
      font-weight: 400;
      margin: 0 15px;
   }
   #title-calendar {
      position: absolute;
      top: 5px;
      font-size: 16px;
      font-weight: 400;
   }
   .fc .fc-button-primary {
      color: #799283;
      background: none;
      border: none;
      &:active,
      &:focus,
      &:focus-visible {
         color: #799283;
         background: none;
         border: none;
         box-shadow: none;
      }
      &:active:focus {
         box-shadow: none;
      }
   }
   .fc .fc-col-header-cell-cushion {
      color: #799283;
      font-weight: 400;
   }
   .fc .fc-daygrid-day.fc-day-today,
   .fc-highlight {
      background: none;
   }
   .fc-theme-standard .fc-scrollgrid {
      border: none;
   }
   .fc-theme-standard td,
   .fc-theme-standard th {
      border: none;
      padding: 0 6px;
      cursor: pointer;
   }
   .fc .fc-daygrid-day-frame {
      height: 59px;
   }
   .fc .fc-daygrid-day-top {
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .fc .fc-daygrid-day-number {
      padding-top: 18px;
   }
   .fc .fc-scroller-liquid-absolute,
   .fc-scroller {
      overflow: hidden !important;
   }
   .fc .fc-bg-event {
      opacity: 1;
      border-radius: 12px;
   } */
`;
