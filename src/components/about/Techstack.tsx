import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiJavascript,
  DiHtml53dEffects,
  DiHtml5Connectivity,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto ">
      <div className="grid grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 gap-x-2 gap-y-2">
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <DiHtml5 />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <DiCss3 />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <DiJavascript1 />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <DiNodejs />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <DiReact />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiNextdotjs />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <DiGit />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiPostgresql />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <DiMysql />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techstack;
