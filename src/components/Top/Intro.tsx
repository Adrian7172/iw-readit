import React from "react";
import {CgArrowDown} from "react-icons/cg"

const Intro = () => {
  return (
    <div className="max-w-[1260px] m-auto px-2 sm:px-6 lg:px-8 relative">
      <section className="mt-[150px]  md:mt-[87px] absolute z-10 ">
        <h3 className="text-[18px] font-normal text-white z-10">Hello! Welcome to</h3>
        <h1 className="text-white text-[10vw] font-bold lg:mt-[-22px] mb-4 md:mb-0">Readit blog</h1>

        <h3 className="text-[18px] font-normal text-white md:w-[650px] lg:mt-[-15px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h3>
        <div className="">
            <CgArrowDown  className="text-white mt-10 w-12 h-12 animate-bounce"/>
        </div>
      </section>
    </div>
  );
};

export default Intro;
