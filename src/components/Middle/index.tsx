import React, { useEffect, useState } from "react";
import Card from "../card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import sanityClient from "../../client";


const MiddleComponent = () => {
  const [allPost, setAllPost] = useState<any>(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        caption,
        Image
      }`
      )
      .then((data) => setAllPost(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className=" bg-white">
      <div className="max-w-[1260px] m-auto px-2 sm:px-6 lg:px-8 mt-28">
        {allPost?.map((data: any) =>{
          return <Card {...data}/>;
        })}
        <ul className="w-full h-[40px] mt-24 mb-32  flex items-center justify-center">
          <li className="w-[40px] h-full rounded-full border-solid border-2 ml-1 text-text-color6 flex items-center justify-center cursor-pointer">
            <a href="/">
              <AiOutlineLeft className="w-4 h-4" />
            </a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-white flex items-center justify-center bg-text-color3 cursor-pointer">
            <a href="/"> 1</a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-text-color6 flex items-center justify-center cursor-pointer">
            <a href="/">2</a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-text-color6 flex items-center justify-center cursor-pointer">
            <a href="/">3</a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-text-color6 flex items-center justify-center cursor-pointer">
            <a href="/">4</a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-text-color6 flex items-center justify-center">
            <a href="/">5</a>
          </li>
          <li className="w-[40px] h-full rounded-full border-solid border-[1px] ml-1 text-text-color6 flex items-center justify-center">
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
