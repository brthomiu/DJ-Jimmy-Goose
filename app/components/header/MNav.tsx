"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function MNav() {
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
        top-0 z-50 
        flex h-16 
        w-full
        flex-row items-center justify-between
        border-b border-slate-700
        bg-slate-900
        p-1 text-slate-100
        text-opacity-60
        "
      >
        <h3 className="ml-2 text-xl">DJ Jimmy Goose</h3>
        <button onClick={() => toggleMenu()}>
          <h2 className="mr-2 rotate-90 scale-y-150 text-4xl">III</h2>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className="
      fixed 
      top-0 z-50 
      flex h-16 
      w-full
      flex-row items-center justify-between
      border-b border-slate-700
      bg-slate-900
      p-1 text-slate-100
      text-opacity-60
      "
        >
          <h3 className="ml-2 text-xl">DJ Jimmy Goose</h3>
          <button
            onClick={() => toggleMenu()}
            className="absolute right-4 top-[60px]"
          >
            <h2 className="z-50 -mt-12 scale-x-150 text-4xl">X</h2>
          </button>
        </div>
        <motion.div
          className="h-fill fixed right-0 top-0 z-[45] mt-12 w-full border-x border-b border-slate-700 bg-slate-800"
          initial={{ translateY: -200, opacity: 0 }}
          animate={{ translateY: 14, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="sticky mb-6 flex h-56 w-full flex-col justify-around px-6 text-center text-xl">
            <Link onClick={() => toggleMenu()} href="/#about">
              About
            </Link>
            <Link onClick={() => toggleMenu()} href="/#m-testimonials">
              Testimonials
            </Link>
            <Link onClick={() => toggleMenu()} href="/#m-contact">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }
}
