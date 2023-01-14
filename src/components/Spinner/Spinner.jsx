import CircularProgress from "@mui/material/CircularProgress";
import { SpinnerContainer } from "./SpinerStyled";

const Spinner = () => {
   return (
      <SpinnerContainer>
         <CircularProgress color="success" />
      </SpinnerContainer>
   );
};

export default Spinner;
