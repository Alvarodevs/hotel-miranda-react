const userLocalStorage = JSON.parse(localStorage.getItem('authenticated'))

//auth true/false if userLocalStorage
export const INIT_STATE = {
	auth: userLocalStorage ? true : false,
	...userLocalStorage
}

export const reducer = (state, action) => {
	switch(action.type){
		case 'login':
			return //login logic;
		case 'logout':
			return localStorage.removeItem("authenticated")
		case 'update':
			return //update user logic;	
	}
}