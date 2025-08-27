import React from "react";
import { FiFilter } from "react-icons/fi";
import { LuLayoutList } from "react-icons/lu";
import { MdOutlineGridOn, MdOutlineKeyboardArrowDown } from "react-icons/md";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Product = () => {
  const filterCategory = [
    {
      name: "Juice  & Drinks ",
      productCount: 20,
    },
    {
      name: "Dairy & Milk",
      productCount: 54,
    },
    {
      name: "Snack and spices",
      productCount: 64,
    },
  ];
  const filterColor = [
    {
      name: "Blue",
      value: "#0000FF",
    },
    {
      name: "Red",
      value: "#FF0000",
    },
    {
      name: "Green",
      value: "#00FF00",
    },
  ];
  const filterWeight = [
    {
      name: "2kg pack",
      value: "2kg",
    },
    {
      name: "20kg pack",
      value: "20kg",
    },
    {
      name: "30kg pack",
      value: "30kg",
    },
  ];

  const tags = [
    "vegetables",
    "Dry Fruits",
    "Juice",
     "Dry Fruits",
    "vegetables",
   
    "Juice",
  ];
  return (
    <div className="container pt-20 flex gap-5 w-full items-start  mx-auto px-10  my-10">
      {/* filter */}
      <div className="bg-[#E9E9E9] p-5  h-full w-1/4">
        <h1 className="text-xl font-semibold font-poppins">
          Product Category{" "}
        </h1>

        <ul className="space-y-2 my-5 text-lg">
          {/* filter by Category */}
          {filterCategory.map((item, index) => (
            <li className="flex justify-between items-center" key={index}>
              <p className="flex gap-2">
                <input
                  className="checkbox bg-white checked:bg-white"
                  type="checkbox"
                />
                <span>{item.name}</span>
              </p>
              <span>[{item.productCount}]</span>
            </li>
          ))}
        </ul>

        {/* Filter by price */}

        <h1 className="text-xl mt-10 font-semibold font-poppins">
          Filter by Price{" "}
        </h1>
        <div className="mt-10">
          <RangeSlider
            onInput={(value) => {
              console.log(value);
            }}
            className="bg-primary"
            max={500}
          />
        </div>

        <h1 className="text-xl mt-10 font-semibold font-poppins">
          Product Color{" "}
        </h1>

        <ul className="space-y-2 my-5 text-lg">
          {/* filter by Category */}
          {filterColor.map((item, index) => (
            <li className="flex justify-between items-center" key={index}>
              <p className="flex gap-2">
                <input
                  className="checkbox bg-white checked:bg-white"
                  type="checkbox"
                />
                <span>{item.name}</span>
              </p>
              <span
                className="w-5 h-5 "
                style={{ backgroundColor: item?.value }}
              ></span>
            </li>
          ))}
        </ul>
        <h1 className="text-xl mt-10 font-semibold font-poppins">
          Product Color{" "}
        </h1>

        <ul className="space-y-2 my-5 text-lg">
          {/* filter by Category */}
          {filterWeight.map((item, index) => (
            <li className="flex justify-between items-center" key={index}>
              <p className="flex gap-2">
                <input
                  className="checkbox bg-white checked:bg-white"
                  type="checkbox"
                />
                <span>{item.name}</span>
              </p>
            </li>
          ))}
        </ul>

        <h1 className="text-xl mt-10 font-semibold font-poppins">
          Product Tags{" "}
        </h1>

        <div className="flex max-w-[80%]  mt-5 gap-5 flex-wrap">
          {tags.map((item, index) => {
            return <p className="px-4 py-2 bg-white text-black/70 ">{item}</p>;
          })}
        </div>
      </div>

      {/* product grid */}
      <div className="p-2  w-3/4 flex justify-between items-center bg-[#E9E9E9]">
        <div className=" flex gap-2">
          <FiFilter className="bg-white p-1 text-3xl rounded-md" />
          <MdOutlineGridOn className="bg-white p-1 text-3xl rounded-md" />
          <LuLayoutList className="bg-white p-1 text-3xl rounded-md" />
          <p className="text-black/70 ml-10">We found 29 items for you</p>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-white text-black/70 m-1"
            >
              Sort By : Featured{" "}
              <MdOutlineKeyboardArrowDown className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>price (Acceding)</a>
              </li>
              <li>
                <a>price (Descending)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
