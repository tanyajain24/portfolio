import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div id="skillPage" className="flex justify-center">
      <div
        id="skillBox"
        className=" my-5 w-[350px] sm:w-[550px] md:w-[720px] lg:w-[1000px] sm:my-10"
      >
        <h1 className=" mb-3 sm:my-8 text-[2.5rem] relative left-9 font-mono inline-block">
          <span>My </span>
          <span className="text-orange-500">Skills</span>
        </h1>

        <div className="skillContainer grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  justify-items-center">
          <SkillCard
            img={
              <>
                <AiFillHtml5 style={{ color: "#e96228" }} />
                <DiCss3
                  style={{ color: "#36b7f0", transitionDelay: "200ms" }}
                  id="html"
                />
              </>
            }
            skill="Html + CSS"
          />
          <SkillCard
            img={
              <SiJavascript
                style={{ color: "#efd81d", transitionDelay: "600ms" }}
              />
            }
            skill="JavaScript"
            id="js"
          />
          <SkillCard
            img={
              <DiReact style={{ color: "#00d5f7", transitionDelay: "800ms" }} />
            }
            skill="React JS"
            id="react"
          />
          <SkillCard
            img={
              <DiNodejs
                style={{
                  fontSize: "5rem",
                  color: "#404137",
                  transitionDelay: "1000ms",
                }}
              />
            }
            skill="Node JS"
            id="node"
          />
          <SkillCard
            img={<SiCplusplus />}
            style={{ transitionDelay: "1200ms" }}
            skill="C++"
          />
          <SkillCard
            img={
              <SiC
                style={{ color: "#00e661", transitionDelay: "1400ms" }}
              />
            }
            skill="C"
            id="mongo"
          />
        </div>
      </div>
    </div>
  );
}
