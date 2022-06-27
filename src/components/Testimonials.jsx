import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:top-[2rem] before:-left-64 before:hidden before:lg:block">
            I am as a Frond End Developer
          </h2>
          <p className="subtitle">
            Your website is the center of your digital ecosystem, like a brick
            and mortar location, the experience matters once a customer enters,
            just as much as the perception they have of you before they walk
            through the door.”
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
