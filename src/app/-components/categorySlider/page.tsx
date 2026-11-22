import { getAllCategories } from "@/app/api/allCategory.api";
import React from "react";
import Slidering from "../slidering/page";

export default async function CategorySlider() {
  const { data } = await getAllCategories();
  console.log("allCategories:", data);
  return (
    <>
     <div className="w-[90%] mx-auto my-5">
        <h2 className="tex-xl mb-4">Shop Popular Categories</h2>

        <Slidering data={data} />
      </div>  
    </>
  );
}
