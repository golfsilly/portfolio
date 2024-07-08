"use client";

import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

export default function Home2() {
  return (
    <div
      className="relative max-w-screen-lg mx-auto bg-no-repeat pb-8 pt-8"
      id="about"
    >
      <div className="">
        <div className="text-center">
          <h1 className="text-center text-4xl font-bold">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />I am fluent in classics like 
            <i>
              <b className="text-primary"> Javascript and Typescript</b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="text-primary">Node.js</b> and
            <i>
              <b className="text-primary">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="text-primary"> React.js and Next.js</b>
            </i>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center py-7">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.9}
            glarePosition="all"
            glareBorderRadius="20px"
          >
            <Image
              src={"/assets/avatar.svg"}
              width={250}
              height={250}
              alt="avatar"
            />
          </Tilt>
        </div>
      </div>
      <div>
        <div className="home-about-social">
          {/* <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p> */}
          <ul className="home-about-social-links">
            {/* <li className="social-icons">
                <a
                  href="https://github.com/golfsilly"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >github
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/golfr5r5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >twitter
               
                </a>
              </li>
              <li className="text-primary bg-violet-100">
                <a
                  href="https://www.instagram.com/golfsilly"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary icon-colour home-social-icons"
                >
                  instagram
                 
                </a>
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
