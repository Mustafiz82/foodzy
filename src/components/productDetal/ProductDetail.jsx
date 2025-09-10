import React, { useState } from "react";
import image from "../../assets/home/product2.png";
import product1 from "../../assets/product/product1.png";
import product2 from "../../assets/product//product2.png";
import product3 from "../../assets/product/product3png.png";
import Rating from "react-rating";
import { GoStar, GoStarFill } from "react-icons/go";

const ProductDetail = () => {

    const [selectedImage , setSelectedImage] = useState(image)

  return (
    <div className="container mx-auto">
      <div className="w-full my-20 flex gap-5">
        <div className="flex-1">
          <img className=" w-full " src={selectedImage} alt="" />
          <div className="flex gap-5 mt-5">
            <img onClick={() => setSelectedImage(product1)} className="w-32" src={product1} alt="" />
            <img onClick={() =>  setSelectedImage(product2)} className="w-32" src={product2} alt="" />
            <img onClick={() =>  setSelectedImage(product3)} className="w-32" src={product3} alt="" />
            <img onClick={() =>  setSelectedImage(product1)} className="w-32" src={product1} alt="" />
            <img onClick={() =>  setSelectedImage(product2)} className="w-32" src={product2} alt="" />
          </div>
        </div>

        <div className="flex-1 p-4">
          <h1 className="text-3xl ">Seeds Of Change Oraganic Quinoa, Brown</h1>

          <p className="text-lg mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            adipisci delectus neque illum quia ratione nemo voluptates provident
            quaerat impedit quibusdam iste modi saepe, cumque laborum sunt atque
            veniam ipsa.
          </p>

          <hr className="my-10" />

          <div className="flex items-center gap-2">
            <Rating
              emptySymbol={<GoStar className="text-2xl text-primary" />}
              fullSymbol={<GoStarFill className="text-2xl text-primary" />}
              initialRating={4}
              readonly
            />

            <span className="text-black/70">(75 Review)</span>
          </div>

          <h2 className="mt-4">
            {" "}
            <span className="font-semibold">Brand :</span> ESTA BETTERU CO
          </h2>
          <h2 className="mt-4">
            {" "}
            <span className="font-semibold">Flavour :</span> ESTA BETTERU CO
          </h2>
          <h2 className="mt-4">
            {" "}
            <span className="font-semibold">Diet Type :</span> ESTA BETTERU CO
          </h2>
          <h2 className="mt-4">
            {" "}
            <span className="font-semibold">Weight :</span> ESTA BETTERU CO
          </h2>
          <h2 className="mt-4">
            {" "}
            <span className="font-semibold">Speciality :</span> ESTA BETTERU CO
          </h2>
          <h2 className="mt-4">
            {" "}
            <span className="font-semibold">Info :</span> ESTA BETTERU CO
          </h2>
          <h2 className="mt-4">
            {" "}
            <span className="font-semibold">Items :</span> ESTA BETTERU CO
          </h2>

          <div className="flex gap-2 items-end">
            <h1 className="text-primary mt-5 text-3xl font-semibold">
              $120.25
            </h1>
            <del className="text-black/70 text-2xl ">$200</del>
          </div>

          <div className="flex mt-5  gap-5">
            <h1 className="text-2xl font-semibold ">Size/Weight :</h1>
            <div className="space-x-2">
              <button className="btn btn-primary rounded-lg bg-primary text-white">
                50kg
              </button>
              <button className="btn btn-outline rounded-lg text-primary ">
                80kg
              </button>
              <button className="btn btn-outline rounded-lg text-primary">
                120Kg
              </button>
              <button className="btn btn-outline rounded-lg text-primary">
                200kg
              </button>
            </div>
          </div>

         <div className="flex my-5 gap-5">
             <div className="flex gap-1 items-center ">
            <span className="btn btn-outline btn-xl text-black/70">1</span>
            <div className="flex flex-col w-fit">
              <span className="btn  btn-sm btn-outline  text-black/70">+</span>
              <span className="btn btn-sm btn-outline  text-black/70">-</span>
            </div>
          </div>

          <button className="btn btn-primary  text-2xl px-8 py-8 text-white">Add To Cart</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
