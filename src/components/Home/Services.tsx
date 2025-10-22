"use client";
import React, { useRef } from "react";
// Using Unsplash images for tech-themed visuals
// import Top1 from "../../../public/images/services/top1.png";
// import Top2 from "../../../public/images/services/top2.png";
// import Bottom1 from "../../../public/images/services/bottom1.png";
// import Bottom2 from "../../../public/images/services/bottom2.jpg";
// import Bottom3 from "../../../public/images/services/bottom3.jpg";
import Header2 from "../Header2";
import Image from "next/image";
// import ServiceImage from "../../../public/images/services/list/john-gonzales-bcPmxdBGyyw-unsplash.jpg";
import ServicesList from "./ServicesList";
import { allServices } from "@/utils/servicesData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

function Services() {
  const serviceDiv = useRef(null);
  const topImage1 = useRef(null);
  const topImage2 = useRef(null);
  const bottomImage1 = useRef(null);
  const bottomImage2 = useRef(null);
  const bottomImage3 = useRef(null);

  const serviceRef1 = useRef(null);
  const serviceRef2 = useRef(null);
  const serviceRef3 = useRef(null);
  const serviceRef4 = useRef(null);

  const serviceRef = [serviceRef1, serviceRef2, serviceRef3, serviceRef4];

  const image = useRef(null);

  useGSAP(() => {
    gsap.to(image.current, {
      y: "25%",
      scrollTrigger: {
        trigger: image.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    gsap.from(topImage1.current, {
      y: "40%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top bottom",
        end: "bottom -80%",
        scrub: true,
      },
    });
    gsap.from(topImage2.current, {
      y: "50%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top bottom",
        end: "bottom -30%",
        scrub: true,
      },
    });
    gsap.from(bottomImage1.current, {
      y: "-40%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top 120%",
        end: "bottom -100%",
        scrub: true,
      },
    });
    gsap.from(bottomImage2.current, {
      y: "-45%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top 50%",
        end: "bottom -80%",
        scrub: true,
      },
    });
    gsap.from(bottomImage3.current, {
      y: "-35%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top 135%",
        end: "bottom -105%",
        scrub: true,
      },
    });
  });

  const topImages = [
    {
      alt: "modern laptop with code on screen",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
      ref: topImage1,
    },
    {
      alt: "smartphone displaying mobile app interface",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
      ref: topImage2,
    },
  ];

  const bottomImages = [
    {
      alt: "developer workspace with code editor",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
      ref: bottomImage1,
    },
    {
      alt: "abstract technology and AI visualization",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
      ref: bottomImage2,
    },
    {
      alt: "server room with DevOps infrastructure",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
      ref: bottomImage3,
    },
  ];

  return (
    <section className="mb-[8vh] pt-[6vh]" id="services">
      {/* SERVICE HEADER WITH SURROUNDING IMAGES */}
      <div className="mb-[10vh]" ref={serviceDiv}>
        <div className="flex justify-evenly items-end">
          {topImages.map((img) => {
            return (
              <div
                key={img.alt}
                className="w-[11vw] xs:w-[12vw] sm:w-[13vw] md:w-[10vw] relative h-[15vw] object-cover object-center rounded-lg overflow-hidden"
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  ref={img.ref}
                  sizes="15vw"
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mb-[5vh]">
          <Header2 text="services" />
        </div>
        <div className="flex justify-between sm:justify-around items-start">
          {bottomImages.map((img) => {
            return (
              <div
                key={img.alt}
                className="w-[11vw] xs:w-[12vw] sm:w-[13vw] md:w-[10vw] relative h-[15vw] object-cover object-center rounded-lg overflow-hidden"
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  ref={img.ref}
                  sizes="15vw"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* LISTED SERVICES*/}
      <div className="flex justify-end">
        <motion.div className="relative flex flex-col-reverse md:flex-row gap-4 border-t-[1px] border-b-[1px] border-t-lightText20 dark:border-t-darkText20 border-b-lightText20 dark:border-b-darkText20">
          <div className="flex-1 ">
            {allServices.map((item, i) => {
              return (
                <motion.div key={item.title}>
                  <ServicesList services={item} ref={serviceRef[i]} />
                </motion.div>
              );
            })}
          </div>
          <div className="relative md:sticky top-0 flex-1 h-[400px] md:h-screen object-cover overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
              alt="digital technology and network connections visualization"
              fill
              className="object-cover scale-150"
              ref={image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
