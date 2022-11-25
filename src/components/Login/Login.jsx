import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateEmail, updateUsername, login } from "../../store/actions";
import INIT_STATE from "../../store/initialState";
import LoginContext from "../../store/LoginContext";
import { LoginContainer, Header, Form, Input, Submit, Label } from "./LoginStyled";

const Login = ({ setAuth }) => {
   const navigate = useNavigate();
   const [state, dispatch] = useContext(LoginContext);

   //console.log("STATE IN LOGIN", state);

   const handleLogin = (e) => {
      e.preventDefault();
      if (
         state.user.name === "alvaro" &&
         state.user.email === "alvaro@example.com"
      ) {
         dispatch(
            login({
               isAuth: true,
               user: {
                  name: state.user.name,
                  email: state.user.email,
               },
            })
         );
         toLocalStorage({
            ...state,
            isAuth: true,
         });
         navigate("/");
      } else {
         alert("Wrong email or password");
      }
   };

   const toLocalStorage = (user) => {
      if (!localStorage.getItem("authenticated")) {
         return localStorage.setItem("authenticated", JSON.stringify(user));
      } else {
         const currentItem = JSON.parse(localStorage.getItem("authenticated"));
         currentItem.isAuth = true;
         localStorage.setItem("authenticated", JSON.stringify(currentItem));
      }
   };

   return (
      <div>
         <LoginContainer>
            <Header>Please, login with your account</Header>
            <Form onSubmit={handleLogin} className="login-form">
               <Label htmlFor="username">Username:</Label>
               <Input
                  type="text"
                  placeholder="User name"
                  name="username"
                  value={state.user?.name}
                  onChange={(e) => dispatch(updateUsername(e.target.value))}
               />
               <Label htmlFor="email">Email:</Label>
               <Input
                  type="email"
                  placeholder="Your email account"
                  name="email"
                  className="email-login"
                  value={state.user?.email}
                  onChange={(e) => dispatch(updateEmail(e.target.value))}
               />
               <Submit type="submit" value="Submit" />
            </Form>
         </LoginContainer>
      </div>
   );
};

export default Login;
