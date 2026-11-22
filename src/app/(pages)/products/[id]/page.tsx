import React from "react";
import { getProductDetails } from "@/app/api/productDetail.api";
import SwiperSlider from "@/app/-components/swiperSlider/page";


export default async function productDetail({ params } : { params: { id: string } }) {
  let { id } = await params;

  let product = await getProductDetails(id);
  

  return (
    <>
     <SwiperSlider data={product} />
    </>
  );
}
