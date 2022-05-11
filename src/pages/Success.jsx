import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { clearCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  text-align: center;
  padding: 40px 0;
  background: #f5fafd;
`;

const Card = styled.div`
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #c8d0d8;
  display: inline-block;
  margin: 0 auto;
`;

const CheckMarkContainer = styled.div`
  border-radius: 200px;
  height: 200px;
  width: 200px;
  background: #f8faf5;
  margin: 0 auto;
`;

const CheckMark = styled.i`
  color: #007373;
  font-size: 100px;
  line-height: 200px;
  margin-left: -15px;
`;

const SuccessMessage = styled.h1`
  color: #007373;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
`;

const MessageBody = styled.p`
  color: #404f5e;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  margin: 0;
`;

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);
  dispatch(clearCart());
  const location = useLocation();

  //will redirect after 5 second on page load
  useEffect(() => {
    // setTimeout(() => {
    //   navigate("/");
    // }, 5000);

    let interval = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }

      if (counter <= 0) {
        clearInterval(interval);
        navigate("/");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <>
      <NavBar />
      <Announcement />
      <Container>
        <Card>
          <CheckMarkContainer>
            <CheckMark>✓</CheckMark>
          </CheckMarkContainer>
          <SuccessMessage>Success</SuccessMessage>
          <MessageBody>
            We will send you a shipping confirmation email as soon as your order
            ships.
            <br /> We will take you back to home page in {counter} seconds or
            please click
            <Link to="/"> here</Link>.
          </MessageBody>
          {/* Order have been completed. We will email your order when it have been
          shipped. We will take you back to home page in {counter} seconds or
          please click
          <Link to="/"> here</Link>. */}
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Success;
