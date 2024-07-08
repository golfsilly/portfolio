"use client"

import React from "react";
import Image from "next/image";
import Home2 from "./Home2";
import Type from "./Type";
import Particle from "../Particle";
import { cn } from "@/lib/utils";
import { anton, italianno, merriweather, pacifico } from "@/config/fonts";

export default function Home1() {
  return (
    <section>
      <div className="relative bg-red-50 pb-8 pt-8" id="home">
        <Particle />
        <div className="">
          <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto">
            <div className="w-full py-24">
              <h1 className="text-4xl !pl-12 pb-4">
                Hello World!{" "}
                <span className="inline-block animate-pulse" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-4xl !pl-11">
                 {"I'm "}
                  <strong className="text-primary">Panupong Namda</strong>
              </h1>

              <div className={cn("text-primary text-3xl p-10 text-left font-anton", anton.variable)} >
                <Type />
              </div>
            </div>

            <div className="w-full mx-auto">
              <Image src={"/assets/home-main.svg"} alt="home1" width={400} height={450} className="max-h-[450px]" />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

