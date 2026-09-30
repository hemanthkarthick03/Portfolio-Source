import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import SectionEyebrow from "./SectionEyebrow";

const Tech = () => {
  return (
    <div className="px-6 py-10 sm:px-10">
      <SectionEyebrow label="Tech Stack" number="03" />
      <h2 className={`${styles.sectionHeadText} mt-2`}>Technologies<span className="text-[#8de4cf]">.</span></h2>
      <div className="mt-8 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");