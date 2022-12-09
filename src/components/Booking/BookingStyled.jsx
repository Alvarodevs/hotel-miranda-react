import styled from "styled-components";

export const DetailsContainer = styled.div`
	display: flex;
	height: fit-content;
`;

export const BookingDetailsContainer = styled.div`
	width: 50%;
	//height: 600px;
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
   padding-bottom: 10px;
`;

export const Date = styled.p`
   font-size: 13px;
   color: var(--color-grey6E);
   padding-right: 60px;
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
	margin-top: 15px;
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
   padding: 0 20px 20px 0px;
`;

export const Night = styled.span`
   font-size: 12px;
   color: var(--color-greenGrey);
`;

export const Description = styled.p`
   font-size: 13px;
   color: var(--color-black);
   font-family: var(--font-main);
   margin-bottom: 1.2%;
`;

export const Amenities = styled.div`
   font-family: var(--font-main);
	width: 100%;
	font-weight: 600;
`;
export const AmenitiesCardsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

export const AmenitieCard = styled.div`
   background-color: #e8f2ef;
   font-family: var(--font-main);
   color: var(--color-greenDark);
   margin: 5px 20px 0px 0;
   padding: 10px 20px;
   min-width: fit-content;
   text-align: center;
   font-weight: 700;
   border-radius: 10px; ;
`;
export const ImageDetailsContainer = styled.div`
   width: 50%;
   background-color: grey;
   display: inline-block;
   border-radius: 0 3% 3% 0;

	//Styles for navigation in Slider
   .swiper-button-prev {
      position: absolute;
      bottom: 6rem;
      width: 40px;
      padding: 10px;
      margin: 10px 20px;
      border: 1px solid var(--color-black);
      z-index: 1;
      fill: #135846;
      background: rgba(110, 110, 110, 0.5);
      filter: invert(1);
      content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDY0LjM0NCwyMDcuNDE4bDAuNzY4LDAuMTY4SDEzNS44ODhsMTAzLjQ5Ni0xMDMuNzI0YzUuMDY4LTUuMDY0LDcuODQ4LTExLjkyNCw3Ljg0OC0xOS4xMjQNCgkJCWMwLTcuMi0yLjc4LTE0LjAxMi03Ljg0OC0xOS4wODhMMjIzLjI4LDQ5LjUzOGMtNS4wNjQtNS4wNjQtMTEuODEyLTcuODY0LTE5LjAwOC03Ljg2NGMtNy4yLDAtMTMuOTUyLDIuNzgtMTkuMDE2LDcuODQ0DQoJCQlMNy44NDQsMjI2LjkxNEMyLjc2LDIzMS45OTgtMC4wMiwyMzguNzcsMCwyNDUuOTc0Yy0wLjAyLDcuMjQ0LDIuNzYsMTQuMDIsNy44NDQsMTkuMDk2bDE3Ny40MTIsMTc3LjQxMg0KCQkJYzUuMDY0LDUuMDYsMTEuODEyLDcuODQ0LDE5LjAxNiw3Ljg0NGM3LjE5NiwwLDEzLjk0NC0yLjc4OCwxOS4wMDgtNy44NDRsMTYuMTA0LTE2LjExMmM1LjA2OC01LjA1Niw3Ljg0OC0xMS44MDgsNy44NDgtMTkuMDA4DQoJCQljMC03LjE5Ni0yLjc4LTEzLjU5Mi03Ljg0OC0xOC42NTJMMTM0LjcyLDI4NC40MDZoMzI5Ljk5MmMxNC44MjgsMCwyNy4yODgtMTIuNzgsMjcuMjg4LTI3LjZ2LTIyLjc4OA0KCQkJQzQ5MiwyMTkuMTk4LDQ3OS4xNzIsMjA3LjQxOCw0NjQuMzQ0LDIwNy40MTh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");
      border-radius: 5px;
   }

   .swiper-button-next {
      position: absolute;
      transform: rotate(180deg);
      bottom: 6rem;
      border: 1px solid var(--color-black);
      width: 40px;
      padding: 10px;
      right: 0;
      margin: 10px 20px;
      z-index: 1;
      background: rgba(110, 110, 110, 0.5);
      filter: invert(1);
      content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDY0LjM0NCwyMDcuNDE4bDAuNzY4LDAuMTY4SDEzNS44ODhsMTAzLjQ5Ni0xMDMuNzI0YzUuMDY4LTUuMDY0LDcuODQ4LTExLjkyNCw3Ljg0OC0xOS4xMjQNCgkJCWMwLTcuMi0yLjc4LTE0LjAxMi03Ljg0OC0xOS4wODhMMjIzLjI4LDQ5LjUzOGMtNS4wNjQtNS4wNjQtMTEuODEyLTcuODY0LTE5LjAwOC03Ljg2NGMtNy4yLDAtMTMuOTUyLDIuNzgtMTkuMDE2LDcuODQ0DQoJCQlMNy44NDQsMjI2LjkxNEMyLjc2LDIzMS45OTgtMC4wMiwyMzguNzcsMCwyNDUuOTc0Yy0wLjAyLDcuMjQ0LDIuNzYsMTQuMDIsNy44NDQsMTkuMDk2bDE3Ny40MTIsMTc3LjQxMg0KCQkJYzUuMDY0LDUuMDYsMTEuODEyLDcuODQ0LDE5LjAxNiw3Ljg0NGM3LjE5NiwwLDEzLjk0NC0yLjc4OCwxOS4wMDgtNy44NDRsMTYuMTA0LTE2LjExMmM1LjA2OC01LjA1Niw3Ljg0OC0xMS44MDgsNy44NDgtMTkuMDA4DQoJCQljMC03LjE5Ni0yLjc4LTEzLjU5Mi03Ljg0OC0xOC42NTJMMTM0LjcyLDI4NC40MDZoMzI5Ljk5MmMxNC44MjgsMCwyNy4yODgtMTIuNzgsMjcuMjg4LTI3LjZ2LTIyLjc4OA0KCQkJQzQ5MiwyMTkuMTk4LDQ3OS4xNzIsMjA3LjQxOCw0NjQuMzQ0LDIwNy40MTh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");
      border-radius: 5px;
   }

   .swiper-button-prev:hover {
      background: rgba(110, 110, 110, 1);
   }

   .swiper-button-next:hover {
      background: rgba(110, 110, 110, 1);
   }
`;
