import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, Header, Form, Input, Submit } from "./LoginStyled";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    e.preventDefault();
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.email === "alvaro@example.com" && user.password === "1234") {
      localStorage.setItem("authenticated", JSON.stringify(user));
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
            value={user.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
			className="passw-login"
            value={user.password}
            onChange={handleChange}
          />
          <Submit type="submit" value="Submit" />
        </Form>
      </LoginContainer>
    </div>
  );
};

export default Login;
