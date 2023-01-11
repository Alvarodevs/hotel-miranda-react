import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/actions";
import LoginContext from "../../store/LoginContext";
import { LoginContainer, Header, Form, Input, Submit, Label } from "./LoginStyled";
import fetchApi from "../../features/fetchApi";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const [state, dispatch] = useContext(LoginContext);
	
   const handleLogin = async (e) => {
      e.preventDefault();
      const url = process.env.REACT_APP_URI

		const response = await fetch(url+"login", {
         method: "POST",
         mode: "cors",
         cache: "no-cache",
         credentials: "same-origin",
         headers: {
            "Content-Type": "application/json",
         },
         redirect: "follow",
         referrerPolicy: "no-referrer",  
         body: JSON.stringify({email: email, password: password}), 
      }); 

		const {token} = await response.json()

		if (token) {
			localStorage.setItem("token", token)
         dispatch(
            login({
               isAuth: true,
               user: {
                  email: state.user.email
               },
            })
         );
         toLocalStorage({
            ...state,
            isAuth: true,
         });
         navigate("/dashboard");
      } else {
         alert("Wrong email or password");
      }
   };

   const toLocalStorage = (user) => {
      if (!localStorage.getItem("authenticated")) {
         return localStorage.setItem("authenticated", JSON.stringify(user));
      } else {
         const currentItem = JSON.parse(localStorage.getItem("authenticated") || '');
         currentItem.isAuth = true;
         localStorage.setItem("authenticated", JSON.stringify(currentItem));
      }
   };

	console.log('STATE IN LOGIN', state)
   return (
      <div>
         <LoginContainer>
            <Header>Please, login with your account</Header>
            <Form onSubmit={handleLogin} className="login-form">
               <Label htmlFor="email">Email:</Label>
               <Input
                  type="email"
                  placeholder="Your email account"
                  name="email"
                  className="email-login"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Label htmlFor="password">Password:</Label>
               <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <Submit type="submit" value="Submit" />
            </Form>
         </LoginContainer>
      </div>
   );
};

export default Login;
