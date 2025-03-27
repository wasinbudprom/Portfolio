import React from "react";
import { skills } from "../constants";
import CTA from "../components/CTA";
import Wasin from "../assets/images/wasin.jpg";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Wasin
        </span>
      </h1>
      <div>
        <img
          src={Wasin}
          className="w-2/12 h-2/12 justify-self-center my-9 rounded-full"
        />
      </div>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am a student at King Mongkut's University of Technology North
          Bangkok, majoring in Electronics and Computer Engineering , I’m
          actively searching for positions in Software Engineering or Front-End
          Development, preferably based in Bangkok.
        </p>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1FZgGTyPhUdCweg5BmGwTJzpmwPTSx8E7/view?usp=sharing"
          target="_black"
          className="btn flex justify-self-center mt-5"
        >
          My Resume
        </a>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My classroom work experience: I have learned to use ReactJS with
            TailwindCSS and have used Java for writing network programming,
            among other things.
          </p>
        </div>
        <div className="mt-12 flex"></div>
      </div>
      <CTA />
    </section>
  );
};

export default About;
