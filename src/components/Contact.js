import React from "react";
import Wrapper from "./Wrapper";

const Contact = () => {
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
        <form action="">
          <div className="grid grid-cols-2 gap-6 w-3/4 mx-auto mt-16 ">
            <div className="w-full ">
              <label htmlFor="firstname" className="block text-[2.5rem] mb-3">
                Firstname
              </label>
              <input
                type="text"
                className="w-full h-[4.5rem] text-[var(--background-color)] text-[2rem] font-normal px-5"
                id="firstname"
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
              />
            </div>

            <div className="w-full col-span-full">
              <label htmlFor="email" className="block text-[2.5rem] mb-3">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full h-[4.5rem] text-[var(--background-color)] text-[2rem] font-normal px-5"
              />
            </div>

            <div className="w-full col-span-full">
              <label htmlFor="subject" className="block text-[2.5rem] mb-3">
                Subject
              </label>
              <input
                id="subject"
                type="email"
                required
                className="w-full h-[4.5rem] text-[var(--background-color)] text-[2rem] font-normal px-5"
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols="100"
              rows="10"
              className="w-full col-span-full text-[var(--background-color)] text-[2rem] font-normal px-5 h-[30rem]"
              placeholder="Your message"
            ></textarea>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
