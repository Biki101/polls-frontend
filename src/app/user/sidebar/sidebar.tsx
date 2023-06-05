import Image from "next/image";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { ImHome } from "react-icons/im";

const SideBar = () => {
  return (
    <div>
      <div className="h-[100px] overflow-hidden flex items-center">
        <img
          src="/assets/logo.png"
          alt="logo.png"
          width={1000}
          height={1000}
          className="h-auto w-[200px]"
        />
      </div>

      {/* ------- Navigations */}
      <ul className="flex flex-col text-xl text">
        <li className="flex items-center gap-3 px-5 py-1 rounded-lg hover:bg-[var(--secondary-color)] cursor-pointer">
          <ImHome /> Home
        </li>
        <li className="flex items-center gap-3">
          <BsPersonCircle /> Profile
        </li>
      </ul>
      {/* ------- Navigations End */}
    </div>
  );
};

export default SideBar;
