import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";
export default function SingleProduct({ currentProduct }) {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
        <div className="inner p-5">
          <Card className="w-full max-w-sm ring-0 hover:ring-1 hover:ring-green-600 transition-all duration-300 cursor-pointer group">
            <Link href={`/products/${currentProduct._id}`}>
              <CardHeader>
                <CardTitle>
                  <img
                    src={currentProduct.imageCover}
                    alt={currentProduct.title}
                  />
                </CardTitle>
                <CardDescription>
                  <h2 className="text-green-600 text-xl font-bold">
                    {currentProduct.category.name}
                  </h2>
                  <p className="text-black my-3 font-semibold">
                    {currentProduct.title}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="star-left ">
                      <span>{currentProduct.price}EGP</span>
                    </div>
                    <div className="star-right">
                      <span className="flex items-center">
                        {currentProduct.ratingsAverage}
                        <Star
                          size={16}
                          className="fill-yellow-300 text-yellow-300"
                        />
                      </span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Link>
            <Button className="w-full my-3 bg-green-500 hover:bg-green-600 transition-all duration-300 cursor-pointer hidden group-hover:block opacity-0 group-hover:opacity-100">
              Add to Cart
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
