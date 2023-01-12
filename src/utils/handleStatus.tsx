const handleStatus = (status: string) => {
      switch (status) {
         case "check_in":
            return "Check in";
         case "check_out":
            return "Check out";
         default:
            return "In Progress";
      }
   };

export default handleStatus;