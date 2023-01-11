import styled from "styled-components";

const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   p {
      color: var(--color-black);
      font-family: var(--font-main);
      font-size: 2rem;
      font-weight: 600;
      margin: 0;
      margin-top: 0.5rem;
   }
`;

const StatsContainer = styled.div`
   display: flex;
   gap: 20px;
`;

const Stat = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;
   p {
      font-family: var(--font-main);
      font-size: 14px;
      margin: 0;
      &:nth-child(3) {
         font-size: 16px;
         font-weight: 600;
      }
   }
`;

const Square = styled.div`
   width: 13px;
   height: 13px;
   background-color: ${(props) => props.color};
   
`;

export { FilterContainer, StatsContainer, Stat, Square };
