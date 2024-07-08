import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Image from "next/image";

function About() {
  return (
    <section>
      <div className="flex flex-col md:flex-row px-4 py-10 gap-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium px-7 py-4">
            Know Who <strong className="text-primary">I</strong>
          </h1>
          <Aboutcard />
        </div>
        <div className="flex flex-col justify-center items-center px-3 py-3">
          <Image
            src={"/assets/about.png"}
            width={450}
            height={350}
            alt="about"
            className=""
          />
        </div>
      </div>

      <Techstack />
      <Toolstack />
      <Github />
    </section>
  );
}

export default About;
