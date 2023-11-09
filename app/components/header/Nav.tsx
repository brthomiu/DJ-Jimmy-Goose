"use client";
import { useState } from "react";
import Link from "next/link";

type Props = {};

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  if (!menuOpen) {
    return (
      <div
        className="
        fixed 
        top-0 z-30 
        flex h-12 
        w-full
        flex-row items-center justify-between
        border-b border-slate-700
        bg-slate-900
        bg-opacity-80
        p-1 text-slate-100
        text-opacity-60
        "
      >
        <h3 className="ml-2 text-3xl">Jimmy Goose • Wedding DJ</h3>
        <button onClick={() => toggleMenu()}>
          <h2 className="mr-2 rotate-90 text-4xl">III</h2>
        </button>
      </div>
    );
  } else {
    return (
      <div
        className="
      fixed 
      top-0 z-30 
      flex h-12 
      w-full
      flex-row items-center justify-between
      border-b border-slate-700
      bg-slate-900
      bg-opacity-80
      p-1 text-slate-100
      text-opacity-60
      "
      >
        <h3 className="ml-2 text-3xl">Jimmy Goose • Wedding DJ</h3>
        <div className="h-fill absolute right-0 top-0 z-20 mt-12 bg-slate-800 border-slate-700 border-x border-b">
          <button onClick={() => toggleMenu()}>
            <h2 className="absolute right-4 top-1 z-50 -mt-12 scale-x-125 text-4xl">
              X
            </h2>
          </button>
          <div className="flex flex-col justify-between px-6 mb-6 h-48 w-fill text-xl">
          <Link onClick={() => toggleMenu()} href="/#top">
            About
          </Link>
          <Link onClick={() => toggleMenu()} href="/#testimonials">
            Testimonials
          </Link>
          <Link onClick={() => toggleMenu()} href="/#contact">
            Contact
          </Link>

          </div>
        </div>
      </div>
    );
  }
}
