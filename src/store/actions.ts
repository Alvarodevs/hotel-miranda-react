import { LOGIN, LOGOUT, UPDATE_EMAIL } from "./actionTypes";

export interface ILogin {
  isAuth: boolean;
  user: {
    email: string;
    name: string;
  };
}

export type ILoginIterable = ILogin & {
  [Symbol.iterator]?(): IterableIterator<any>;
};

export interface IAction {
  type: string;
  payload: ILogin | any;
}

export const login = ({ isAuth, user }): IAction => ({
  type: LOGIN,
  payload: {
    isAuth: isAuth,
    user: user,
  }
});

export const logout = ({ isAuth, user }): IAction => ({
  type: LOGOUT,
  payload: {
    isAuth: isAuth,
    user: user,
  },
});

export const updateEmail = (email: string) => ({
  type: UPDATE_EMAIL,
  payload: email,
});
