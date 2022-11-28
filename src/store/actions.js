import { LOGIN, LOGOUT, UPDATE_EMAIL, UPDATE_USERNAME } from './actionTypes';

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

export const updateUsername = (username) => ({
	type: UPDATE_USERNAME,
	payload: username,
})