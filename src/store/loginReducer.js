import { LOGIN, LOGOUT, UPDATE_EMAIL, UPDATE_PASSWORD } from './actionTypes';

const loginReducer = (state, action) => {
	const {type, payload} = action;

	switch (type) {
		case LOGIN:
			return { ...state, ...payload }
		case LOGOUT:
			return { ...state, ...payload }
		case UPDATE_EMAIL:
			return { 
				...state, 
					user: {
						...state.user,
						email: payload
					} 
			}
		case UPDATE_PASSWORD:
			return {
				...state,
				user: {
					...state.user,
					passw: payload
				}
			}
		default:
			return state;
	}
}

export default loginReducer;