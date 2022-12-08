import styled from "styled-components";

export const Title = styled.h1`
font-family: var(--font-main);
   text-align: center;
   font-size: 2.5rem;
   margin: 1rem 0;
`;
export const Form = styled.form`
   font-family: var(--font-main);
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
`;
export const Container = styled.div`
   display: flex;
   align-items: center;
   height: 4rem;
   width: 100%;
   padding-left: 1rem;
   gap: 1.5rem;
   box-shadow: 1px 1px 1px 1px var(--color-greyD4);
   &:hover {
      box-shadow: 0px 4px 30px #00000014;
   }
`;
export const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   height: 4rem;
   width: 100%;
   padding-left: 1rem;
   padding-top: 2rem;
   gap: 2rem;
`;
export const Label = styled.label`
   color: #304e85;
   font-weight: bold;
   font-size: 1.3rem;
`;
export const Select = styled.select`
   background-color: transparent;
   border: none;
   padding: 0 1em 0 0;
   margin: 0;
   width: 200px;
   font-family: inherit;
   font-size: 1.2rem;
   cursor: inherit;
   line-height: inherit;
`;
export const Input = styled.input`
   border: none;
   font-size: 1.2rem;
   font-weight: 600;
   width: 100px;
   text-align: left;
   padding-left: 1rem;
   font-family: inherit;
   background: transparent;
   :focus {
      outline: 1px solid var(--color-greyD4);
      padding: 0.5rem 0;
   }
`;
export const Checkbox = styled.input`
   width: 20px;
   height: 20px;
   :focus {
      outline: none;
   }
`;
export const SaveButton = styled.button`
   width: 150px;
   display: inline-block;
   outline: 0;
   cursor: pointer;
   text-align: center;
   border: 0;
   padding: 7px 16px;
   min-height: 36px;
   min-width: 36px;
   color: #ffffff;
   background: #008060;
   border-radius: 4px;
   font-weight: 500;
   font-size: 1.3rem;
   box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px,
      rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
   :hover {
      background: #006e52;
   }
`;
export const ClearButton = styled.button`
   display: inline-block;
   width: 150px;
   outline: 0;
   cursor: pointer;
   text-align: center;
   border: 1px solid #babfc3;
   padding: 7px 16px;
   min-height: 36px;
   min-width: 36px;
   color: #202223;
   background: #ffffff;
   border-radius: 4px;
   font-weight: 500;
   font-size: 1.3rem;
   box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;
   :hover {
      background: #f6f6f7;
      outline: 1px solid transparent;
   }
`;
