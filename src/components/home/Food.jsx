import React from "react";
import food1 from "../../assets/home/food1.png";
import food2 from "../../assets/home/food2.png";
import food3 from "../../assets/home/food3.png";

const Food = () => {
  return (
    <div className="my-20 container px-10  mx-auto gap-5  grid grid-cols-4 ">
      <div className="">
        <img className="w-full" src={food1} alt="" />
      </div>
      <div className="">
        <img className="w-full" src={food2} alt="" />
      </div>
      <div className="col-span-2 relative">
        <img className="w-full" src={food3} alt="" />
        <div className="absolute  pt-10 space-y-2 top-20 right-5 w-fit p-5">
          <h2 className="font-semibold text-2xl font-poppins ">
            Organic & Healthy
 <br /> Vegetables
          </h2>
          <p className="text-black/70">
            <span className="font-bold text-xl text-primary">25%</span> off
          </p>
          <button className="btn bg-primary text-white">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
