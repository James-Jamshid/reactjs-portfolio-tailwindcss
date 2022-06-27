import React from "react";
import { social } from "../data";
// import Logo from "../assets/img/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-tertiary py-12 ">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0  items-center justify-between">
          {/* social icons */}
          <div className="flex space-x-6 items-center justify-center ">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base " href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* logo */}
          <div>
            {/* <img src={Logo} alt="" /> */}
            <h1 className="container mix-auto h-full flex items-center justify-between  italic text-2xl">
              Jamshid
            </h1>
          </div>
          {/* copyright */}
          {/* <p> Enjoy coding</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
