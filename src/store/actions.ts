import { LOGIN, LOGOUT, UPDATE_EMAIL, UPDATE_USERNAME } from './actionTypes';

export interface ILogin {
	isAuth: boolean,
	user: {
		name: string,
		email: string
	}
}

export interface IAction {
	type: string,
	payload: ILogin
}

export const login = ({isAuth, user}) :IAction => ({
	type: LOGIN,
	payload: {
		isAuth: isAuth,
		user: user,
	}
})

export const logout = ({ isAuth, user }) : IAction => ({
	type: LOGOUT,
	payload: {
		isAuth: isAuth,
		user: user,
	}
})

export const updateEmail = (email: string) => ({
	type: UPDATE_EMAIL,
	payload: email,
})

export const updateUsername = (username: string) => ({
	type: UPDATE_USERNAME,
	payload: username,
})