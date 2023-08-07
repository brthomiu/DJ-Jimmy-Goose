import React from "react";
import arrow from "../../assets/rightarrow.png";
import Image from "next/image";
type Props = {};

export default function Info({}: Props) {
  return (
    <div
      className="
        group
        relative left-0 
        w-6  
        mt-16 
        flex flex-col 
        justify-center items-center 
        z-20 
      bg-pink-100 bg-opacity-80 
        text-center 
        border-s-2 border-s-rose-300 border-opacity-20
        rounded-e-3xl shadow-2xl 
        hover:w-48
        transition-all duration-1000"
    >
      <h1
        className="
          scale-y-[600%] 
          z-10
          text-slate-700
          group-hover:opacity-0
          transition-all duration-1000"
      >
        {">"}
      </h1>
      {/* <Image src={arrow} alt="arrow" className="h-20 w-4 opacity-40 "></Image> */}
    </div>
  );
}
