import React from "react";
import backgroundImage from "../../assets/landing_page_cover.jpg";

const LandingPage = () => {
  return (
    <div
      className=" h-[500px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      LandingPage
    </div>
  );
};

export default LandingPage;
