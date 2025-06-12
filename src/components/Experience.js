import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-12 top-1 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark md:w-[2px] md:left-9 md:top-3
          xs:left-6 xs:top-5"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-7">
          <Details
            position="Software Engineer Intern"
            company="TEN"
            companyLink="www.google.com"
            time="Jan'2025 - May'2025"
            address="Remote"
            work="Designed and implemented modular, reusable UI components using React and Next.js, while integrating Firebase for real-time data syncing, authentication, and cloud storage, and incorporating Vapi, an AI-powered voice agent, to enable interactive mock interviews and voice commands—resulting in a 30% improvement in workflow efficiency, 35% boost in user engagement, and 25% increase in feature adoption."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
