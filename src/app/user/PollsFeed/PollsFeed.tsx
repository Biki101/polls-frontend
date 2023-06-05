import React from "react";
import { BsImages, BsPersonCircle } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BiPoll } from "react-icons/bi";

const PollsFeed = () => {
  return (
    <div className="text-xl flex gap-10 ">
      <BsPersonCircle className="text-5xl text-green-600" />
      <div className="flex flex-col gap-5 flex-grow">
        <textarea
          name=""
          id=""
          placeholder="Poll Description..."
          className="bg-gray-100 outline-none p-5 h-100px rounded-xl"
        ></textarea>
        <span className="flex items-center gap-3 text-2xl self-end">
          <BsImages />
          <MdLocationPin />
          <BiPoll />
        </span>
      </div>
    </div>
  );
};

export default PollsFeed;
