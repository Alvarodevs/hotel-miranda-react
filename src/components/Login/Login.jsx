import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateEmail, updatePassword, login } from "../../store/actions";
import INIT_STATE from "../../store/initialState";
import LoginContext from "../../store/LoginContext";
import { LoginContainer, Header, Form, Input, Submit } from "./LoginStyled";

const Login = ({setAuth}) => {
   const navigate = useNavigate();
   const [state, dispatch] = useContext(LoginContext);

   //console.log("STATE IN LOGIN", state);

   const handleLogin = (e) => {
      e.preventDefault();
      if (
         state.user.email === "alvaro@example.com" &&
         state.user.passw === "1234"
      ) {
         dispatch(
            login({
               isAuth: true,
               user: {
                  email: state.user.email,
                  passw: state.user.passw,
               },
            })
         );
         toLocalStorage({
            ...state,
            isAuth: true,
         });
			navigate("/")
      } else {
         alert("Wrong email or password");
      }
   };

   const toLocalStorage = (user) => {
		if (!localStorage.getItem("authenticated")){
      	return localStorage.setItem("authenticated", JSON.stringify(user))
		} else {
			const currentItem = JSON.parse(localStorage.getItem('authenticated'))
			currentItem.isAuth = true;
			localStorage.setItem('authenticated', JSON.stringify(currentItem))
		}
   };

   return (
      <div>
         <LoginContainer>
            <Header>Please, login with your account</Header>
            <Form onSubmit={handleLogin} className="login-form">
               <Input
                  type="email"
                  placeholder="Your email account"
                  name="email"
                  className="email-login"
                  value={state.user.email}
                  onChange={(e) => dispatch(updateEmail(e.target.value))}
               />
               <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="passw-login"
                  value={state.user.passw}
                  onChange={(e) => dispatch(updatePassword(e.target.value))}
               />
               <Submit type="submit" value="Submit" />
            </Form>
         </LoginContainer>
      </div>
   );
};

export default Login;
