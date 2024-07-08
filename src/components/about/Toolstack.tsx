import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows11,
  SiWindows10,
  SiPrisma,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="flex flex-row justify-center pb-14">
      <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
        <SiWindows10 />
      </div>
      <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
        <SiVisualstudiocode />
      </div>
      <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
        <SiPostman />
      </div>
      <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
        <SiPrisma />
      </div>
      <div className="text-[4.5em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
        <SiVercel />
      </div>
    </div>
  );
}

export default Toolstack;
