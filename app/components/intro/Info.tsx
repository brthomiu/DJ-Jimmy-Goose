import React from "react";
import Awards from "./Awards";
import ContactButton from "./ContactButton";
type Props = {};

export default function Info({}: Props) {
  return (
    <div
      className="
        group
        relative
        left-0 z-40 
        mt-24  
        flex 
        w-6 cursor-pointer 
        flex-col items-center 
        justify-center 
        rounded-e-3xl border-s-2 
        border-s-rose-300 
        border-opacity-10 bg-pink-100 bg-opacity-80
        text-center shadow-2xl 
        transition-all
        duration-1000
        focus:w-[460px] focus:cursor-default
        2xl:mt-40
        "
      tabIndex={0}
    >
      <div
        className="
          absolute
          top-28 z-50 flex
          w-[360px]
          -translate-x-48 cursor-default flex-col
          gap-12
          justify-self-start
          text-slate-700
          opacity-0
          transition-all
          duration-1000
          group-focus:-translate-x-0 
          group-focus:opacity-100
          "
      >
        <p>
          Sed vel gravida nibh. Nunc sit amet ultrices urna. Sed varius leo
          neque, quis rhoncus libero pharetra a. Ut nunc erat, blandit sed
          rhoncus sit amet, blandit quis sem. Nullam ligula orci, commodo id
          metus vel, fringilla auctor urna. Sed vitae sem dapibus, maximus nisi
          id, lobortis felis.
        </p>
        <Awards />
        <div></div>
      </div>
      <h1
        className="
          absolute
          z-50 
          scale-y-[600%]
          text-slate-700
          transition-all
          duration-1000 group-focus:translate-x-[215px]"
      >
        {"||"}
      </h1>
    </div>
  );
}
