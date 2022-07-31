import React from "react";
import Card from "../card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MiddleComponent = () => {
  return (
    <div className="h-[800px] bg-white">
      <div className="max-w-[1260px] m-auto px-2 sm:px-6 lg:px-8 mt-28">
        <Card />
        <ul className="w-full h-[40px] mt-32 flex items-center justify-center">
          <li className="w-[40px] h-full rounded-full border-solid border-2 ml-1 text-gray-400 flex items-center justify-center cursor-pointer">
            <a href="/">
              <AiOutlineLeft className="w-4 h-4" />
            </a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-white flex items-center justify-center bg-text-color3 cursor-pointer">
            <a href="/"> 1</a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-gray-400 flex items-center justify-center cursor-pointer">
            <a href="/">2</a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-gray-400 flex items-center justify-center cursor-pointer">
            <a href="/">3</a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-gray-400 flex items-center justify-center cursor-pointer">
            <a href="/">4</a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-gray-400 flex items-center justify-center">
            <a href="/">5</a>
          </li> 
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-gray-400 flex items-center justify-center">
            <a href="/">
              <AiOutlineRight className="w-4 h-4" />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MiddleComponent;
