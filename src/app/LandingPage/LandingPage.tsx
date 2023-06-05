import HeroSection from "@/components/MainSection/HeroSection";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Image from "next/image";
import React, { useState } from "react";
import Services from "../Services/Services";

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

        <div className="text-white flex justify-evenly">
          <HeroSection />
        </div>
      </div>
      {/* --------------Main Division ------------- */}
    </>
  );
};

export default LandingPage;
