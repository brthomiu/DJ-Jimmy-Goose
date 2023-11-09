import React from "react";
import MContactForm from "./MContactForm";

type Props = {};

export default function MContact({}: Props) {
  return (
    <section
      className="-mt-60 mb-24 flex flex-col items-center justify-center text-center"
    >
      <div id="m-contact" className="-translate-y-24"></div>

<div className="flex flex-col justify-start w-[90%] text-start ml-[5%]">     
      <h2 className="mb-4 text-2xl font-bold">Contact</h2>
      <div className="mb-8 h-[2px] w-[95%] bg-white" />
      </div>
      <MContactForm />
    </section>
  );
}
