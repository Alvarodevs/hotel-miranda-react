import React from "react";
import {
   ListCard,
   NameImg,
   Names,
   Id,
   Title,
   Td,
   TdTextWeight,
} from "../../../styles/Table";
import { UserAvatar, UserStatus, CheckText, JobDesc } from "./UserListStyled";
import moment from "moment";
import { FiPhone } from "react-icons/fi";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
   return (
      <ListCard>
         <Td>
            <Link to={`/user/${user.id}`}>
               <NameImg>
                  <UserAvatar src={user.image} alt="Image" />
                  <Names>
                     <Title>{user.name}</Title>
                     <Id>#{user.id}</Id>
                     <Id style={{ fontSize: "13px" }}>
                        Joined on {moment(user.date).format("MMM Do, YYYY")}
                     </Id>
                  </Names>
               </NameImg>
            </Link>
         </Td>
         <JobDesc>{user.job_desc}</JobDesc>
         <Td>
            <Title>Monday, Friday</Title>
            <CheckText>Check Schedule</CheckText>
         </Td>
         <TdTextWeight>
            <FiPhone /> {user.phone}
         </TdTextWeight>
         <Td>
            <UserStatus state={user.state}>
               {user.state ? "Active" : "Inactive"}
            </UserStatus>
         </Td>
         <Td>
            <Link to={`/user/edit/${user.id}`}>
               <BiDotsVerticalRounded />
            </Link>
         </Td>
      </ListCard>
   );
};

export default UserCard;
