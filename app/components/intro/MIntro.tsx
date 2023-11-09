"use client";

import Image from "next/image";
import background from "../../assets/background.jpeg";
import MPortrait from "./MPortrait";
import MInfo from "./MInfo";

type Props = {};

export default function MIntro({}: Props) {
  return (
    <section id="top" className="z-30 mt-4">
      <div
        className="
          z-30 flex flex-col sm:mx-[20%]
          items-center justify-center
          "
      >
        <div className="flex flex-col">
          <MPortrait />
          <MInfo />
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

    </section>
  );
}
