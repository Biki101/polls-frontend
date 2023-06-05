import Image from "next/image";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { ImHome } from "react-icons/im";

const SideBar = () => {
  return (
    <div>
      <div className=" overflow-hidden flex  justify-center">
        <img
          src="/assets/logo.png"
          alt="logo.png"
          width={1000}
          height={1000}
          className="h-auto w-[110px] rounded-full"
        />
      </div>

      {/* ------- Navigations */}
      <ul className="flex flex-col text-2xl items-center justify-between h-[300px] gap-5 mt-10 p-5 rounded-xl bg-white">
        <span className="flex flex-col items-center gap-5 w-full">
          <li className="flex items-center gap-3 px-5 py-1 rounded-lg cursor-pointer bg-green-600 text-white w-full">
            <ImHome /> Home
          </li>
          <li className="flex items-center gap-3 px-5 py-1 rounded-lg cursor-pointer bg-orange-600 text-white w-full">
            <BsPersonCircle /> Profile
          </li>
        </span>
        <li className="flex items-center gap-3 px-5 py-1 rounded-lg cursor-pointer bg-orange-600 text-white w-full">
          <FiSettings /> Settings
        </li>
      </ul>
      {/* ------- Navigations End */}
    </div>
  );
};

export default SideBar;
