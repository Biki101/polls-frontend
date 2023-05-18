import Image from "next/image";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="text-white flex justify-between pt-10 items-center">
      {/* -----------logo------------ */}
      <Image
        src="/assets/logo.png"
        alt="logo"
        width={100}
        height={120}
        className="border-b-2 rounded-full border-green-600 w-[100px] h-[100px] p-2"
      />
      {/* -----------logo end--------- */}
      {/* ------------linkes ----------- */}
      <ul className="flex text-xl gap-5 h-[50px] items-center">
        <li className="bg-slate-400 px-5 py-1 rounded-lg hover:bg-slate-700 cursor-pointer">
          Home
        </li>
        <li className="bg-slate-400 px-5 py-1 rounded-lg hover:bg-slate-700 cursor-pointer">
          Services
        </li>
        <li className="bg-slate-400 px-5 py-1 rounded-lg hover:bg-slate-700 cursor-pointer">
          About Us
        </li>
        <li className="bg-slate-400 px-5 py-1 rounded-lg hover:bg-slate-700 cursor-pointer">
          Blog
        </li>
        <li className="bg-slate-400 px-5 py-1 rounded-lg hover:bg-slate-700 cursor-pointer">
          Contact
        </li>
      </ul>
      {/* -------------------links end -------------- */}
    </div>
  );
};

export default NavigationBar;
