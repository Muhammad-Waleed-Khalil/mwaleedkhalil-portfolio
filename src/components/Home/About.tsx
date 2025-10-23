"use client";
import React, { useRef } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
// Using Unsplash images for tech-themed visuals
// import Image1 from "../../../public/images/general/home/about_image4.jpg";
// import Image2 from "../../../public/images/general/home/about_image3.jpg";
import Image from "next/image";
import Paragraph from "../Paragraph";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useInView } from "framer-motion";
// import Image3 from "../../../public/images/general/home/about_image6.jpg";
import Header3 from "../Header3";

function About() {
  const image1 = useRef(null);
  const image2Div = useRef(null);
  const image2 = useRef(null);

  const topRef = useRef(null);
  const top = useInView(topRef, { once: true });

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    var tl = gsap.timeline({
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image2Div.current,
        start: "top bottom",
        end: "+=3000px",
        scrub: true,
      },
    });

    tl.from(image2Div.current, {
      yPercent: 10,
    }).to(image2Div.current, {
      yPercent: -5,
    });
  });

  // fresh span
  const topline1 = "I specialize in building scalable,";
  // ideas span
  const topline2 = "intelligent solutions that deliver";
  // deliver span
  const bottomline1 = "measurable impact through";
  // finish span
  const bottomline2 = "modern tech stacks and AI integration.";

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="py-[15vh]">
      <div>
        <div className="">
          <Header3 phrase={topline1} />
          <Header3 phrase={topline2} />
        </div>
        <div className="">
          <Header3 phrase={bottomline1} />
          <Header3 phrase={bottomline2} />
        </div>
      </div>
      <div className="mt-10 flex flex-col-reverse md:flex-row md:items-center gap-y-4 md:gap-y-0">
        <div className="md:flex-1 relative h-[400px] md:h-[500px] object-cover object-center overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
            alt="coding workspace with multiple screens displaying code"
            fill
            className="object-cover scale-110"
            ref={image1}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="md:flex-1 flex justify-center items-center">
          <div
            className="w-full h-[350px] md:h-[400px] md:w-[70%] relative object-cover object-left-top overflow-hidden rounded-lg"
            ref={image2Div}
          >
            <Image
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80"
              alt="developer working on laptop with code editor"
              fill
              className="object-cover"
              ref={image2}
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </div>
        </div>
      </div>
      <motion.div
        className="mt-8"
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <Paragraph text="I'm a Full-Stack Developer with 4+ years of experience delivering SaaS, e-commerce, and government platforms. I specialize in Laravel, MERN, Next.js, and React Native — combining scalability, security, and automation. My projects range from AI-powered interview systems to government dashboards processing thousands of applications daily." />
            </div>
            <div className="space-y-4">
              <Paragraph text="My focus is on integrating AI modules (NLP & Computer Vision) to make products smarter, faster, and more engaging. I've helped improve interview performance by 35%, accelerated government workflows by 90%, and boosted user engagement by 30% through intelligent automation. I believe in writing clean, maintainable code that scales." />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
