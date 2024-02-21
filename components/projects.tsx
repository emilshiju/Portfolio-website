"use client";

import React, { useEffect } from "react";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-section-context";
import Project from "./project";

import { motion, useScroll, useTransform } from "framer-motion";

import useSelectionHook from "@/lib/hooks";

export default function Projects() {

  //  const {activeSection,setActiveSection,timeOfLastClick} =useActiveSectionContext()
  //  const {ref,inView }= useInView({
  //    threshold:0.5
  //  });
  //  useEffect(()=>{
  //    if(inView&& Date.now() - timeOfLastClick >1000 ){
  //      setActiveSection('Projects')
  //    }
  //  },[inView,setActiveSection])

  const { ref } = useSelectionHook("Projects", 0.5);

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <>
            <Project {...project} key={index} />
          </>
        ))}
      </div>
    </section>
  );
}
