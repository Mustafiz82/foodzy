import React from "react";
import bgImg from "../../assets/home/Background.png";
import bannerImage from "../../assets/home/bannerImage.png";
import { FaArrowRight } from "react-icons/fa";
import discount from "../../assets/home/50_percent_off.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url('${bgImg}')` }}
      className=" flex items-center justify-between p-16 bg-center bg-cover"
    >
      <div className="relative">
        <div className="text-white space-y-2 mx-10 max-w-[400px]">
          <h3 className="text-white/70">Super Delicious</h3>
          <h1 className="text-5xl font-bold">
            The best way to stuff your wallet.
          </h1>
          <h3 className="text-white/70">Todays Best Deal</h3>
          <button className="mt-5 bg-[#CD7A1D] pr-8 gap-2 p-2 rounded-full flex items-center">
            <div className="bg-white p-2 text-black rounded-full">
              <FaArrowRight />
            </div>
            Order Now
          </button>
        </div>

        <div className="absolute -right-40 -bottom-10">
          <img src={discount} className="w-[70%]" alt="" />
        </div>
      </div>

      <div>
        <img src={bannerImage} className="h-[500px] w-auto" alt="" />
      </div>
    </div>
  );
};

export default Banner;
