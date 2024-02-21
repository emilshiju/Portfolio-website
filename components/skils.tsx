
"use client"

import React from "react";
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";

import { motion } from "framer-motion";
import useSelectionHook from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};


export default function Skills() {

  const { ref } = useSelectionHook("Skills");
  return (
    <section className=" mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40" id="skills" ref={ref} >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border  borderBlack/[0.1] rounded-xl px-5 py-3 dark:bg-white/10   dark:text-white/80 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
