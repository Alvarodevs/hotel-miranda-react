import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, Header, Form, Input, Submit } from "./LoginStyled";

const Login = ({setAuth}) => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    e.preventDefault();
    setUserLogin((userLogin) => ({
      ...userLogin,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userLogin.email === "alvaro@example.com" && userLogin.password === "1234") {
      setAuth({ 
			isAuth: true, 
			user: userLogin
		});
      navigate("/");
    } else {
      alert("Wrong email or password");
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
                    value={userLogin.email}
                    onChange={handleChange}
                 />
                 <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="passw-login"
                    value={userLogin.password}
                    onChange={handleChange}
                 />
                 <Submit type="submit" value="Submit" />
              </Form>
           </LoginContainer>
        </div>
     
  );
};

export default Login;
