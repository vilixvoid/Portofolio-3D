import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiAndroidstudio,
  SiKotlin,
  SiGooglecloud,
  SiTensorflow,
  SiFlask
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  android_studio:{
    title: "Android-Studio",
    bg: "black",
    fg: "white",
    icon: <SiAndroidstudio/>,
  },
  kotlin:{
    title: "Android-Studio",
    bg: "black",
    fg: "white",
    icon: <SiKotlin/>,
  },
  googlecloud:{
    title: "Google-Cloud",
    bg: "black",
    fg: "white",
    icon: <SiGooglecloud/>,
  },
  tensorflow:{
    title: "Tensorflow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow/>,
  },
  flask:{
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
skills: {
  frontend?: Skill[];
  backend?: Skill[];
  mobile?: Skill[];
  machinelearning?: Skill[];
};
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // +
  { // 01. Plansmart
    id: "plansmart",
    category: "Web and AI",
    title: "PlantSmart",
    src: "/assets/projects-screenshots/first/plantsmart.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "",
    github:"https://github.com/vilixvoid/KPP-Deteksi-Tanaman",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
      ],
      machinelearning: [
        PROJECT_SKILLS.tensorflow
      ]
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
           Web Detection Plant is a web-based application that allows users to upload images of plants to be detected using machine learning models. 
           This application has obtained HAKI certification as a form of intellectual property protection.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/plantsmart/1.png`,
              `${BASE_PATH}/plantsmart/2.png`,
              `${BASE_PATH}/plantsmart/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. Capstone Project Berkebun+
    id: "berkebun+",
    category: "Mobile and AI",
    title: "Berkebun+ : Capstone Project at Bangkit Academy",
    src: "/assets/projects-screenshots/first/berkebun+.png",
    screenshots: ["/assets/projects-screenshots/berkebun+/1.png"],
    skills: {
      mobile: [PROJECT_SKILLS.kotlin,PROJECT_SKILLS.android_studio],
      backend: [PROJECT_SKILLS.js,PROJECT_SKILLS.node,PROJECT_SKILLS.firebase, PROJECT_SKILLS.googlecloud],
      machinelearning: [PROJECT_SKILLS.tensorflow],
    },
    live: "https://youtu.be/Y-g4-8tU2Rk?si=C8MFQUHrByNu7zEk",
    github: "https://github.com/orgs/CP-Berkebun/repositories",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Berkebun+ : Capstone Project at Bangkit Academy
          </TypographyP>
          <TypographyP className="font-mono ">
            Berkebun+ is an Android-based mobile application that helps users detect plant species using a camera and provides plant care information, 
            including weather features according to the users location. This application is the result of multidisciplinary collaboration between the Mobile, 
            Machine Learning, and Cloud Computing teams. 
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Workflow</TypographyH3>
          <p className="font-mono mb-2">
            The Berkebun+ project integrates three key technology areas: Machine Learning, Cloud Computing, 
            and Mobile Development to create an intelligent solution to detect plant diseases through leaf images.
            The process starts from model training, deployment to the cloud, to implementation to a mobile application that is easily accessible to end users.
            This demonstrates efficient and modern cross-technology collaboration in building AI-based applications.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/berkebun+/1.png`,
              `${BASE_PATH}/berkebun+/workflow/1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Tect Mobile</TypographyH3>
          <p className="font-mono mb-2">
          Berkebun+ app is built with a modern approach using Kotlin and MVVM architecture. 
          It utilizes powerful libraries such as CameraX, Retrofit, Glide, and Firebase to support image capture, 
          backend communication, media management, and cloud services. This approach results in an application that is modular, 
          responsive, and easy to develop further.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/berkebun+/2.png`,
              `${BASE_PATH}/berkebun+/3.png`,
              `${BASE_PATH}/berkebun+/4.png`,
              `${BASE_PATH}/berkebun+/5.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Architecture Cloud</TypographyH3>

          <p className="font-mono mb-2">
            The architecture of Gardening+ is built on Google Cloud services end-to-end. 
            The backend connects users with AI models, image storage, and databases in an efficient and integrated manner, 
            allowing the application to run in real-time and scalable.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/berkebun+/cc/1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Processing Model</TypographyH3>
          <p className="font-mono mb-2">
            Data collection and pre-processing were systematically conducted to support the development of an image-based plant disease classification model. 
            The dataset was obtained from Kaggle and included 9 plant species with a total of 45 disease/health subcategories.
            To improve the accuracy of the model, data augmentation was performed until each subcategory had about 2,000 images. 
            Furthermore, the dataset was divided into train (80%), validation (10%), and test (10%), ensuring an optimal and scalable model training process.
          </p>
          <SlideShow images={[
                `${BASE_PATH}/berkebun+/ml/1.png`,
                `${BASE_PATH}/berkebun+/ml/2.png`,
            ]} />
        </div>
      );
    },
  },
  { // 03. Ecommerce Hestastore
    id: "hestastore",
    category: "Ecommerce",
    title: "Hestastore",
    src: "/assets/projects-screenshots/first/hestastore.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "",
    github:"https://github.com/vilixvoid/HestaStore-MERN",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my store.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
          HestaStore is a fullstack ecommerce built using MERN technology. 
          Where the frontend uses React, Tailwind, and Redux. While the backend uses Node Js, 
          Express, and MongoDB as the database.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/hestastore/1.png`,
              `${BASE_PATH}/hestastore/2.png`,
              `${BASE_PATH}/hestastore/3.png`,
              `${BASE_PATH}/hestastore/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 04. Srikandi Travel
    id: "srikanditravel",
    category: "Web Travel",
    title: "SrikandiTravel",
    src: "/assets/projects-screenshots/first/srikanditravel.png",
    screenshots: ["01.jpeg", "03.png"],
    live: "https://srikanditravel.vercel.app/",
    github:"https://github.com/vilixvoid/srikanditravel",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          This is a Flight Booking UI created using React and Tailwind CSS. It provides a sleek and user-friendly interface for users to search and book flights.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/srikanditravel/1.png`,
              `${BASE_PATH}/srikanditravel/2.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
