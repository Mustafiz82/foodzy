import React from "react";
import image from "../../assets/home/deals-bg.jpg";
const Deals = () => {
  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className={`my-20 py-20 w-full bg-cover bg-fixed h-[600px] `}
    >
      <div className="  container px-10 mx-auto   ">
       <div className="max-w-[600px] bg-white space-y-2 p-5 rouned-md">
         <h2 className="text-xl font-semibold text-primary">25% off</h2>
        <h2 className="text-4xl  font-semibold font-poppins">Great Deals on organic food.</h2>

        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          maecenas accumsan lacus vel facilisis.
        </p>

        <div className="border text-center w-fit p-4 flex items-center gap-4 border-[#E9CBBE]">

            <div>
                <h2 className="text-2xl font-bold">326 </h2>
                <p>
                    Days
                </p>
            </div>
            <p className="text-4xl ">:</p>

            <div>
                <h2 className="text-2xl font-bold">326 </h2>
                <p>
                    Hrs
                </p>
            </div>
            <p className="text-4xl ">:</p>

            <div>
                <h2 className="text-2xl font-bold">326 </h2>
                <p>
                    Min
                </p>
            </div>
            <p className="text-4xl ">:</p>

            <div>
                <h2 className="text-2xl font-bold">326 </h2>
                <p>
                    sec
                </p>
            </div>
            

        </div>
       </div>
      </div>
    </div>
  );
};

export default Deals;
