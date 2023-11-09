"use client";
import venue from "../../assets/venue.jpeg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {};

export default function MGridItem3({}: Props) {
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
    [0, 0.4, 0.6, 1],
    [0, 0.0, 1, 1],
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 1, 1, 0.5],
  );
  const width1 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    ["85%", "60%", "40%", "15%"],
  );
  const width2 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    ["15%", "40%", "60%", "85%"],
  );

  return (
    <motion.div
      className="
        group -mt-[300px]
        flex h-[500px]
        max-w-5xl flex-col 
        justify-center
        "
      tabIndex={0}
    >
      
      <motion.div
        style={
          {
            //   scale: scale,
            //   opacity: opacity2,
          }
        }
        className="
          flex h-full 
          flex-row 
          bg-gray-900 
          "
      >
        <motion.div

        >
          <Image
            className="h-full max-h-96 object-cover"
            src={venue}
            alt="Wedding party"
          />
        </motion.div>
        <motion.div

        >

        </motion.div>
      </motion.div>

      <motion.div className="relative w-full bg-black text-center">
        <motion.h1
          style={{ opacity: opacity1 }}
          className="mt-12 cursor-default text-xl italic blur-none"
        >
          &quot;The soundtrack to our wedding was PERFECT!&quot;
        </motion.h1>
        <motion.h1
          style={{ opacity: opacity1 }}
          className="mb-12 mt-2 cursor-default text-lg italic blur-none"
        >
          - Riley S.
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
