"use client";

import React, { useState } from "react";
import { Project } from "@/utils/projectsData";
import Image from "next/image";
import { satoshiLight, spectralBridgeRegular } from "@/fonts/font";
import { motion } from "framer-motion";
import Banner from "../Banner";

type Work = {
  readonly work: Project;
};

function IndividualWorkNew({ work }: Work) {
  const [isHovered, setIsHovered] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function windowMouse(e: React.MouseEvent<HTMLDivElement>) {
    setX(e.clientX);
    setY(e.clientY);
  }

  return (
    <div
      className={`flex justify-center ${
        work?.id === 1 ? "md:justify-start" : work?.id % 2 === 0 ? "md:justify-end" : "md:justify-start"
      } mb-[15vw]`}
    >
      <div className="w-full sm:max-w-[60vw] md:max-w-[35vw] border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-lg">
        <a
          href={work?.website || work?.github || "#"}
          target={work?.website || work?.github ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={windowMouse}
            className={`${
              isHovered ? "cursor-none" : "cursor-default"
            } relative w-full h-[300px] md:h-[350px] object-cover overflow-hidden group rounded-lg`}
          >
            <WorkHover x={x} y={y} isHovered={isHovered} />
            <Image
              src={work?.image}
              alt={`${work?.title} project`}
              fill
              className="object-cover group-hover:scale-105 duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 35vw"
            />
          </div>
        </a>
        <div className="flex flex-row-reverse justify-between items-start mt-3">
          <p className="text-sm opacity-70">{work?.year}</p>
          <h5 className={`${spectralBridgeRegular.className} text-[36px] md:text-[40px] leading-tight font-bold`}>
            {work?.title}
          </h5>
        </div>
        <p className="text-sm md:text-base opacity-80 mt-2 leading-relaxed bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
          {work?.description}
        </p>
        <div className="flex gap-x-2 gap-y-2 items-center flex-wrap mt-3">
          {work?.technologies?.slice(0, 5).map((tech) => {
            return (
              <div key={tech} className="">
                <Banner text={tech} />
              </div>
            );
          })}
          {work?.technologies && work.technologies.length > 5 && (
            <span className="text-xs opacity-60">+{work.technologies.length - 5} more</span>
          )}
        </div>
        {(work?.website || work?.github) && (
          <div className="flex gap-3 mt-4">
            {work?.website && (
              <a
                href={work.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:opacity-70 transition-opacity"
              >
                View Live →
              </a>
            )}
            {work?.github && (
              <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:opacity-70 transition-opacity"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function WorkHover({
  isHovered,
  x,
  y,
}: {
  isHovered: boolean;
  x: number;
  y: number;
}) {
  return (
    <motion.div
      initial={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.5 : 1 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        scale: isHovered ? 1 : 0.5,
        x: x,
        y: y,
      }}
      transition={{ duration: 0.5 }}
      className={`${
        isHovered ? "visible" : "invisible"
      } z-[88] fixed top-0 left-0 pointer-events-none flex justify-center items-center w-[9em] h-[9em] rounded-full bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg`}
    >
      <div className="overflow-hidden">
        <div className="flex flex-nowrap gap-8 animate-carousel">
          {[
            "View Project",
            "View Project",
            "View Project",
            "View Project",
            "View Project",
            "View Project",
            "View Project",
            "View Project",
            "View Project",
          ].map((word, i) => {
            return (
              <p
                key={`${word}_${i}`}
                className={`${satoshiLight.className} whitespace-nowrap text-[20px]`}
              >
                {word}
              </p>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default IndividualWorkNew;
