import React from "react";
//import skills data
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="flex items-center justify-center">
        <div className="container mix-auto ">
          <div className="grid grid-cols-8 md:grid-flow-row">
            {skills.map((skill, index) => {
              return (
                <div className="flex items-center justify-center" key={index}>
                  <img src={skill.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
