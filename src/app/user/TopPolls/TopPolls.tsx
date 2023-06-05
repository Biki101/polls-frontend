import React from "react";
import { FiSearch } from "react-icons/fi";
const TopPolls = () => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg text-xl">
      <div>
        <FiSearch className="" />
      </div>
      <input
        type="text"
        placeholder="Search Polls"
        className="bg-gray-100 outline-none opacity-60"
      />
    </div>
  );
};

export default TopPolls;
