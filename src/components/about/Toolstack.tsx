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
  SiWindows95,
  SiWindowsterminal,
  SiWindowsxp,
  SiStackoverflow,
  SiChatbot,
  SiAdobelightroom,
  SiAdobelightroomclassic,
  SiAdobephotoshop,
  SiDiscord,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="flex flex-col items-center mx-auto py-7">
      <h1 className="text-3xl font-medium px-7 py-7">
        <strong className="text-primary">Tools</strong> I use
      </h1>

      <div className="grid grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 gap-x-6 gap-y-2">
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[6em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiWindows10 />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[6em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiVisualstudiocode />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[6em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiPostman />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[6em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiGithub />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[6em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiPrisma />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[6em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiVercel />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[6em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiAdobelightroom />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="text-[6em] opacity-[0.93] align-middle text-center table shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] overflow-hidden transition-all duration-[0.4s] ease-[ease] delay-[0s] m-[15px] p-2.5 rounded-[5px] border-[1.7px] border-solid border-[rgba(200,137,230,0.637)]">
            <SiAdobephotoshop />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolstack;
