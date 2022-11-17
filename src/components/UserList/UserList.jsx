import React from "react";
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

const UserList = () => {
    return (
        <div>
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
                    <HeaderTitle>Name</HeaderTitle>
                    <HeaderTitle>Job Desc.</HeaderTitle>
                    <HeaderTitle>Schedule</HeaderTitle>
                    <HeaderTitle>Contact</HeaderTitle>
                    <HeaderTitle>Status</HeaderTitle>
                </THeaderContainer>
                <TBody>
                    {users.map((user, i) => (
                        <ListCard id={i}>
                            <Td>
                                <NameImg>
                                    <UserAvatar src={user.image} alt="Image" />
                                    <Names>
                                        <Title>{user.name}</Title>
                                        <Id>#{user.id}</Id>
                                        <Id style={{ fontSize: "13px" }}>
                                            Joined on{" "}
                                            {moment(user.date).format(
                                                "MMM Do, YYYY"
                                            )}
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
        </div>
    );
};

export default UserList;
