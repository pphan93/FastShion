import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

import useHttp from "../hooks/useHttp";
import { getProductDetail } from "../lib/api";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: opx 5px;
`;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[2];
  const [quantity, setQuanity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();

  const {
    sendRequest,
    status,
    data: loadedProduct,
    error,
  } = useHttp(getProductDetail, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const quantityAddHandler = () => {
    setQuanity(quantity + 1);
  };

  const quantityRemoveHandler = () => {
    if (quantity > 1) {
      setQuanity(quantity - 1);
    }
  };

  const onSizeHandler = (e) => {
    setSize(e.target.value);
  };

  //Add to cart button
  const onAddHandler = () => {
    dispatch(
      addProduct({
        ...loadedProduct,
        quantity,
        size: [size],
        color: [color],
      })
    );
  };

  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (status === "pending") {
    return <div className="centered">Loading...</div>;
  }

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={loadedProduct.img} />
        </ImgContainer>

        <InfoContainer>
          <Title>{loadedProduct.title} </Title>{" "}
          <Desc>{loadedProduct.desc} </Desc>
          <Price>${loadedProduct.price} </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {loadedProduct.color.map((color, idx) => {
                return (
                  <FilterColor
                    onClick={() => {
                      setColor(color);
                    }}
                    key={idx}
                    color={color}
                  />
                );
              })}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onClick={onSizeHandler}>
                {loadedProduct.size.map((size, idx) => {
                  return <FilterSizeOption key={idx}>{size}</FilterSizeOption>;
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={quantityRemoveHandler} />
              <Amount>{quantity}</Amount>
              <Add onClick={quantityAddHandler} />
            </AmountContainer>

            <Button onClick={onAddHandler}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
