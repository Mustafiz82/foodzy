import React from "react";
import { BsBagDash } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import Rating from "react-rating";

const Product = ({ item }) => {
  return (
    <div className="p-4 border-[#E9E9E9] border ">
      <div className="relative">
        <img className="" src={item?.image} alt="" />
        <div className="absolute p-2 rounded-full -bottom-3 left-1/2 text-primary -translate-x-1/2 bg-[#E9E9E9]">
          <BsBagDash />
        </div>
      </div>
      <div>
        <p>Vegetables</p>
        <div>
          <Rating
            emptySymbol={<IoStarOutline className="text-primary" />}
            fullSymbol={<IoIosStar className="text-primary" />}
            readonly
            initialRating={4}
          />
          <span className="text-black/70">({item.rating})</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
