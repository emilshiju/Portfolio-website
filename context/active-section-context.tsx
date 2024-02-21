"use client";

import React,{useState,createContext,useContext} from "react";
import { links } from "@/lib/data";

import type {sectionName } from "@/lib/type"

// type sectionName=typeof links[number]["name"]

type typescriptprops={
    children:React.ReactNode
}

type typescriptcontext={
    activeSection:sectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>;
    timeOfLastClick:number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext=createContext<typescriptcontext | null>(null)

export default function AciveSectionContextProvider({children}:typescriptprops){
    const [activeSection,setActiveSection]=useState<sectionName>('Home')

    const [timeOfLastClick,setTimeOfLastClick]=useState(0)
    return (
    <ActiveSectionContext.Provider value={{activeSection,setActiveSection,timeOfLastClick,setTimeOfLastClick}}>
        {children}
    </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext(){

    // the initial stage was null give error thas why like this

    const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;

}