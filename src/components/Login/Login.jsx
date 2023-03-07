import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/actions";
import LoginContext from "../../store/LoginContext";
import { LoginContainer, Header, Form, Input, Submit, Label } from "./LoginStyled";
//import fetchApi from "../../features/fetchApi";

const Login = () => {
	const [emailInput, setEmailInput] = useState("");
	const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const [state, dispatch] = useContext(LoginContext);
	
   const handleLogin = async (e) => {
      e.preventDefault();
      const url = process.env.REACT_APP_API
		const response = await fetch(url+"login", {
         method: "POST",
         //mode: "no-cors",
         cache: "no-cache",
         credentials: "same-origin",
         headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
         },
         redirect: "follow",
         referrerPolicy: "no-referrer",  
         body: JSON.stringify({email: emailInput, password: password}), 
      }); 
      
      const {token, user} = await response.json()
      
      if (token) {
			localStorage.setItem("token", token)
         dispatch(
            login({
               isAuth: true,
               user: {
                  email: user.email,
                  name: user.name,
               },
            })
         );
         
         toLocalStorage({
            ...state
         });
         navigate("/");
      } else {
         alert("Wrong email or password");
      }
   };

   const toLocalStorage = (user) => {
      console.log(user)
      if (!localStorage.getItem("authenticated")) {
         const userLogged = {...user, isAuth: true}
         return localStorage.setItem("authenticated", JSON.stringify(userLogged));
      } else {
         const currentItem = JSON.parse(localStorage.getItem("authenticated") || '');
         console.log(localStorage);
         currentItem.isAuth = true;
         localStorage.setItem("authenticated", JSON.stringify(currentItem));
      }
   };

   return (
      <div>
         <LoginContainer>
            <Header>Please, login with your account</Header>
            <Form onSubmit={handleLogin} className="login-form">
               <Label htmlFor="email">Email:</Label>
               <Input
                  type="email"
                  placeholder="alvaro@example.com"
                  name="email"
                  className="email-login"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
               />
               <Label htmlFor="password">Password:</Label>
               <Input
                  type="password"
                  placeholder="1234"
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
