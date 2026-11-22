import React from "react";
import { getAllProducts } from "../api/allProducts.api";
import SingleProduct from "../-components/singleProduct/page";
import AllProducts from "../-components/AllProducts/page";



export default async function Products() {
  
  console.log(data);

  return (
    <>
      <title>Products</title>
      <AllProducts />
    </>
  );
}
