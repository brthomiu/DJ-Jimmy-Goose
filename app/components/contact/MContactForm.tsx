"use client";

import React from "react";

type Props = {};

export default function MContactForm({}: Props) {

  return (
    <form
      className="h-fill relative flex w-full flex-col  bg-opacity-80 p-4 text-slate-700"
    >
      <h2 className="ml-4 text-start text-white text-opacity-90 cursor-default">Name</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter a name"
        className="w-fill mx-4 mb-4 mt-2 h-10 rounded-lg bg-white p-2"
      ></input>
      <h2 className="ml-4 text-start text-white text-opacity-90 cursor-default">Email</h2>
      <input
        type="text"
        name="email"
        placeholder="Enter an email address"
        className="w-fill mx-4 mb-4 mt-2 h-10 rounded-lg bg-white p-2"
      ></input>
      <h2 className="ml-4 text-start text-white text-opacity-90 cursor-default">Message</h2>
      <textarea
        name="message"
        rows={4}
        placeholder="Enter a message for Jimmy"
        className="w-fill mx-4 mb-4 mt-2 rounded-lg bg-white p-2"
      ></textarea>
      <button
        type="submit"
        className="
        m-6
        h-12
        w-1/2 self-center rounded-xl
        bg-green-400
        bg-opacity-90 text-center
        text-lg
        font-bold
        text-slate-700 transition-all
        duration-200
        hover:scale-105
        active:scale-90
        "
      >
        Submit
      </button>
    </form>
  );
}
