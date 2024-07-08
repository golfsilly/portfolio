import React from "react";
import { Card, CardContent } from "../ui/card";
import { BoxIcon, Gamepad2Icon, GamepadIcon } from "lucide-react";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <CardContent>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GamepadIcon /> Playing Games
            </li>
            <li className="about-activity">
              <Gamepad2Icon /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <BoxIcon /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Strive to build things that make a difference!{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
