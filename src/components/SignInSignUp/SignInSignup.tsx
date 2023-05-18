import React, { useState } from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const SignInSignup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      {/* ---------------login form------------ */}
      <form className="border-yellow-500 border-[1px] p-5 flex flex-col gap-3 rounded-md">
        <span>Welcome to Polls</span>
        {/* ----------------Username ------------- */}
        <input
          type="text"
          value={userName}
          placeholder="Username"
          onChange={(e: any) => {
            setUserName(e.target.value);
          }}
          className="bg-gray-600 px-3 p-2"
          required
        />
        {/*-------------------- username end -------------------- */}
        {/* -----------------Password -------------------*/}
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
          className="bg-gray-600  px-3 py-2"
          required
          minLength={5}
        />
        {/* -----------------Password End -------------------*/}
        {/* ------------- Login ------------------ */}
        <button
          type="submit"
          className="w-full text-center text-sm py-1 bg-green-600"
        >
          Log In
        </button>
        {/* --------------Login end -------------- */}
      </form>
      {/* ---------------login form end------------ */}
      {/* --------------social login----------------- */}
      <div className="flex gap-5 text-white text-3xl">
        <BsFacebook className="hover:text-blue-400 cursor-pointer" />
        <BsTwitter className="hover:text-blue-400 cursor-pointer" />
        <AiFillInstagram className="hover:text-blue-400 cursor-pointer" />
      </div>
      {/* --------------social login end----------------- */}
      {/* ---------------Sign Up------------------ */}
      <span>
        Dont have an account?{" "}
        <strong className="underline cursor-pointer">Sign Up</strong>
      </span>
      {/* ---------------Sign Up End------------------ */}
    </>
  );
};

export default SignInSignup;
