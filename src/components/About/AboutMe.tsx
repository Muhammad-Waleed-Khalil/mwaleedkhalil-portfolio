import React from "react";
import Header3 from "../Header3";

function AboutMe() {
  const line1 = "I'm Muhammad Waleed Khalil,";
  const line2 = "a full-stack developer with 4+ years";
  const line3 = "of experience building scalable SaaS,";
  const line4 = "e-commerce, and government platforms.";
  const line5 = "I specialize in Laravel, MERN, Next.js,";
  const line6 = "and React Native, with expertise in";
  const line7 = "integrating AI modules (NLP & Computer";
  const line8 = "Vision) to create intelligent solutions.";

  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <p className={`text-[14px] md:text-[18px]`}>About me</p>
        <div className="flex-1">
          <Header3 phrase={line1} />
          <Header3 phrase={line2} />
          <Header3 phrase={line3} />
          <Header3 phrase={line4} />
          <Header3 phrase={line5} />
          <Header3 phrase={line6} />
          <Header3 phrase={line7} />
          <Header3 phrase={line8} />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
