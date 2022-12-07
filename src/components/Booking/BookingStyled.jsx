import styled from "styled-components";

export const DetailsContainer = styled.div`
	display: flex;
`;

export const BookingDetailsContainer = styled.div`
	width: 50%;
	height: 600px;
	background-color: var(--color-white);
	display: inline-block;
	border-radius: 3% 0 0 3%;
	padding:30px;
`;

export const NameIdContainer = styled.div`
	width: 100%;
`;

export const NameAndDots = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Name = styled.h3`
	font-size: 30px;
	font-family: var(--font-main);
	margin-bottom: 13px;
`;

export const Id = styled.p`
   font-family: var(--font-main);
   font-size: 14px;
   color: var(--color-greenGrey);
	margin-bottom: 50px;
`;

export const Dates = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: var(--font-main);
	border-bottom: 2px solid var(--color-greyEB);
`;

export const Date = styled.p`
   font-size: 13px;
   color: var(--color-grey6E);
   margin: 0 130px 30px 0px;
   span {
      font-size: 15px;
      color: var(--color-black);
		font-weight: 700;
		letter-spacing: 2px;
   }
`;

export const RoomType = styled.div`
   display: flex;
   justify-content: space-between;
   font-family: var(--font-main);
	margin-top: 30px;
`;

export const Room = styled.p`
   font-size: 13px;
   color: var(--color-grey6E);
   margin: 0 50px 0px 0px;
   span {
      font-size: 20px;
      color: var(--color-black);
      font-weight: 700;
      letter-spacing: 2px;
   }
`;

export const Price = styled.p`
   font-size: 20px;
   color: var(--color-black);
   font-weight: 700;
   letter-spacing: 2px;
   margin: 0 80px 20px 0px;
`;

export const Night = styled.span`
   font-size: 12px;
   color: var(--color-greenGrey);
`;

export const Description = styled.p`
	font-size: 13px;
	color: var(--color-black);
	font-family: var(--font-main);
	margin-bottom: 20px;
`;

export const Amenities = styled.div`
   display: flex;
   font-family: var(--font-main);
	height: 20px;
`;

export const AmenitieCard = styled.div`
   background-color: #e8f2ef;
   font-family: var(--font-main);
	color: white;
`;
export const ImageDetailsContainer = styled.div`
   width: 50%;
   background-color: grey;
   height: 600px;
   display: inline-block;
   border-radius: 0 3% 3% 0;
`;