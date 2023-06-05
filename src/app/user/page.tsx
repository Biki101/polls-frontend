import Image from "next/image";
import React from "react";
import SideBar from "./sidebar/sidebar";
import PollsFeed from "./PollsFeed/PollsFeed";
import TopPolls from "./TopPolls/TopPolls";

const UserPage = () => {
  return (
    <div className="w-[1500px] m-auto">
      <div className="h-[100vh] m-auto   p-5 flex ">
        {/* -------- Background Image---------- */}

        {/* ----------- Side Bar ----------- */}
        <div className=" p-5 w-[300px]">
          <SideBar />
        </div>
        {/* ----------- Side Bar End ----------- */}

        {/* ----------- Polls Feed----------- */}
        <div className=" p-5 flex-grow">
          <PollsFeed />
        </div>
        {/* ----------- Polls Feed ----------- */}

        {/* ----------- Top Polls ----------- */}
        <div className=" p-5 w-[400px]">
          <TopPolls />
        </div>
        {/* ----------- Top Polls End ----------- */}
      </div>
    </div>
  );
};

export default UserPage;
