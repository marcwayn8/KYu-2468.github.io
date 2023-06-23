import React from "react";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import Title from "./Typography/Title";
import { infos,quotes } from "../data/about";
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
          Meet Wayne, a software engineer at Verisk Analytics with 2+ years in software engineering.
          A graduate from the Marcy Lab School Software Engineering Bootcamp, a 1-year alternative to college.Wayne currently ranks in the top 8.4% among 393,066 global
          contestants in LeetCode's Global Competitive programming competition.
          Wayne values collaboration, positivity, and a non-toxic work
          environment, and enjoys researching solutions and debugging. He's
          passionate about contributing to industries with a positive impact on
          people's well-being and could be a great addition to your team.
        </Content>

        <div className="h-9">
            <TypeAnimation
              className="text-xl md:text-3xl"
              sequence={[
                "👋 Hey there!",
                2000,
                "👈 I'm Wayne",
                2000,
                "I'm driven and enthusiastic 🧠",
                1000,
                "I'm a full stack engineer 📱",
                2000,
                "I'm fueled by curiosity and passion 🧐",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>
      </div>
    </div>
  );
};

export default About;

