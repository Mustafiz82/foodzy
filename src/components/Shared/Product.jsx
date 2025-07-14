import React from "react";
import { BsBagDash } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import Rating from "react-rating";

const Product = ({ item }) => {
  return (
    <div className="p-4 border-[#E9E9E9] border ">
      <div className="relative">
        <img className="w-full" src={item?.image}  alt="" />
        <div className="absolute p-2 rounded-full -bottom-3 left-1/2 text-primary -translate-x-1/2 bg-[#E9E9E9]">
          <BsBagDash />
        </div>
      </div>
      <div className="p-5 space-y-2 text-center">
        <p>Vegetables</p>
        <div className="flex items-center gap-1 justify-center">
          <Rating
            emptySymbol={<IoStarOutline className="text-primary" />}
            fullSymbol={<IoIosStar className="text-primary" />}
            readonly
            initialRating={4}
          />
          <span className="text-black/70">({item.rating})</span>
        </div>

        <h2 className="text-2xl font-medium font-poppins">
          Fresh organic villa farm lomon 500gm pack
        </h2>

        <div className="flex justify-center items-center gap-3">
          <span className="font-bold text-primary text-[28px]"> $120.25</span>
          <del className=" text-black/70 text-xl "> $120.25</del>
        </div>
      </div>
    </div>
  );
};

export default Product;
