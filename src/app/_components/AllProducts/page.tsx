import React from "react";
import { getAllProducts } from "../../api/allProducts.api";
import SingleProduct from "../singleProduct/page";

export default async function Products() {
  const data = await getAllProducts();
  console.log('currentProduct',data);

  return (
    <>
      <title>Products</title>
      <div className="w-[90%] mx-auto my-8">
        <div className="flex flex-wrap">
          {data.map((currentProduct: ProductType) => (
            <SingleProduct
              key={currentProduct.id}
              currentProduct={currentProduct}
            />
          ))}
        </div>
      </div>
    </>
  );
}