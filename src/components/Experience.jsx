import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#151622",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 18px 45px rgba(0, 0, 0, 0.18)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #151622" }}
      date={experience.date}
      dateClassName="text-secondary"
      iconStyle={{
        background: experience.iconBg,
        border: "4px solid #10111a",
        boxShadow: "0 0 0 1px rgba(141, 228, 207, 0.45)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt="" className='h-[58%] w-[58%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-xl font-bold leading-snug'>{experience.title}</h3>
        <p
          className='mt-1 text-sm font-medium text-[#8de4cf]'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 ml-5 list-disc space-y-2 marker:text-[#8de4cf]'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='pl-1 text-sm leading-6 text-white/80'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Selected experience
        </p>
        <h2 className={`${styles.sectionHeadText} mt-2 text-center`}>
          Experience<span className="text-[#8de4cf]">.</span>
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
