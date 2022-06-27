import React from "react";
//import image
import Image from "../assets/img/about.jpeg";

const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24 ">
          <img
            className="object-cover h-[500px] w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative  before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block ">
                Jamshidbek Makhmudov
              </h2>
              <p className="mb-4 text-accent">Front End Web Developer </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                i've a 6 months of experience writing web apps that span
                consumer productivity software to mission-critical financial
                trading platforms. I've extensive knowledge of front-end
                JavaScript and browser APIs as well as significant experience
                with popular frameworks and libraries like React.
              </p>
            </div>
            <a href="https://www.facebook.com/jamshid.makhmudov.1994">
              <button className="btn btn-md bg-accent hover:bg-accent-hover  transition-all">
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
