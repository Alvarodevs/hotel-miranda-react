import React from "react";
import { BackgroundDashboard, ChartCalendarContainer, ChartContainer, CalendarContainer } from "../styles/views/DashboardStyled";
import Theme from "../styles/Theme";
import KPI from "../components/KPI";
import { KPIContainer } from "../styles/KPI";
import { MdOutlineKingBed } from "react-icons/md";
import { BiCalendarCheck } from "react-icons/bi";
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";
import MainContainer from "../components/MainContainer";
import Chart from "../components/Chart";
import Calendar from "../components/Calendar";
import { InfoContainer, InfoTitle, Square } from "../styles/views/DashboardStyled";

const Dashboard = () => {
   return (
      <MainContainer>
         <KPIContainer>
            <KPI
               icon={<MdOutlineKingBed />}
               amount={8461}
               text={"New booking"}
            ></KPI>
            <KPI
               icon={<BiCalendarCheck />}
               amount={963}
               text={"Scheduled Room"}
            ></KPI>
            <KPI
               icon={<BsBoxArrowInRight />}
               amount={753}
               text={"Check In"}
               className="arrow-right"
            ></KPI>
            <KPI
               icon={<BsBoxArrowInLeft />}
               amount={516}
               text={"Check Out"}
            ></KPI>
         </KPIContainer>
         <ChartCalendarContainer>
            <CalendarContainer>
               <Calendar />
            </CalendarContainer>
            <ChartContainer id="d3Parent">
               <InfoContainer>
                  <InfoTitle>
                     <Square color="var(--color-red)" />
                     Sales
                  </InfoTitle>
                  <InfoTitle>
                     <Square color="var(--color-greenGrey)" />
                     Ocuppancy
                  </InfoTitle>
               </InfoContainer>
               <Chart />
            </ChartContainer>
         </ChartCalendarContainer>
      </MainContainer>
   );
};

export default Dashboard;
