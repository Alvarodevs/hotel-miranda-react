import React from "react";
import { IContact } from "../../interfaces";
import {
   ListCard,
   NameImg,
   Names,
   Id,
   Title,
   Td,
   TdTextWeight,
   Span,
} from "../../styles/Table";
import { IdContainer, Comment, ArchieveBtn, Email } from "./ContactsListStyled";

type Contact = {
   contact: IContact;
};

const ContactCard = ({ contact }: Contact): JSX.Element => {
   const date: Date= new Date(contact.date);

   return (
      <ListCard key={contact._id}>
         <IdContainer>#{contact._id}</IdContainer>
         
         <Td>{date.toString().slice(4, 15)},{<br/>}
            {date.toString().slice(16, 24)}
         </Td>
         <Td>
            {contact.customer}
         </Td>
         <Email>
            {contact.email}
         </Email>
         <Td>
            {contact.phone}
         </Td>
         <TdTextWeight>
            {contact.subject}
         </TdTextWeight>
         <Comment>
            {contact.comment}
         </Comment>
         <Td>
            {<ArchieveBtn>Archieve</ArchieveBtn>}
         </Td>
      </ListCard>
   );
};

export default ContactCard;
