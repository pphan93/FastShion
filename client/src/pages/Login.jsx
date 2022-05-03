import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../lib/api";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Error = styled.span`
  color: red;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    color: red;
    cursor: not-allowed;
  }
`;

const LinkP = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={onSubmitHandler}>
            <Input
              placeholder="username"
              name="username"
              value={username}
              onChange={onChangeHandler}
            ></Input>
            <Input
              placeholder="password"
              name="password"
              value={password}
              onChange={onChangeHandler}
            ></Input>
            <Button disabled={isFetching}>Login</Button>
            {error && <Error>Something went wrong...</Error>}
            <LinkP>DONT REMEMBER PASSWORD</LinkP>

            <LinkP>
              <Link to="/register">CREATE NEW ACCOUNT </Link>
            </LinkP>
          </Form>
        </Wrapper>
      </Container>
    </Container>
  );
};

export default Login;
