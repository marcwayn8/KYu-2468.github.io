import { SingleProject } from "../components/Project";

const rfTrainingSGS = "./video/rfTrainingSGS.mp4";
const netflik = "./video/netflik.mp4";
const chartMyJog = "./video/chartMyJog.mp4";

// import emojiStore from "../assets/img/emoji-store.png";
// import dsa from "../assets/img/dsa.png";
// import portfolio from "../assets/img/portfolio.gif";

const projects: SingleProject[] = [
  {
    name: "NoNoiseNYC",
    description:
      "Created a Full-stack community-based networking application that allows users to interactively see noise pollution levels across  all five boroughs of New York City. Users are also able to post questions and privately chat with each other about how noise pollution affects their lives on a daily basis.. Users can also make complaints about noise pollution levels.",
    github: "https://github.com/NoNoise-NYC",
    website: "https://jamaicancoder.com",
    video: chartMyJog,
  },
  {
    name: "Marcy Chat",
    description:
      "Created a Full-stack social media application that made use of JWT(JSON web token) and asynchronous programming with technologies such as PSQL, Knex.js, and Node js where users were able to login securely and make posts that would be seen by the entire Marcy Lab School community",
    github: "https://github.com/KYu-2468/RF-Training",
    website: "https://jamaicancoder.com",
    video: rfTrainingSGS,
  },
  {
    name: "TechView",
    description:
      "Created a Full-stack community-based networking application that allows users to post questions and privately chat with each other about their interview process experiences in the tech industry. Users can share the technical interview questions they have been asked to solve or the most common behavioral interview questions they have been asked to help others prepare.",
      
    github: "https://github.com/techview-org",
    website: "https://techview-frontend.netlify.app/",
    video: netflik,
  },
  // {
  //   name: "Portfolio",
  //   description:
  //     "This portfolio website was built from scratch by Kevin Yu with TypeScript, React, Tailwind, and GitHub Pages.",
  //   github: "https://github.com/KYu-2468/KYu-2468.github.io",
  //   website: "https://kyu-2468.github.io/",
  //   image: portfolio,
  // },
  // {
  //   name: "Emoji Store",
  //   description:
  //     "An awesome E-commerce website built with React, Tailwind, Node.js, Express.js, PostgreSQL, React-three-fiber, Spline, and Stripe API! Users can purchase and sell emojis via our website. Payment methods are implemented using Stripe API.",
  //   github: "https://github.com/KYu-2468/EmojiStore",
  //   website: "#projects",
  //   image: emojiStore,
  // },
  // {
  //   name: "DSA",
  //   description:
  //     "An open source project that aims to help new software engineers learn how to contribute to open source projects through implementing efficient data structures and algorithms.",
  //   github: "https://github.com/MakeContributions/DSA",
  //   website: "#projects",
  //   image: dsa,
  // },
];

export default projects;
