import React from "react";
import {BiCheckCircle, BiXCircle} from "react-icons/bi";

import {
   ReviewCardContainer,
   Text,
   DataContainer,
   Img,
   NameAndTime,
   Name,
   Time,
   Buttons,
} from "./ReviewCardStyled";

const ReviewCard = (): JSX.Element => {
   return (
      <ReviewCardContainer>
         <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
         </Text>
         <DataContainer>
            <Img></Img>
            <NameAndTime>
               <Name>John Doe</Name>
               <Time>12:00 AM</Time>
            </NameAndTime>
            <Buttons>
               <BiCheckCircle className="check"/>
               <BiXCircle className="delete"/>

            </Buttons>
         </DataContainer>
      </ReviewCardContainer>
   );
};

export default ReviewCard;
