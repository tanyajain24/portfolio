import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
export default function About() {
  return (
    <div id="about" className="flex justify-center bg-[#0088ff] relative ">
      <div
        id="aboutBox"
        className="hide mt-10 w-[350px] sm:w-[550px] md:w-[720px] lg:w-[1000px] relative flex flex-col mb-10 ml-4"
      >
        <h1 className="my-5 text-5xl font-mono">
          <span className="text-white">About </span>
          <span className="text-[#fb923c]">Me</span>
        </h1>
        <p
          id="aboutDescription"
          className=" leading-loose text-white lg:text-[1.1rem] md:text-[1rem] lg:w-[800px] md:w-[600px] sm:w-[500px]"
        >
          Hi! Myself Tanya, Electrical 3rd year, from IIT (BHU) Varanasi.
          <br />
          I do Competitive programming. I like to learn new technologies, languages and cool stuff. I love to develop new things which help individuals practically.
          <br />
          <span className="font-bold text-[#fb923c]">Birth Place: </span>
          Kota, Rajasthan. <br />
          <span className="font-bold text-[#fb923c]">Born: </span>24th Feb 2003{" "}
          <br />
          <span className="font-bold text-[#fb923c]">Hobbies: </span>Watching Vlogs, Exploring good cuisines, Travelling
          <br /> Very excited to work with you! 😀
        </p>
        <div
          id="profileLinks"
          className="relative flex justify-evenly my-6 w-[300px] text-2xl text-white"
        >
          <a href="https://github.com/tanyajain24" target="blank">
            {" "}
            <AiFillGithub />{" "}
          </a>
          <a href="https://codeforces.com/profile/24tanyajain" target="blank">
            {" "}
            <SiCodeforces />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
