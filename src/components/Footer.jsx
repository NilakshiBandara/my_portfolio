import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export const Footer = () => {
  // <ScrollLink to="top" smooth={true}>...</ScrollLink>

  return (
    <footer className="bg-cyan-500 text-black py-4 mt-10">
    <div className="mx-auto flex justify-center items-center">
      <p className="text-sm mr-8">&copy; 2025 IT Online Learning. All rights reserved.</p>
      <ScrollLink
        to="top"
        smooth={true}
        duration={500}
       className="p-3 m-3 bg-cyan-500 hover:bg-slate-500 cursor-pointer"
      >
        Home
      </ScrollLink>
      <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="p-3 m-3 bg-cyan-500 hover:bg-slate-500 cursor-pointer"
                  >
                    About 
                  </ScrollLink> 
                  <ScrollLink
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="p-3 m-3 bg-cyan-500 hover:bg-slate-500 cursor-pointer"
                  >
                    Skills
                  </ScrollLink>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="p-3 m-3 bg-cyan-500 hover:bg-slate-500 cursor-pointer"
                  >
                    Projects
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="p-3 m-3 bg-cyan-500 hover:bg-slate-500 cursor-pointer"
                  >
                    Contact
                  </ScrollLink>
    </div>
  </footer>
  )
}
