import React from "react";
import { Container, Nav, Ul, Li, Text, Anchor, PaginationButton } from "./PaginationStyled";

const Pagination = ({ itemsPerPage, items, paginate, page, buttonsPaginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(items / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <Container>
            <Text>
                Showing {itemsPerPage} of {items} Data
            </Text>
            <Nav>
                <PaginationButton onClick={()=> buttonsPaginate('prev')}>Prev</PaginationButton>
                <Ul>
                    {pageNumbers.map((number) => (
                        <Li key={number}>
                            <Anchor onClick={() => paginate(number)} href="#" active={page === number ? true : false}>
                                {number}
                            </Anchor>
                        </Li>
                    ))}
                </Ul>
                <PaginationButton onClick={()=> buttonsPaginate('next')}> Next</PaginationButton>
            </Nav>
        </Container>
    );
};

export default Pagination;
