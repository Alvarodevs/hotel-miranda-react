import React from "react";
import { KPICard, IconContainer, InfoContainer, Amount, Text } from "../../styles/KPI";
import { MdOutlineKingBed } from "react-icons/md";

const KPI = ({ icon, amount, text }) => {
    return (
        <KPICard>
            <IconContainer>
                <div className="icon">{icon} </div>
            </IconContainer>
            <InfoContainer>
                <Amount>{amount}</Amount>
                <Text>{text}</Text>
            </InfoContainer>
        </KPICard>
    );
};

export default KPI;
