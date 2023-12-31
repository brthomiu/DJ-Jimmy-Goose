"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {};

export default function GridHeader({}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 2, 2, 1]);

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div style={{ scale: scale, opacity: opacity }}>
      <h1 ref={ref} className="text-center text-5xl font-bold text-slate-200 cursor-default">
        Testimonials
      </h1>
    </motion.div>
  );
}
