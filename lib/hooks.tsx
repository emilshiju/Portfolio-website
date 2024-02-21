import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-section-context";

// import { links } from "@/lib/data";
// type sectionName=typeof links[number]["name"]

import type {sectionName } from "@/lib/type"

// type propsComing={
//     sectionNameValue:sectionName
// }

export default function useSelectionHook(SectionName:sectionName,threshold=0.75) {


  const { activeSection, setActiveSection,timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold
  });

  useEffect(()=>{
    if(inView && Date.now() - timeOfLastClick > 1000 ){
      setActiveSection(SectionName)
    }
  },[inView,setActiveSection,timeOfLastClick])  


      return {
        ref
      }
}
