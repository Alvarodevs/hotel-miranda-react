import { ILogin } from "./actions";

const userInLocalStorage = localStorage.getItem("authenticated");
const userLocalStorage :ILogin = userInLocalStorage !== null ? JSON.parse(userInLocalStorage) : '';

//auth true/false if userLocalStorage
const INIT_STATE = {
	isAuth: userLocalStorage.isAuth ? userLocalStorage.isAuth : false,
	user: userLocalStorage ? { ...userLocalStorage.user } : { email:'' }
}

export default INIT_STATE;