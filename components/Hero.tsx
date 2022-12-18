import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi,I'm Shreyas M B",
      "In Love with JavaScript",
      "Open Source is the Future"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src="assets/avatar.svg"
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Front End Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about"><button className="heroButton">About</button></Link>
          <Link href="#experience"><button className="heroButton">Experiences</button></Link>
          <Link href="#skills"><button className="heroButton">Skills</button></Link>
          <Link href="#projects"><button className="heroButton">Projects</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
