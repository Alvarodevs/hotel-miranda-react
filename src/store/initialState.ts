import { ILogin } from "./actions";
const userLocalStorage :ILogin = JSON.parse(localStorage.getItem('authenticated') || '')

//auth true/false if userLocalStorage
const INIT_STATE = {
	isAuth: userLocalStorage.isAuth ? userLocalStorage.isAuth : false,
	user: userLocalStorage ? { ...userLocalStorage.user } : { name: '', email:'' }
}

export default INIT_STATE;