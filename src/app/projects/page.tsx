"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Berkebun+",
    description: `Berkebun+ is an Android-based mobile application that helps users detect plant species using a camera and provides plant care information, 
    including weather features according to the user's location. This application is the result of multidisciplinary collaboration between the Mobile, 
    Machine Learning, and Cloud Computing teams. `,
    link: "https://youtu.be/Y-g4-8tU2Rk?si=C8MFQUHrByNu7zEk",
    images: [
      "/assets/projects-screenshots/first/berkebun+.png",
      "/assets/projects-screenshots/first/berkebun+.png",
    ],
  },
  {
    id: 2,
    name: "Web Plant Smart",
    description: `Web Detection Plant is a web-based application that allows users to upload images of plants to be detected using machine learning models. 
    This application has obtained HAKI certification as a form of intellectual property protection.?`,
    link: "https://github.com/vilixvoid/KPP-Deteksi-Tanaman",
    images: [
      "/assets/projects-screenshots/first/plantsmart.png",
      "/assets/projects-screenshots/first/plantsmart.png",
    ],
  },
  {
    id: 3,
    name: "HestaStore",
    description: `HestaStore is a fullstack ecommerce built using MERN technology. Where the frontend uses React, Tailwind, and Redux. 
    While the backend uses Node Js, Express, and MongoDB as the database.`,
    link: "https://github.com/vilixvoid/HestaStore-MERN",
    images: [
      "/assets/projects-screenshots/projects-screenshots/hestastore.png",
      "/assets/projects-screenshots/projects-screenshots/hestastore.png",
    ],
  },
  {
    id: 4,
    name: "SrikandiTravel",
    description: `This is a Flight Booking UI created using React and Tailwind CSS. It provides a sleek and user-friendly interface for users to search and book flights.`,
    link: "https://srikanditravel.vercel.app/",
    images: [
      "/assets/projects-screenshots/projects-screenshots/first/srikanditravel.ong",
       "/assets/projects-screenshots/projects-screenshots/first/srikanditravel.ong",

    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
