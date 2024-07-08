"use client";

import React from "react";
import Image from "next/image";
import Home2 from "./Home2";
import Type from "./Type";
import { cn } from "@/lib/utils";
import { anton, poppins } from "@/config/fonts";

export default function Home1() {
  return (
    <section>
      <div className="relative" id="home">
        <div className="flex flex-col md:flex-row py-10">
          <div className="w-full py-4 md:py-7 lg:py-24">
            <h1
              className={cn(
                "font-bold !pl-12 pb-4 text-primary/90 text-4xl p-10 text-left font-poppins",
                poppins.variable
              )}
            >
              Hello World!{" "}
              <span
                className="inline-block animate-pulse"
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </h1>

            <h1 className="text-4xl font-normal !pl-11">
              {"I'M "}
              <strong className="text-primary/95">Panupong Namda</strong>
            </h1>

            <div
              className={cn(
                "text-primary text-4xl p-10 text-left font-anton",
                anton.variable
              )}
            >
              <Type />
            </div>
          </div>

          <div className="flex flex-col justify-center mx-auto ">
            <Image
              src={"/assets/home-main.svg"}
              alt="home1"
              width={750}
              height={450}
              className="max-h-[450px]"
            />
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}
