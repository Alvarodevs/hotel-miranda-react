import { createContext } from "react";
import { ILogin } from './actions'

const defaultLoginState: ILogin = {
  isAuth: false,
  user: {
    email: "",
    name: ""
  },
};

const LoginContext :React.Context<any> = createContext({
  state: defaultLoginState,
  dispatch: () => undefined
});

export default LoginContext;