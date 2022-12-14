import React from "react";
import { KPICard, IconContainer, Icon, InfoContainer, Amount, Text } from "./KPIStyled";

interface IKPIProps {
	icon: React.ReactNode,
	amount: number,
	text: string,
	className?: string
}

const KPI = ({ icon, amount, text } :IKPIProps) :JSX.Element => {
    return (
        <KPICard>
            <IconContainer>
                <Icon className="icon">{icon} </Icon>
            </IconContainer>
            <InfoContainer>
                <Amount>{amount}</Amount>
                <Text>{text}</Text>
            </InfoContainer>
        </KPICard>
    );
};

export default KPI;
