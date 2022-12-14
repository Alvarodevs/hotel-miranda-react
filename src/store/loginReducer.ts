import { ILogin, IAction } from './actions';

import { LOGIN, LOGOUT, UPDATE_EMAIL, UPDATE_USERNAME } from './actionTypes';

const loginReducer = (state :ILogin, action: IAction) => {
   const { type, payload } = action;

	switch (type) {
		case LOGIN:
			return { ...state, ...payload }
		case LOGOUT:
			return { ...state,...payload }
		case UPDATE_EMAIL:
			return { 
				...state, 
					user: {
						...state.user,
						email: payload
					} 
			}
		case UPDATE_USERNAME:
			return {
				...state,
				user: {
					...state.user,
					name: payload
				}
			}
		default:
			return state;
	}
}

export default loginReducer;