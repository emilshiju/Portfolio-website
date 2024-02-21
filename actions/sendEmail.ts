"use server";
import React from "react";
import { Resend } from "resend";
import { validateString ,getErrorMessage} from "@/lib/utils";

import  ContactFormEmail from "@/email/contact-form-email"
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("running on server ");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid email",
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: "invalid message ",
    };
  }
  let data
  try {

    data = await resend.emails.send({
      from:"Contact Form <onboarding@resend.dev>",
      to: "emilshiju10@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });


  } catch (error:unknown) {
    
    // if(error instanceof Error){
      return {
        error:getErrorMessage(error)
      }
    // }
   
    console.log(error);
  }

  return {
    data
  }
};
