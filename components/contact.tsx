"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import useSelectionHook from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
const   Contact=()=>{

    const { ref } = useSelectionHook("Contact");

    // const sendEmail=async (formData:FormData)=>{

    //   "use server"
    //    console.log("running on server ")
    //   console.log(formData.get("senderEmail"))
    //   console.log(formData.get("message"))
    // }
    return(
        <motion.section id='contact'   className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" ref={ref}
        initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <SectionHeading>Contact Me </SectionHeading>
          <p className="text-gray-700 -mt-6  dark:text-white/80  ">Please Contact Me directly at {''} <a
          className="underline" href="mailto:example@gmail.com"></a>{''}
          example@gmail.com or through this form.
          </p>
          <form     className="mt-10 flex flex-col dark:text-black  "  action={async(formData)=>{
            console.log("running on client ")
            console.log(formData.get("senderEmail"))
            console.log(formData.get("message"))
            const {data, error}=  await  sendEmail(formData)
            console.log("ehrererererhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
            console.log(error)
            if(error){
              toast.error(error)
              return 
            }

            toast.success("Email Send SuccesFully")

          }}>
            <input
            name='email'
            className="h-14 px-4 rounded-lg borderBlack dark:outline-none dark:bg-white dark:bg-opacity-80 transition-all "
             type="email"
             placeholder="email"
             required={true}
             maxLength={500}
             
            ></input>
            <textarea
            name='message'
            required={true}
            maxLength={500}
            placeholder="message"
            className="h-52 my-3 rounded-lg borderBlack  p-4  dark:outline-none  dark:bg-white dark:bg-opacity-80 transition-all"
            ></textarea>
          <SubmitBtn  />
          </form>
        </motion.section>
    )
}

export default Contact