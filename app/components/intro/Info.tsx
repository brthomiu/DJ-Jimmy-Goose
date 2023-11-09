import React from "react";
import Awards from "./Awards";
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
        3xl:mt-72
        4xl:mt-96
        "
      tabIndex={0}
    >
      <div
        className="
          top-22
          absolute z-50 flex
          w-[360px]
          -translate-x-48 cursor-default flex-col
          gap-8
          justify-self-start
          text-slate-700
          opacity-0
          transition-all
          duration-1000
          group-focus:-translate-x-0 
          group-focus:opacity-100
          "
      >
        <h2 className="text-xl font-bold">Meet DJ Jimmy Goose</h2>
        <p className="break-normal text-justify">
          The premier choice for unforgettable weddings and events. With an
          award-winning flair for creating magical musical landscapes, DJ Jimmy
          Goose turns your wedding into an enchanting symphony of love and joy.
          Dance the night away to his tunes and experience the wedding of your
          dreams.
        </p>
        <Awards />
        <div></div>
      </div>
      <h1
        className="
          absolute
          z-50 
          scale-y-[600%]
          select-none
          text-slate-700
          transition-all duration-1000
          group-focus:translate-x-[215px]
          "
      >
        {"||"}
      </h1>
    </div>
  );
}
