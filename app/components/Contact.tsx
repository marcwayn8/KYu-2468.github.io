import React from "react";
import SectionTitle from "./Typography/SectionTitle";
import Calendly from "./Calendly";
import ContactButton from "./Button/ContactButton";

const Contact = () => {
  return (
    <>
      <SectionTitle>Contact</SectionTitle>
      <div className="pb-12 mx-6 text-lg md:mx-16 md:text-xl">
        Schedule a 20-minute coffee chat below! I'm always excited to meet new
        people and learn about their experiences and perspectives. I look
        forward to meeting you soon!
      </div>

      <div className="flex flex-wrap m-4 mb-6 flex-start justify-evenly ">
        <Calendly />
        <ContactButton
          text="Linkedin"
          textColor="text-white"
          buttonColor="bg-sky-600"
          linkURL="https://www.linkedin.com/in/waynemarch/"
        />

        <ContactButton
          text="GitHub"
          textColor="text-white"
          buttonColor="bg-black dark:bg-neutral-800"
          linkURL="https://github.com/marcwayn8"
        />
        <ContactButton
          text="Real Estate"
          textColor="text-white"
          buttonColor="bg-green-600"
          linkURL="https://waynemarch.kw.com"
        />
        <ContactButton
          text="Fiverr"
          textColor="text-white"
          buttonColor="bg-sky-600"
          linkURL="https://www.fiverr.com/s/YR0Glaz"
        />
         <ContactButton
          text="Youtube"
          textColor="text-white"
          buttonColor="bg-green-600"
          linkURL="https://youtube.com/@jamaicancoder6278?si=BkN8poPlOYqcvifQ"
        />
         {/* <ContactButton
          text="TikTok"
          textColor="text-white"
          buttonColor="bg-green-600"
          linkURL="tiktok.com/@juniormarch"
        /> */}
         <div className="pb-12 mx-6 text-lg md:mx-16 md:text-xl">
        Business Email: marcwayn84@gmail.com
        Business Phone: (347) 670-4768
        Business Address: 2810 N Church St #270756, Wilmington Delaware
      </div>
      </div>
    </>
  );
};

export default Contact;
