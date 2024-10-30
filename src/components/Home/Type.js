import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
          "React JS, Node JS, JavaScript",
        ],
        autoStart: true,
        loop: true,
        delay: 15,
        pauseFor: 1500,
        deleteSpeed: 15,
      }}
    />
  );
};

export default Type;