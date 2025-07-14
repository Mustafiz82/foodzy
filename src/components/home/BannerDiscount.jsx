import React from "react";
import banner1 from "../../assets/home/banner1.png";

const BannerDiscount = () => {
  return (
    <div className="mt-20 grid grid-cols-3 gap-6 container px-10 mx-auto">
      <div className="relative ">
        <img src={banner1} className="w-full" alt="" />
        <div className="absolute pt-10 space-y-2 top-0 w-full p-5">
          <h2 className="font-semibold text-2xl font-poppins ">Healthy <br /> Bakery Products</h2>
          <p className="text-black/70"><span className="font-bold text-xl text-primary">30%</span> off the first order</p>
            <button className="btn bg-primary text-white">Shop Now</button>
        </div>
      </div>
      <div className="relative ">
        <img src={banner1} className="w-full" alt="" />
        <div className="absolute pt-10 space-y-2 top-0 w-full p-5">
          <h2 className="font-semibold text-2xl font-poppins ">Healthy <br /> Bakery Products</h2>
          <p className="text-black/70"><span className="font-bold text-xl text-primary">30%</span> off the first order</p>
            <button className="btn bg-primary text-white">Shop Now</button>
        </div>
      </div>
      <div className="relative ">
        <img src={banner1} className="w-full" alt="" />
        <div className="absolute pt-10 space-y-2 top-0 w-full p-5">
          <h2 className="font-semibold text-2xl font-poppins ">Healthy <br /> Bakery Products</h2>
          <p className="text-black/70"><span className="font-bold text-xl text-primary">30%</span> off the first order</p>
            <button className="btn bg-primary text-white">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default BannerDiscount;
