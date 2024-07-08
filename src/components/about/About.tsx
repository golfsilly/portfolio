import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Image from "next/image";

function About() {
  return (
    <div className="">
      <div>
        {/* <div>
          <div>
            <h1 >
              Know Who <strong className="text-primary">I</strong>
            </h1>
            <Aboutcard />
          </div>
          <div>
            <Image src={"/assets/about.png"} width={400} height={400} alt="about" className="" />
          </div>
        </div> */}
          <h1 className="text-3xl font-medium pt-2">
          Professional <strong className="text-primary">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="text-3xl font-medium pt-2">
          <strong className="text-primary">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </div>
    </div>
  );
}

export default About;
