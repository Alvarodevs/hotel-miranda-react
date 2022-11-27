import React, {useState, useEffect} from "react";
import {
   ListButtonsContainer,
   Selectors,
   NewBtnsContainer,
} from "../../styles/ListButtons";

import { NewestBtn } from "../../styles/Button";
import {
   NewEmployee,
   UserSelector,
   UsersSearchbarContainer,
} from "./UserListStyled";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import {
   ListContainer,
   THeaderContainer,
   HeaderTitle,
   TBody,
} from "../../styles/Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Searchbar } from "../HeaderDashboard/HeaderDashbStyled";
import Pagination from "../Pagination";
import MainContainer from "../MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus, selectUsers, getUsers } from "../../features/users/usersSlice";
import Spiner from "../Spiner";
import UserCard from "./UserCard";

const UserList = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [usersPerPage, setUsersPerPage] = useState(10);

	const dispatch = useDispatch();
   const appState = useSelector(selectStatus);
   const usersRedux = useSelector(selectUsers);

	const [isActive, setIsActive] = useState(true);
   const [lengthFromRedux, setLengthFromRedux] = useState(true);
   const [usersFiltered, setUsersFiltered] = useState([]);

   useEffect(() => {
      dispatch(getUsers());
   }, [dispatch]);

	useEffect(() => {
      const usersToFilter = usersRedux;
      const usersFiltered = usersToFilter.filter(
         (user) => user.state === isActive
      );
      setUsersFiltered(usersFiltered);
      setCurrentPage(1);
   }, [isActive, usersRedux]);

	const indexLastRoom = currentPage * usersPerPage;
   const indexFirstRoom = indexLastRoom - usersPerPage;
   const currentUsersRedux = usersRedux.slice(indexFirstRoom, indexLastRoom);
   const currentUsersFiltered = usersFiltered.slice(
      indexFirstRoom,
      indexLastRoom
   );


	function usersSwitch() {
      if (lengthFromRedux) {
         return currentUsersRedux;
      } else return currentUsersFiltered;
   }

   //change pagination
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const buttonsPaginate = (direction) => {

		const maxLength = () => {
         return lengthFromRedux ? usersRedux : usersFiltered;
      };

      if (direction === "prev") {
         return currentPage === 1
            ? null
            : setCurrentPage((previous) => previous - 1);
      }
      if (direction === "next") {
         return currentPage === Math.ceil(maxLength().length / usersPerPage)
            ? null
            : setCurrentPage((previous) => previous + 1);
      }
   };

	const setAllUsers = () => {
      setLengthFromRedux(true);
      dispatch(getUsers());
   };

   return (
      <MainContainer>
         <ListButtonsContainer>
            <Selectors>
               <UserSelector onClick={() => {
						setAllUsers();
						setCurrentPage(1);
					}}>
                  All Employee
               </UserSelector>
               <UserSelector
                  onClick={(e) => {
                     setIsActive(true);
                     setLengthFromRedux(false);
                  }}
               >
                  Active Employee
               </UserSelector>
               <UserSelector
                  onClick={(e) => {
                     setIsActive(false);
                     setLengthFromRedux(false);
                  }}
               >
                  Inactive Employee
               </UserSelector>
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
            {appState === "loading" && (
               <TBody>
                  <Spiner color={"success"} />
               </TBody>
            )}
            {appState === "ok" && (
               <TBody>
                  {usersSwitch().map((user) => (
                     <UserCard key={user.id} user={user} />
                  ))}
               </TBody>
            )}
         </ListContainer>
         <Pagination
            itemsPerPage={usersPerPage}
            numOfItems={
               lengthFromRedux ? usersRedux.length : usersFiltered.length
            }
            paginate={paginate}
            page={currentPage}
            buttonsPaginate={buttonsPaginate}
         />
      </MainContainer>
   );
};

export default UserList;
