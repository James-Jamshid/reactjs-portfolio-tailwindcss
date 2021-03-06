import React from "react";
//import image
import ManImg from "../assets/img/man.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center justify-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden "
    >
      <div className="container mix-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex flex-1 flex-col items-center lg:items-start ">
            <p className="text-lg text-accent mb-[22px]">Hey, I'm Jamshid 👋</p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] ">
              I Build & Design <br /> Web Interfaces
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I'm a Frond End developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I'm focused on learning responsive full-stack web
              applications
            </p>
            <a href="https://github.com/James-Jamshid">
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                Work with me
              </button>
            </a>
          </div>
          {/* right side */}
          <div className="hidden  lg:flex flex-1 justify-end items-end h-full">
            <img src={ManImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
