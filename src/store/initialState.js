const userLocalStorage = JSON.parse(localStorage.getItem('authenticated'))

//auth true/false if userLocalStorage
const INIT_STATE = {
	isAuth: userLocalStorage ? true : false,
	user: userLocalStorage ? {...userLocalStorage.user} : {email:'', passw:''}
}

export default INIT_STATE;