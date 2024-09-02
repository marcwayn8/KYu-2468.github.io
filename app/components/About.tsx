import React from "react";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import Title from "./Typography/Title";

import { TypeAnimation } from "react-type-animation";

const profileImg = "./img/profile-img-square.webp.jpg";


const About = () => {
  return (
    <>
      <SectionTitle>About Jamaicancoder</SectionTitle>
      <div className="flex flex-wrap w-full h-full">
        <Image />
        <Info />
      </div>
    </>
  );
};

const Image = () => {
  return (
    <div className="flex items-center justify-center w-full md:ml-8 md:w-2/5">
      <img
        className="w-4/5 rounded-full shadow-2xl dark:shadow-white md:w-full shadow-black xl:w-4/5"
        src={profileImg}
        alt="profile"
      />
    </div>
  );
};

const Info = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto px-4 mt-4 md:w-1/2 md:px-12">
      <Title>Full-Stack Software Engineer</Title>
      <div className="flex flex-wrap">
        <Content>
          Meet Wayne, a Software Engineer at Verisk with 2+ years of experience in software engineering.
          Wayne values collaboration, positivity, and enjoys researching solutions and debugging. He is
          passionate about contributing to industries with a positive impact on
          people's well-being.Outside of work, I enjoy playing Soccer,reading 
          and volunteering.
        </Content>
 
      </div>
          </div>
  );
};

export default About;

