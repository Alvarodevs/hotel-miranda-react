import React from "react";
import {
  BackgroundDashboard,
} from "../styles/views/DashboardStyled";
import Theme from "../styles/Theme";
import KPI from "../components/KPI";
import { KPIContainer } from "../styles/KPI";
import { MdOutlineKingBed } from "react-icons/md";
import { BiCalendarCheck } from "react-icons/bi";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsBoxArrowInLeft } from "react-icons/bs";


const Dashboard = () => {
  return (
      <div>
          <Theme>
              <BackgroundDashboard>
                  <KPIContainer>
                      <KPI
                          icon={<MdOutlineKingBed />}
                          amount={5555}
                          text={"New boret"}
                      ></KPI>
                      <KPI
                          icon={<BiCalendarCheck />}
                          amount={5555}
                          text={"New boret"}
                      ></KPI>
                      <KPI
                          icon={<BsBoxArrowInRight />}
                          amount={5555}
                          text={"New boret"}
                          className="arrow-right"
                      ></KPI>
                      <KPI
                          icon={<BsBoxArrowInLeft />}
                          amount={5555}
                          text={"New boret"}
                      ></KPI>
                  </KPIContainer>
              </BackgroundDashboard>
          </Theme>
      </div>
  );
};

export default Dashboard;
