import React from "react";
import styled from "styled-components";
import {
  Search,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  margin: 5px;
`;

const Circle = styled.div`
  flex: 1;
  margin: 5px;
`;

const Info = styled.div`
  flex: 1;
  margin: 5px;
`;

const Image = styled.img`
  flex: 1;
  margin: 5px;
`;

const Icon = styled.div`
  flex: 1;
  margin: 5px;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
