import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist & Engineer",
          "Systems thinker by nature",
          "Part-time quant investor",
          "Built for startups. Scaled for corporates. Ready for both!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        pauseFor: 1000,
      }}
    />
  );
}

export default Type;
