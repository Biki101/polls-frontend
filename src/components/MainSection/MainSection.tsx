import React from "react";
import OurAim from "../OurAim/OurAim";
import SignInSignup from "../SignInSignUp/SignInSignup";

const MainSection = () => {
  return (
    <div className="flex flex-col w-full justify-center gap-20 mt-10 items-center">
      <OurAim />
      <SignInSignup />
    </div>
  );
};

export default MainSection;
