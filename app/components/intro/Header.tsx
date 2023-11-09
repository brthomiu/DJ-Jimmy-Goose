import React from "react";
import ContactButton from "./ContactButton";

type Props = {};

export default function Header({}: Props) {
  return (
    <div
      className="
        absolute 
        top-0 z-50 
        flex h-20 
        w-full
        flex-row items-center justify-between
        bg-pink-100
        bg-opacity-90
        p-1 text-slate-100
        text-opacity-60
        "
    >
      <h1 className="top-[24px] z-40 text-5xl font-bold text-slate-900 cursor-default sm:text-xl">
        Jimmy Goose • Wedding DJ
      </h1>
    <ContactButton />
    </div>
  );
}
