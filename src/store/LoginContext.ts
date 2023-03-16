// import { ILogin } from './actions';
import {type Action} from 'redux';
import { createContext } from "react";
import { ILogin } from "./actions";

const LoginContext = createContext<{
  state: ILogin,
  dispatch: React.Dispatch<Action>
}>({
  state: {
  isAuth: false,
  user: {
    email: '',
    name: ''
  }},
  dispatch: () => {},
  [Symbol.iterator]: function* () {
    yield this.state;
  }
});

export default LoginContext;