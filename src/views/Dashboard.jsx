import React from "react";
import {
  BackgroundDashboard,
} from "../styles/views/DashboardStyled";
import Theme from "../styles/Theme";
import KPI from "../components/KPI";
import { KPIContainer } from "../styles/KPI";
import { MdOutlineKingBed } from "react-icons/md";
import { BiCalendarCheck } from "react-icons/bi";
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";


const Dashboard = () => {
  return (
      <div>
          <Theme>
              <BackgroundDashboard>
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
              </BackgroundDashboard>
          </Theme>
      </div>
  );
};

export default Dashboard;
