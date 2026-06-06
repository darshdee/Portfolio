import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist",
          "Data Engineer",
          "Python • SQL • PySpark",
          "AWS | Databricks | Snowflake | Airflow",
          "ML & Recommendation Systems",
          "Quantitative Trading Systems",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
