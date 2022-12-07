import styled from "styled-components";

export const ListContainer = styled.table`
    width: 100%;
    background-color: var(--color-white);
    border-radius: 20px;
    padding: 20px 30px;
`;

export const THeaderContainer = styled.thead`
`;

export const HeaderTitle = styled.th`
    font-family: var(--font-main);
    font-size: 18px;
    color: var(--color-grey39);
    border-bottom: 2px solid var(--color-greyF5);
    text-align: start;
`;

export const TBody = styled.tbody`
    padding: 0 20px;
`;

export const ListCard = styled.tr`
    margin: 20px 40px 0px 0px;
    height: 85px;
    :hover {
        box-shadow: 0px 4px 30px #0000001a;
    }
	 a{
		color:inherit;
	 }
`;

//FIRST COLUMN DATA
export const NameImg = styled.div`
    display: flex;
    width: fit-content;
    justify-content: space-between;
`;

export const Image = styled.img`
    width: 150px;
    height: 77px;
    border-radius: 8px;
    background-color: grey;
    object-fit: cover;
`;

export const Names = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 10px;
    font-family: var(--font-main);
    padding-top: 10px;
    width: max-content;
`;

export const Id = styled.div`
    color: var(--color-greenGrey);
`;

export const Title = styled.div`
    color: var(--color-grey39);
    font-size: 16px;
    font-weight: 700;
`;
//---------------------------

export const Td = styled.td`
    font-family: var(--font-main);
    font-size: 16px;
    span {
        color: var(--color-greenGrey);
        font-size: 14px;
    }
	.dots{
		font-size: 20px;
	}
`;

export const TdTextWeight = styled(Td)`
    font-weight: 700;
`;

export const Span = styled.span`
    font-family: var(--font-main);
    font-size: 16px;
`;

export const Status = styled.div`
    width: 125px;
    height: 45px;
    border-radius: 12px;
    text-align: center;
    padding: 0.6rem;
    color: var(--color-white);
`;
