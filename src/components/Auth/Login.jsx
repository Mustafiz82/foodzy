import React, { useState } from "react";
import PageName from "../Shared/PageName";
import logo from "../../assets/Layout/logo.png";
import { Link } from "react-router";
import { IoIosEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [showPasword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email && !password) {
      return setError("Email and password are required");
    }

    setError("");

    console.log({ email, password });
  };

  return (
    <div className="flex text-black/70 py-20 justify-center items-center">
      <div className="max-w-lg w-full p-10  bg-white shadow-md ">
        <div className="flex justify-center items-center">
          <img src={logo} className="w-16" />
          <div>
            <h2 className="capitalize font-bold font-sans text-2xl">foodzy</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset mt-5">
            <legend className="fieldset-legend">Enter Your Email*</legend>
            <input
              type="text"
              required
              name="email"
              className="input focus:outline-0 focus:border-primary w-full"
              placeholder="Enter your Email"
            />
          </fieldset>
          <fieldset className="fieldset relative mt-2">
            <legend className="fieldset-legend ">Password*</legend>
            <input
              type={showPasword ? "text" : "password"}
              name="password"

              required
              className="input focus:outline-0 focus:border-primary w-full"
              placeholder="Enter your Password"
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute z-[50] right-3 text-lg top-3"
            >
              {showPasword ? <IoMdEyeOff /> : <IoIosEye />}
            </div>
          </fieldset>

          <div className="flex my-4 justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox rounded-sm checked:text-white checked:bg-primary"
              />
              Remember Me
            </div>

            <p>Forget Password</p>
          </div>
          <p className="my-2 text-red-500 ">{error}</p>
          <div className="flex my-4 mt-5 items-center justify-between">
            <button type="submit" className="btn btn-primary bg-primary">
              {" "}
              Login
            </button>

            <Link to={"/signup"}>Signup ?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
