import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
   selectStatus,
   selectContacts,
   getContacts,
   sortNewest,
} from "../../features/contact/contactSlice";
import MainContainer from "../../components/MainContainer";
import ReviewsBoard from "../../components/ReviewsBoard";
import Spinner from "../../components/Spinner";
import { IContact } from "../../interfaces";
import Pagination from "../../components/Pagination";
import ContactCard from "./ContactCard";
import {
   ListButtonsContainer,
   Selectors,
   Selector,
   NewBtnsContainer,
} from "../../styles/ListButtons";
import { NewestBtn } from "../../styles/Button";
import { FiChevronDown } from "react-icons/fi";
import {ListContainer, THeaderContainer, HeaderTitle, TBody } from "../../styles/Table";

const ContactView = () => {
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [contactsPerPage, setContactsPerPage] = useState<number>(10);

   const dispatch = useAppDispatch();
   const appState = useAppSelector(selectStatus);
   const contactsRedux = useAppSelector(selectContacts);

   const [contactArchived, setContactArchived] = useState<boolean>(false);
   const [lengthFromRedux, setLengthFromRedux] = useState<boolean>(true);
   const [contactsFiltered, setContactsFiltered] = useState<IContact[]>([]);

   useEffect(() => {
      dispatch(getContacts());
   }, [dispatch]);

   const setAllContacts = (): void => {
      setLengthFromRedux(true);
      dispatch(getContacts());
   };

   useEffect(() => {
      const contactsToFilter = contactsRedux;
      const contactsFiltered = contactsToFilter.filter(
         (contact) => contact.archived === contactArchived
      );
      setContactsFiltered(contactsFiltered);
      setCurrentPage(1);
   }, [contactArchived, contactsRedux]);

   const indexLastRoom = currentPage * contactsPerPage;
   const indexFirstRoom = indexLastRoom - contactsPerPage;
   const currentContactsRedux = contactsRedux.slice(
      indexFirstRoom,
      indexLastRoom
   );
   const currentContactsFiltered = contactsFiltered?.slice(
      indexFirstRoom,
      indexLastRoom
   );

   //change pagination
   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
   const maxLength = (): IContact[] => {
      return lengthFromRedux ? contactsRedux : contactsFiltered;
   };
   const buttonsPaginate = (direction: string) => {
      if (direction === "prev") {
         return currentPage === 1
            ? null
            : setCurrentPage((previous) => previous - 1);
      }
      if (direction === "next") {
         return currentPage === Math.ceil(maxLength().length / contactsPerPage)
            ? null
            : setCurrentPage((previous) => previous + 1);
      }
   };

   function contactsSwitch() {
      if (lengthFromRedux) {
         return currentContactsRedux;
      } else return currentContactsFiltered;
   }

   return (
      <MainContainer>
         <ReviewsBoard />
         <ListButtonsContainer>
            <Selectors>
               <Selector
               onClick={() => {
                  setAllContacts();
                  setCurrentPage(1);
               }}
               >
                  All Customers Reviews
               </Selector>
               <Selector
               onClick={() => {
                  setContactArchived(false);
                  setLengthFromRedux(false);
               }}
               >
                  Published
               </Selector>
               <Selector
               onClick={() => {
                  setContactArchived(true);
                  setLengthFromRedux(false);
               }}
               >
                  Archived
               </Selector>
            </Selectors>
            <NewBtnsContainer>
               <NewestBtn onClick={() => dispatch(sortNewest())}>
                  Newest <FiChevronDown />
               </NewestBtn>
            </NewBtnsContainer>
         </ListButtonsContainer>
         <ListContainer>
            <THeaderContainer>
               <tr>
                  <HeaderTitle>ID</HeaderTitle>
                  <HeaderTitle>Date</HeaderTitle>
                  <HeaderTitle>Customer</HeaderTitle>
                  <HeaderTitle>Email</HeaderTitle>
                  <HeaderTitle>Phone</HeaderTitle>
                  <HeaderTitle>Subject</HeaderTitle>
                  <HeaderTitle>Comment</HeaderTitle>
                  <HeaderTitle>Archived</HeaderTitle>
               </tr>
            </THeaderContainer>

            {/* CASE LOADING -- pending change to Spinner or Squeleton*/}
            {appState === "loading" && (
               <TBody>
                  <tr>
                     <Spinner />
                  </tr>
               </TBody>
            )}

            {/* CASE RENDERING DATA */}
            {appState === "ok" && (
               <TBody>
                  {contactsSwitch()?.map((contact) => (
                     <ContactCard
                        key={contact._id}
                        contact={contact}
                     />
                  ))}
               </TBody>
            )}
         </ListContainer>
         <Pagination
            itemsPerPage={contactsPerPage}
            numOfItems={
               lengthFromRedux ? contactsRedux.length : contactsFiltered?.length
            }
            paginate={paginate}
            page={currentPage}
            buttonsPaginate={buttonsPaginate}
         />
      </MainContainer>
   );
};

export default ContactView;
