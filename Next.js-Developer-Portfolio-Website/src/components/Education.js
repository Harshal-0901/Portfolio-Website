import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] xs:mr-1"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {place} | {time}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-12 top-1 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark md:w-[2px] md:left-9 md:top-3
          xs:left-6 xs:top-5"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Technology In Electrical  Engineering"
            time="2021-2025"
            place="Sardar Vallabhbhai National Institute of Technology Surat"
            info="CGPA: 7.9"
          />

          <Details
            type="Senior Secondary Examination CBSE - Class XII"
            time="CBSE-2021"
            place="Bhagwan Mahavir International School - Surat"
            info="Percentage: 93.4"
          />

          <Details
            type="Higher Secondary Examination CBSE - Class X"
            time="CBSE-2019"
            place="S.D.Jain Modern School - Surat"
            info="Percentage: 93.4"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
