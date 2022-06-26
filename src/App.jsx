import React from "react";
import About from "./components/About";
import Brands from "./components/Brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

// import components

const AppPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default AppPage;
