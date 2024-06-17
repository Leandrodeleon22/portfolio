"use client";

import React, { useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Wrapper from "./Wrapper";
import { sendEmail } from "@/lib/actions";
import emailjs from "@emailjs/browser";
import { usePathname, useRouter } from "next/navigation";
const Contact = () => {
  const ref = useRef(null);
  const pathName = usePathname();
  const { push } = useRouter();
  console.log(pathName);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = process.env.SEND_EMAIL_SERVICE_ID;
    const templateId = process.env.SEND_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.SEND_EMAIL_PUBLIC_KEY;

    // const templateParams = {
    //   from_name: name,
    //   from_email: email,
    //   to_name: "Leandro De Leon",
    //   message: message,
    // };

    const formData = new FormData(e.target);

    const data = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    const templateParams = {
      from_name: `${data.firstname} ${data.lastname}`,
      from_email: data.email,
      to_name: "Leandro De Leon",
      message: data.message,
    };
    // console.log(templateParams);

    // await emailjs.send(serviceId, templateId, templateParams, publicKey);

    try {
      push(`${pathName}?showDialog=y#contact`);
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      ref.current?.reset();
      // alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error: ", error);
      alert("Failed to send the message, please try again.");
    }
  };

  return (
    <Wrapper>
      <div className="font-extralight my-[15rem] pt-[7rem]" id="contact">
        <h1 className="text-[4.2rem]  text-[var(--neon-green-color)] ">
          Get in touch
        </h1>
        <p className="text-[2.4rem] font-extralight w-full text-center my-[2rem]">
          Feel free to reach out, whether you have a question, feedback or just
          want to say hello.
        </p>
        <form ref={ref} onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 w-3/4 mx-auto mt-16 ">
            <div className="w-full ">
              <label htmlFor="firstname" className="block text-[2.5rem] mb-3">
                Firstname
              </label>
              <input
                type="text"
                className="w-full h-[4.5rem] text-[var(--background-color)] text-[2rem] font-normal px-5"
                id="firstname"
                name="firstname"
                required
              />
            </div>

            <div className="w-full ">
              <label htmlFor="lastname" className="block text-[2.5rem] mb-3">
                Lastname
              </label>
              <input
                type="text"
                className="w-full h-[4.5rem] text-[var(--background-color)] text-[2rem] font-normal px-5"
                id="lastname"
                name="lastname"
                required
              />
            </div>

            <div className="w-full col-span-full">
              <label htmlFor="email" className="block text-[2.5rem] mb-3">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full h-[4.5rem] text-[var(--background-color)] text-[2rem] font-normal px-5"
              />
            </div>

            <div className="w-full col-span-full mb-10">
              <label htmlFor="subject" className="block text-[2.5rem] mb-3">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                className="w-full h-[4.5rem] text-[var(--background-color)] text-[2rem] font-normal px-5"
              />
            </div>
            <textarea
              required
              name="message"
              id="message"
              cols="100"
              rows="10"
              className="w-full col-span-full text-[var(--background-color)] text-[2rem] font-normal p-5 h-[30rem]"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="w-full flex justify-center mt-14 ">
            <button
              type="submit"
              className="bg-[var(--neon-green-color)]  rounded-lg text-[2.5rem] font-normal py-2 px-20 transition hover:ease-in-out hover:scale-[1.05]  hover:bg-green-500"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
