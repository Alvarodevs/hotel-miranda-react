import { LOGIN, LOGOUT, UPDATE_EMAIL, UPDATE_PASSWORD } from './actionTypes';

export const login = ({isAuth, user}) => ({
	type: LOGIN,
	payload: {
		isAuth: isAuth,
		user: user,
	}
})

export const logout = (isAuth) => ({
	type: LOGOUT,
	payload: isAuth,
})

export const updateEmail = (email) => ({
	type: UPDATE_EMAIL,
	payload: email,
})

export const updatePassword = (password) => ({
	type: UPDATE_PASSWORD,
	payload: password,
})