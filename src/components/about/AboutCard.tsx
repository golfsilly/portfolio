"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  BoxIcon,
  CameraIcon,
  Gamepad2Icon,
  GamepadIcon,
  GuitarIcon,
  PlaneIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  anton,
  ibm_plex_sans_thai,
  italianno,
  merriweather,
  pacifico,
} from "@/config/fonts";
import Type from "./Type";

function AboutCard() {
  return (
    <Card className="bg-transparent border-1 shadow-lg">
      <CardContent className=" py-3">
        <blockquote className="">
          <p className="justify-center pb-3">
            Hi Everyone, I am{" "}
            <span className="text-primary">Panupong Namda </span>
            from <span className="text-primary">Sa kaeo, Thailand.</span>
            <br />
            I am currently employed as a Computer technical officer at
            Aranyaprathet Hospital.
            <br />
            I have completed Integrated Burapha University (BUU) in Business
            Computer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row text-left pl-1">
              <Gamepad2Icon className="text-primary mr-2" /> Playing Games
            </li>
            <li className="flex flex-row text-left pl-1">
              <GuitarIcon className="text-primary mr-2" /> Playing Guitar
            </li>
            <li className="flex flex-row text-left pl-1">
              <PlaneIcon className="text-primary mr-2" /> Travelling
            </li>
            <li className="flex flex-row text-left pl-1">
              <CameraIcon className="text-primary mr-2" /> Photography
            </li>
          </ul>

          <div
            className={cn(
              "text-primary/80 text-4xl font-bold p-10 text-left font-italianno",
              italianno.variable
            )}
          >
            <Type />
          </div>
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
