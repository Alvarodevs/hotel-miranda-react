import React, {useState} from "react";
import {
   ListButtonsContainer,
   Selectors,
   NewBtnsContainer,
} from "../../styles/ListButtons";
import moment from "moment";
import { NewestBtn } from "../../styles/Button";
import {
   UserAvatar,
   NewEmployee,
   UserStatus,
   CheckText,
   JobDesc,
   UserSelector,
   UsersSearchbarContainer,
} from "./UserListStyled";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import {
   ListContainer,
   THeaderContainer,
   HeaderTitle,
   TBody,
   ListCard,
   NameImg,
   Names,
   Id,
   Title,
   Td,
   TdTextWeight,
} from "../../styles/Table";
import users from "../../db/users.json";
import { FiPhone } from "react-icons/fi";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Searchbar } from "../HeaderDashboard/HeaderDashbStyled";
import Pagination from "../Pagination";
import MainContainer from "../MainContainer";

const UserList = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [usersPerPage, setUsersPerPage] = useState(10);

   const indexLastRoom = currentPage * usersPerPage;
   const indexFirstRoom = indexLastRoom - usersPerPage;
   const currentUsers = users.slice(indexFirstRoom, indexLastRoom);

   //change pagination
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const buttonsPaginate = (direction) => {
      if (direction === "prev") {
         return currentPage === 1
            ? null
            : setCurrentPage((previous) => previous - 1);
      }
      if (direction === "next") {
         return currentPage === Math.ceil(users.length / usersPerPage)
            ? null
            : setCurrentPage((previous) => previous + 1);
      }
   };
   return (
      <MainContainer>
         <ListButtonsContainer>
            <Selectors>
               <UserSelector>All Employee</UserSelector>
               <UserSelector>Active Employee</UserSelector>
               <UserSelector>Inactive Employee</UserSelector>
               <UsersSearchbarContainer>
                  <Searchbar />
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </UsersSearchbarContainer>
            </Selectors>
            <NewBtnsContainer>
               <NewEmployee>
                  + New Employee <FiChevronDown />
               </NewEmployee>
               <NewestBtn>
                  Newest <FiChevronDown />
               </NewestBtn>
            </NewBtnsContainer>
         </ListButtonsContainer>
         <ListContainer>
            <THeaderContainer>
               <tr>
                  <HeaderTitle>Name</HeaderTitle>
                  <HeaderTitle>Job Desc.</HeaderTitle>
                  <HeaderTitle>Schedule</HeaderTitle>
                  <HeaderTitle>Contact</HeaderTitle>
                  <HeaderTitle>Status</HeaderTitle>
               </tr>
            </THeaderContainer>
            <TBody>
               {currentUsers.map((user, i) => (
                  <ListCard key={i}>
                     <Td>
                        <NameImg>
                           <UserAvatar src={user.image} alt="Image" />
                           <Names>
                              <Title>{user.name}</Title>
                              <Id>#{user.id}</Id>
                              <Id style={{ fontSize: "13px" }}>
                                 Joined on{" "}
                                 {moment(user.date).format("MMM Do, YYYY")}
                              </Id>
                           </Names>
                        </NameImg>
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
                        <BiDotsVerticalRounded />
                     </Td>
                  </ListCard>
               ))}
            </TBody>
         </ListContainer>
         <Pagination
            itemsPerPage={usersPerPage}
            items={users.length}
            paginate={paginate}
            page={currentPage}
            buttonsPaginate={buttonsPaginate}
         />
      </MainContainer>
   );
};

export default UserList;
