import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  font-weight: 300;
  text-align: center;
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
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopTexts = styled.div``;
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
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
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
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
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
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
      </Wrapper>
      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <Image src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg" />

              <Details>
                <ProductName>
                  <b>Product: </b>ADIAS SHOE
                </ProductName>
                <ProductID>
                  <b>ID: </b>12312312
                </ProductID>
                <ProductColor color="black" />
                <ProductSize>
                  <b>Size: </b>8
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>2</ProductAmount>
                <Remove />
              </ProductAmountContainer>

              <ProductPrice>$ 30</ProductPrice>
            </PriceDetail>
          </Product>
          <Hr />
          <Product>
            <ProductDetail>
              <Image src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg" />

              <Details>
                <ProductName>
                  <b>Product: </b>ADIAS SHOE
                </ProductName>
                <ProductID>
                  <b>ID: </b>12312312
                </ProductID>
                <ProductColor color="black" />
                <ProductSize>
                  <b>Size: </b>8
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>2</ProductAmount>
                <Remove />
              </ProductAmountContainer>

              <ProductPrice>$ 30</ProductPrice>
            </PriceDetail>
          </Product>{" "}
        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$80</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$10</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$-10</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$80</SummaryItemPrice>
          </SummaryItem>

          <Button>CHECKOUT NOW</Button>
        </Summary>
      </Bottom>

      <Footer />
    </Container>
  );
};

export default Cart;
