import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";

import useHttp from "../hooks/useHttp";
import { getProducts } from "../lib/api";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFiltersProduct] = useState([]);
  const {
    sendRequest,
    status,
    data: loadedProducts,
    error,
  } = useHttp(getProducts, true);

  //get products
  useEffect(() => {
    sendRequest(cat);
  }, [sendRequest, cat]);

  //filtering item by category
  useEffect(() => {
    if (error) {
      return <p className="centered">{error}</p>;
    }
    if (status === "pending") {
      return <div className="centered">Loading...</div>;
    }
    cat &&
      setFiltersProduct(
        loadedProducts.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          })
        )
      );
  }, [status, loadedProducts, cat, filters, error]);

  //sort by price
  useEffect(() => {
    if (sort === "newest") {
      setFiltersProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFiltersProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFiltersProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (status === "pending") {
    return <div className="centered">Loading...</div>;
  }

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => {
            return <Product key={item._id} item={item} />;
          })
        : loadedProducts.slice(0, 8).map((item) => {
            return <Product key={item._id} item={item} />;
          })}
    </Container>
  );
};

export default Products;
