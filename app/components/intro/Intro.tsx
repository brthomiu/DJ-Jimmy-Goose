"use client";

import Image from "next/image";
import background from "../../assets/background.jpeg";
import Portrait from "./Portrait";
import Info from "./Info";
import Header from "./Header";

type Props = {};

export default function Intro({}: Props) {
  return (
    <div className="z-30 mt-4">
      <div
        className="
          z-30 flex flex-col
          items-center justify-center
          "
      >
        <Header />
        <div className="flex flex-row">
          <Portrait />
          <Info />
        </div>
      </div>
      <div
        className="
          absolute top-0 z-30
          h-full w-full 
        bg-gray-900 
          opacity-10
          "
      ></div>
      <Image
        className="
          absolute top-0 z-30
          h-full 
          object-cover 
          blur-sm
          "
        alt="Wedding venue"
        src={background}
      />
      </div>
  );
}
