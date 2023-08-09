"use client";

import venue from "../../assets/venue.jpeg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {};

export default function GridItem3({}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [1, 1.25, 1.25, 1],
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    [0, 1, 1, 0.5],
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [0, 1, 1, 0.5],
  );
  const width1 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    ["60%", "75%", "75%", "60%"],
  );
  const width2 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    ["40%", "25%", "25%", "40%"],
  );

  return (
    <motion.div
      className="
        group flex
        h-full 
        w-3/4 max-w-5xl 
        flex-row
        "
      tabIndex={0}
    >
      <motion.div
        ref={ref}
        style={{
          scale: scale,
          opacity: opacity1,
        }}
        className="
          absolute
          z-50 mt-72
        w-3/4 max-w-5xl 
          bg-black bg-opacity-60
          text-center 
          opacity-0 
          max-xl:mt-52
          "
      >
        <h1 className="text-4xl italic blur-none">
          &quot;The soundtrack to our wedding was PERFECT!&quot;
        </h1>
        <h1 className="mt-2 text-2xl italic blur-none">- Riley S.</h1>
      </motion.div>
      <motion.div
        style={{ scale: scale, opacity: opacity2 }}
        className="flex h-full flex-row bg-gray-900 opacity-60 group-focus:blur-none"
      >
        <Image
          className="h-full max-h-96 object-cover transition-all duration-1000"
          src={venue}
          alt="Wedding venue"
        />
      </motion.div>
    </motion.div>
  );
}
