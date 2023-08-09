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

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.17, 0.3, 0.4], [0.8, 1.3, 2, 2, 1]);

  const opacity = useTransform(scrollYProgress, [0, 0.13, 0.18, 0.3, 0.33], [0, 0, 1, 1, 0]);

  return (
    <motion.div style={{ scale: scale, opacity: opacity }}>
      <h1 className="text-center text-5xl font-bold text-slate-200">
        Testimonials
      </h1>
    </motion.div>
  );
}
