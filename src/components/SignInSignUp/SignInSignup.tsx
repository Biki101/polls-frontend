import React, { useState } from "react";

const SignInSignup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
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
  );
};

export default SignInSignup;
