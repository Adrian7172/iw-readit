import React from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";

const TopComponent = () => {
  return (
    <div className="bg-hero-pattern h-[100vh] bg-cover bg-little-top bg-no-repeat relative">
      <div className="w-full h-full bg-hero-gadient opacity-80 absolute z-0">
      </div>
        <Navbar />
        <Intro />
    </div>
  );
};

export default TopComponent;
