import { Add, Remove, DeleteForeverOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { payment } from "../lib/api";
import { loadStripe } from "@stripe/stripe-js";
import { removeProduct, updateQuanity } from "../redux/cartRedux";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "../components/CheckoutForm";

// const KEY = process.env.REACT_APP_STRIPE;
// const stripePromise = loadStripe(KEY);

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  font-weight: 300;
  text-align: center;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
    background-color: #007373;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: "100px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductName = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
`;
const ProductID = styled.div``;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 2px 0px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span``;
const SummaryItemText = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #007373;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // const [stripeToken, setStripeToken] = useState(null);
  // const [clientSecret, setClientSecret] = useState("");

  // const navigate = useNavigate();

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };

  const onCheckoutHandler = async () => {
    try {
      const res = await payment({
        cart: cart,
      });

      const data = await res;
      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const removeProductHandler = (id) => {
    dispatch(
      removeProduct({
        _id: id,
      })
    );
  };

  const quantityHandler = (condition, id) => {
    dispatch(
      updateQuanity({
        condition: condition,
        _id: id,
      })
    );
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart.quantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => {
              return (
                <Product key={product._id}>
                  <ProductDetail>
                    <Image src={product.img} />

                    <Details>
                      <ProductName>
                        <b>Product: </b>
                        {product.title}
                      </ProductName>
                      <ProductID>
                        <b>ID: </b>
                        {product._id}
                      </ProductID>
                      <Filter>
                        {product.color.map((color, idx) => {
                          return <ProductColor key={idx} color={color} />;
                        })}
                      </Filter>
                      <ProductSize>
                        <b>Size: </b>
                        {product.size.join(",")}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add
                        onClick={() => {
                          quantityHandler("+", product._id);
                        }}
                      />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove
                        onClick={() => {
                          quantityHandler("-", product._id);
                        }}
                      />
                    </ProductAmountContainer>

                    <ProductPrice>$ {product.price}</ProductPrice>
                    <DeleteForeverOutlined
                      onClick={() => removeProductHandler(product._id)}
                    />
                  </PriceDetail>
                </Product>
              );
            })}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            {/* <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$-10</SummaryItemPrice>
            </SummaryItem> */}
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>

            <Button onClick={onCheckoutHandler}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
