import React from "react";

export const Projects = ({ projects }) => {
  return (
    <section id="projects" className="pt-20  ">
      <h2 className="text-5xl font-bold text-center text-neutral-800 mb-12">
        Project Details
      </h2>
      <div className="flex  flex-col md:flex-row flex-wrap border-solid border-blue-800 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover:scale-105 flex-1  m-2 p-5 bg-white rounded-lg shadow-lg text-center transition-transform duration-300"
          >
            <h2 className="text-4xl font-bold from-neutral-800  m-2">
              {project.ProjectName}
            </h2>
            <div className="flex justify-center m-5 bg-gray-100 p-4 rounded-lg shadow-inner">
              <img
                className="w-48 h-48 p-5 text-center object-cover border border-gray-300"
                src={project.Image}
                alt=""
              />
            </div>
            <p className="mt-4 text-sm md:text-base text-gray-600 text-justify">
              {project.Description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
