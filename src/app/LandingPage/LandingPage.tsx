import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Image
        src="/assets/landingpage1.jpg"
        alt="Landing page Cover"
        className="w-[100vw] h-[100vh] absolute z-[-1]"
        width={2400}
        height={1200}
      />
      {/* ------------ Main Division ------------*/}
      <div className="mx-[200px]">
        {/* -------------Navigation Bar --------- */}
        <NavigationBar />
        {/* -------------Navigation Bar End--------- */}
      </div>
      {/* --------------Main Division ------------- */}
    </>
  );
};

export default LandingPage;
