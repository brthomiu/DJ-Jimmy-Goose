"use client";

import dj1 from "../../assets/dj1.png";
import party3 from "../../assets/party3.jpeg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {};

export default function GridItem2({}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [1, 1.25, 1.25, 1],
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 1, 1, 0.5],
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 1, 1, 0.5],
  );
  const width1 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ["60%", "75%", "75%", "60%"],
  );
  const width2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["40%", "25%", "25%", "40%"],
  );

  return (
    <motion.div
      className="
        group
        flex h-full 
        w-3/4 
        max-w-5xl flex-row 
        justify-center
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
        <motion.h1 className="text-4xl italic blur-none cursor-default">
          &quot;The reception was a blast thanks to Jimmy.&quot;
        </motion.h1>
        <motion.h1 className="mt-2 text-2xl italic blur-none cursor-default">
          - Michelle H.
        </motion.h1>
      </motion.div>
      <motion.div
        style={{
          scale: scale,
          opacity: opacity2,
        }}
        className="
          flex h-full 
          flex-row 
          bg-gray-900 
          opacity-60 
          "
      >
        <motion.div
          style={{
            width: width1,
          }}
        >
          <Image
            className="h-full max-h-96 object-cover"
            src={party3}
            alt="Wedding party"
          />
        </motion.div>
        <motion.div
          style={{
            width: width2,
          }}
        >
          <Image
            className="h-full max-h-96 object-cover"
            src={dj1}
            alt="Wedding DJ"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
