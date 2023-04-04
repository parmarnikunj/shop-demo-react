import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./App";
import Product from "./Product";

const Products = () => {
  const { products, setProducts } = useContext(ShopContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const produsJson = res.data;
      const prodDict = {};
      produsJson.map((prod) => {
        prodDict[prod.id] = prod;
      });
      setProducts(prodDict);
    });
  }, []);

  return (
    <div>
      {Object.entries(products).map(([_, product]) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default Products;
