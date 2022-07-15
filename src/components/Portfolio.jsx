import React from "react";
//import components
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="flex items-center justify-center">
        <div className="container mix-auto ">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
              My lates work
            </h2>
            <p className="subtitle">
              My deep full-stack experience includes Node.js and React.js as
              well as more traditional technologies like Html, Css and
              Javascript.
            </p>
          </div>
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
