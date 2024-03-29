import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AppwriteApp from "@/public/AppwriteApp.png";
import analytic from "@/public/analytic.png";
import Shopping_cart from "@/public/Shopping_cart.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Samarpan High School",
    location: "Gujarat, India",
    description:
      "i studied my 11th and 12th here, and also learned coding and programming",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Freecodecamp.org",
    location: "Youtube",
    description:
      " i learned web development from Youtube and other more channels, after 6 month of completing, i found intern role.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
  },
  {
    title: "Software Engineer Intern",
    location: "Bangalore, India",
    description:
      "Conducted code reviews and redesigned an API to enhance flexibility for third-party integration. • Implemented performance optimizations using React.js,Node.js and Express.js resulting in a reduction in load times and enhanced user experience. • collaborated on implementing new features and resolving bugs in existing codebases.",
    icon: React.createElement(FaReact),
    date: "jan-2021 - july-2021",
  },
  {
    title: "Associate Software Engineer",
    location: "Bangalore, India",
    description:
      "Collaborating as part of a cross-functional team and contributed to the development of a web application using MERN stack, driving improvements in scalability and user engagement. • Utilized application to streamline state management and data querying processes, leading to 30% increment in application efficiency and smoother navigation. • Orchestrated seamless API integrations, leveraging Databases to ensure   Smooth data flow and fortify system resilience",
    icon: React.createElement(FaReact),
    date: "july-2021 - july-2022",
  },
  {
    title: "Software Engineer",
    location: "Bangalore, India",
    description:
      "Built data-rich dashboard, seamlessly integrating Databases. Empowering users with actionable insights for informed decision-making. • Conceived and introduced the Automated Email Response System, which reduced response time to 1,000s email messages by 71%, resulting in increased email open rates and driving significant user interaction with the platform. • Implemented authentication for user account security, allowing seamless integration with email/password or Google provider, enhancing user data protection and platform trust. • Integrated wallet functionality into the payment feature, facilitating effortless fund management for users, thereby encouraging repeat transactions and strengthening user relationships. now days, looking for job whoch have remote culture.",
    icon: React.createElement(FaReact),
    date: "July-2022 - Jan-2024",
  },
] as const;

export const projectsData = [
  {
    title: "NextAuth App",
    description:
      "Integrate secure user authentication into your Next.js web applications Appwrite, an open-source backend server. ",
    tags: ["Next.js", "AppWrite", "Tailwind"],
    imageUrl: AppwriteApp,
  },
  {
    title: "Anylytics Dashboard",
    description:
      "Build Dashboard, seamlessly integrating Databases. Empowering users with actionable insights for informed decision-making.",
    tags: ["React", "TypeScript", "MongoDB","Next.js", "Tailwind"],
    imageUrl: analytic,
  },  
  {
    title: "Shopping Cart",
    description:
      "A web App for shopping with excellent features like searching, filtering, Sorting according to Customer",
    tags: ["Reducer","React","Context API"],
    imageUrl: Shopping_cart,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Docker",
  "Kubarnates",
  "AWS",
  "Redux",
  "SQL",
  "GraphQL",
  "Git",
  "Tailwind",
  "MongoDB",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "HTML",
  "CSS",
] as const;
