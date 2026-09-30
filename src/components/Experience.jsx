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
import SectionEyebrow from "./SectionEyebrow";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      /* =========================
         CARD
      ========================== */
      contentStyle={{
        background:
          "linear-gradient(145deg, #15182a 0%, #0b0f1e 100%)",
        color: "#fff",
        border: "1px solid rgba(141, 228, 207, 0.18)",
        borderRadius: "22px",
        boxShadow:
          "0 20px 55px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
        padding: "28px 30px",
      }}

      contentArrowStyle={{
        borderRight: "9px solid #15182a",
      }}

      /* =========================
         DATE
      ========================== */
      date={experience.date}
      dateClassName="experience-date"

      /* =========================
         TIMELINE ICON
      ========================== */
      iconStyle={{
        background: "#080b16",

        /*
         * Increased from 70px → 90px
         */
        width: "90px",
        height: "90px",

        /*
         * Center the 90px circle
         */
        marginLeft: "-45px",
        marginTop: "0px",

        /*
         * Circular border
         */
        border: "3px solid #8de4cf",
        borderRadius: "50%",

        /*
         * Glow
         */
        boxShadow: `
          0 0 0 5px rgba(141, 228, 207, 0.08),
          0 0 25px rgba(141, 228, 207, 0.35),
          inset 0 0 15px rgba(141, 228, 207, 0.08)
        `,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}

      /* =========================
         LOGO
      ========================== */
      icon={
        <div
          className="
            flex
            items-center
            justify-center
            w-full
            h-full
            rounded-full
            overflow-hidden
            bg-white
            p-1
          "
        >
          <img
            src={experience.icon}
            alt={`${experience.company_name} logo`}
            className="
              w-full
              h-full
              rounded-full
              object-contain
              bg-white
            "
          />
        </div>
      }
    >
      {/* =========================
          HEADER
      ========================== */}
      <div className="flex flex-col gap-3">

        <h3
          className="
            text-white
            text-xl
            sm:text-2xl
            font-bold
            leading-tight
            tracking-tight
          "
        >
          {experience.title}
        </h3>

        <p
          className="
            text-[#8de4cf]
            text-sm
            sm:text-base
            font-semibold
          "
          style={{
            margin: 0,
          }}
        >
          {experience.company_name}
        </p>

        {/* =========================
            LOCATION
        ========================== */}
        {experience.location && (
          <div>
            <span
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                border
                border-[#8de4cf]/20
                bg-[#8de4cf]/5
                text-xs
                sm:text-sm
                text-white/70
              "
            >
              <span className="text-[#8de4cf]">
                ◉
              </span>

              {experience.location}
            </span>
          </div>
        )}
      </div>

      {/* =========================
          DIVIDER
      ========================== */}
      <div
        className="
          mt-5
          h-px
          w-full
          bg-gradient-to-r
          from-[#8de4cf]/30
          via-white/10
          to-transparent
        "
      />

      {/* =========================
          EXPERIENCE POINTS
      ========================== */}
      <ul
        className="
          mt-5
          ml-5
          list-disc
          space-y-3
          marker:text-[#8de4cf]
        "
      >
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="
              pl-1
              text-sm
              sm:text-[15px]
              leading-6
              text-white/75
            "
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
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
        <SectionEyebrow label="Experience" number="02" />
      <motion.div variants={textVariant()}>
        <p
          className={`
            ${styles.sectionSubText}
            text-center
            uppercase
            tracking-[0.25em]
          `}
        >
          Selected experience
        </p>

        <h2
          className={`
            ${styles.sectionHeadText}
            mt-2
            text-center
          `}
        >
          Experience
          <span className="text-[#8de4cf]">.</span>
        </h2>
      </motion.div>

      {/* =====================================================
          TIMELINE
      ====================================================== */}
      <div className="mt-16 sm:mt-20 experience-timeline">
        <VerticalTimeline
          lineColor="rgba(141, 228, 207, 0.35)"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* =====================================================
          CUSTOM CSS
      ====================================================== */}
      <style>{`

        /* ============================================
           TIMELINE LINE
        ============================================ */

        .experience-timeline
          .vertical-timeline::before {

          background:
            linear-gradient(
              to bottom,
              rgba(141, 228, 207, 0.08),
              rgba(141, 228, 207, 0.55),
              rgba(141, 228, 207, 0.08)
            );

          box-shadow:
            0 0 15px rgba(141, 228, 207, 0.2);
        }


        /* ============================================
           TIMELINE ICON
        ============================================ */

        .experience-timeline
          .vertical-timeline-element-icon {

          display: flex;
          align-items: center;
          justify-content: center;

          z-index: 10;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }


        .experience-timeline
          .vertical-timeline-element-icon:hover {

          transform: scale(1.08);

          box-shadow:
            0 0 0 5px rgba(141, 228, 207, 0.12),
            0 0 40px rgba(141, 228, 207, 0.55) !important;
        }


        /* ============================================
           CARD
        ============================================ */

        .experience-timeline
          .vertical-timeline-element-content {

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }


        .experience-timeline
          .vertical-timeline-element-content:hover {

          transform: translateY(-5px);

          border-color:
            rgba(141, 228, 207, 0.45) !important;

          box-shadow:
            0 25px 65px rgba(0, 0, 0, 0.45),
            0 0 35px rgba(141, 228, 207, 0.08) !important;
        }


        /* ============================================
           DATE
        ============================================ */

        .experience-date {

          color:
            rgba(255, 255, 255, 0.78) !important;

          font-size:
            14px !important;

          font-weight:
            600 !important;

          padding:
            8px 15px !important;

          background:
            rgba(10, 14, 28, 0.9);

          border:
            1px solid
            rgba(141, 228, 207, 0.22);

          border-radius:
            999px;

          box-shadow:
            0 8px 25px rgba(0, 0, 0, 0.25);

          white-space:
            nowrap;
        }


        /* ============================================
           LOGO IMAGE
        ============================================ */

        .experience-timeline
          .vertical-timeline-element-icon img {

          /*
           * Make the uploaded image itself circular
           */
          border-radius: 50%;

          /*
           * Keep the logo inside the circle
           */
          object-fit: contain;

          /*
           * Smooth rendering
           */
          image-rendering: auto;

          /*
           * Prevent tiny transparent edges
           */
          max-width: 100%;
          max-height: 100%;
        }


        /* ============================================
           TABLET
        ============================================ */

        @media only screen and (max-width: 1169px) {

          .experience-timeline
            .vertical-timeline-element-content {

            margin-left: 70px;
          }

          .experience-date {

            margin-bottom: 12px;

            display: inline-block;
          }
        }


        /* ============================================
           MOBILE
        ============================================ */

        @media only screen and (max-width: 767px) {

          .experience-timeline {

            margin-top: 3rem;
          }


          .experience-timeline
            .vertical-timeline-element-content {

            margin-left: 50px;

            padding:
              22px 20px !important;

            border-radius:
              18px;
          }


          /* Smaller mobile timeline circle */

          .experience-timeline
            .vertical-timeline-element-icon {

            width:
              72px !important;

            height:
              72px !important;

            margin-left:
              -36px !important;
          }


          .experience-date {

            font-size:
              12px !important;

            padding:
              6px 10px !important;
          }


          .experience-timeline
            .vertical-timeline-element-content
            h3 {

            font-size:
              19px;
          }
        }


        /* ============================================
           SMALL MOBILE
        ============================================ */

        @media only screen and (max-width: 480px) {

          .experience-timeline
            .vertical-timeline-element-content {

            margin-left:
              42px;
          }


          .experience-timeline
            .vertical-timeline-element-icon {

            width:
              64px !important;

            height:
              64px !important;

            margin-left:
              -32px !important;
          }


          .experience-date {

            font-size:
              11px !important;

            padding:
              5px 9px !important;
          }
        }

      `}</style>
    </>
  );
};

export default SectionWrapper(Experience, "work");