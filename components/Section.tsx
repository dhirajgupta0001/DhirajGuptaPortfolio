"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"section">;

export default function Section({ children, className = "", ...props }: Props) {
  return (
    <motion.section
      {...props}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
