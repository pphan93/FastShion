import React from "react";
import styled from "styled-components";
import { catergories } from "../data";
import { mobile } from "../responsive";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {catergories.map((item) => {
        return <CategoriesItem key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Categories;
