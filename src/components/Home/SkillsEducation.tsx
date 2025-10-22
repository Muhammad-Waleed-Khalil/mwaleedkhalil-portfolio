"use client";
import React from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import { motion } from "framer-motion";
import Banner from "../Banner";
import Header2 from "../Header2";

function SkillsEducation() {
  const skills = {
    Frontend: [
      "React",
      "Next.js",
      "React Native",
      "Vue.js",
      "TailwindCSS",
      "TypeScript",
      "JavaScript",
    ],
    Backend: ["Node.js", "Laravel", "Express", "PHP", "REST APIs", "GraphQL"],
    "Database & DevOps": [
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgreSQL",
      "Docker",
      "Git",
      "CI/CD",
    ],
    "AI & Data": [
      "OpenAI API",
      "TensorFlow.js",
      "NLP",
      "Computer Vision",
      "Python",
    ],
  };

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "City University of Science & IT",
      duration: "2021 - 2025",
      gpa: "CGPA 3.66",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "KP Board of Technical Education",
      duration: "2023",
      gpa: "",
    },
  ];

  const appear = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <section className="py-[10vh]">
      {/* SKILLS SECTION */}
      <div className="mb-[15vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Header2 text="Skills & Expertise" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-lightText20 dark:border-darkText20 rounded-lg p-6 hover:border-lightText40 dark:hover:border-darkText40 transition-colors duration-300"
            >
              <h3
                className={`${spectralBridgeRegular.className} text-[24px] mb-4`}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Banner key={skill} text={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Header2 text="Education" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-lightText20 dark:border-darkText20 rounded-lg p-6 hover:border-lightText40 dark:hover:border-darkText40 transition-colors duration-300"
            >
              <h3
                className={`${spectralBridgeRegular.className} text-[22px] mb-2`}
              >
                {edu.degree}
              </h3>
              <p className="text-[16px] opacity-80 mb-1">{edu.institution}</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-[14px] opacity-60">{edu.duration}</p>
                {edu.gpa && <p className="text-[14px] opacity-60">{edu.gpa}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CV DOWNLOAD BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <a
          href="/mwaleedkhalil-resume.pdf"
          download="Muhammad_Waleed_Khalil_CV.pdf"
          className="px-8 py-4 bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg rounded-full text-[16px] font-medium hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download CV
        </a>
      </motion.div>
    </section>
  );
}

export default SkillsEducation;
