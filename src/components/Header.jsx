import React from "react";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  return (
    <header>
      <div
        className=" relative m-0 p-0 bg-cover bg-no-repeat h-screen opacity-4 -z-15"
        style={{
          backgroundImage:
            "url('https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif')",
        }}
      >
        <div className="bg-cyan-500 w-full fixed top-0 z-10 shadow-md ">
          <nav className="container mx-auto flex justify-items-start md:justify-center items-center  m-2 sm:flex-wrap">
            <ScrollLink
              to="top"
              smooth={true}
              duration={500}
              className="text-sm m-0 px-1 py-2 mx-1 md:px-4 md:mx-2 md:text-base text-white font-medium bg-cyan-500 hover:bg-slate-500 rounded-md cursor-pointer transition"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-sm px-1 py-2 mx-1 md:px-4 md:mx-2 md:text-base text-white font-medium bg-cyan-500 hover:bg-slate-500 rounded-md cursor-pointer transition"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="text-sm px-1 py-2 mx-1 md:px-4 md:mx-2 md:text-base text-white font-medium bg-cyan-500 hover:bg-slate-500 rounded-md cursor-pointer transition"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-sm px-1 py-2 mx-1 md:px-4 md:mx-2 md:text-base text-white font-medium bg-cyan-500 hover:bg-slate-500 rounded-md cursor-pointer transition"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-sm px-1 py-2 mx-1 md:px-4 md:mx-2 md:text-base text-white font-medium bg-cyan-500 hover:bg-slate-500 rounded-md cursor-pointer transition"
            >
              Contact
            </ScrollLink>
          </nav>
        </div>

        <div className=" md:absolute inset-0 flex flex-col justify-center items-start mt-20 ml-10 sm:mt-10 md:ml-20 text-black">
          <span className="text-5xl font-bold mb-4">Welcome to </span>
          <span className="text-5xl font-bold mb-4">IT Online Learning</span>
          <span className="text-xl italic">
            {" "}
            A place to start your web development career
          </span>
        </div>
      </div>
    </header>
  );
};
