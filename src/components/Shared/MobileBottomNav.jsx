import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const MobileBottomNav = () => {
  return (
    <ul className="flex lg:hidden !z-[999] justify-between px-4 text-white bg-primary fixed w-full bottom-0 py-3 gap-5">
      <li className="flex flex-1 flex-col  items-center gap-2">
        <FaHome className="text-2xl" /> Home{" "}
      </li>
      <li className="flex flex-1 flex-col  items-center gap-2">
        <FaUser  className="text-2xl" /> Account{" "}
      </li>
      <li className="flex flex-1 flex-col  items-center gap-2">
        <FaHeart className="text-2xl" /> WishList{" "}
      </li>
      <li className="flex flex-1  flex-col  items-center gap-2">
        <FaShoppingCart className="text-2xl" /> Cart{" "}
      </li>
    </ul>
  );
};

export default MobileBottomNav;
