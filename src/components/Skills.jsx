import React from "react";

export const Skills = () => {
  const technicalSkills = [
    {
      category: "Database management",
      itemList: ["MS SQL", "My SQL", "MogoDb"],
    },
    {
      category: "Front-end Technologies ",
      itemList: ["HTML", "CSS", "React", "JavaScripts"],
    },
    { category: "Back-end Technologies ", itemList: ["Python", "C# .NET"] },
    { category: "Version Controll ", itemList: ["Git", "GitHub"] },
  ];

  const softSkills = [
    "Team Collaboration",
    "Strong problem Solving",
    "Communication Skills",
    "Time Mangement",
  ];

  const experinces = [
    { project: "Passwpord Generator", technologies: ["React", "SQL"] },
    {
      project: "e Commerce Application",
      technologies: ["PHP", "CSS", "SQL"],
    },
  ];
  return (
    <section id="skills" className="pt-20">
      <h2 className="text-5xl font-bold text-center text-neutral-800 mb-8">
        Skills
      </h2>

      <div className="m-1 md:mx-3 mt-2 flex justify-center rounded-lg flex-col flex-wrap md:flex-row">
        <div className="flex-1 shadow-lg gap-40 p-1 md:p-4 m-1 md:m-2 w-full">
          <h2 className="mb-4 p-2 text-lg font-bold shadow-lg ">
            {" "}
            Technical Skills
          </h2>
          {technicalSkills.map((skills, index) => (
            <li className="ml-3 md:ml-6  text-left font-semibold " key={index}>
              {skills.category}

              {skills.itemList.map((item, itemindex) => (
                <li
                  className="ml-3 md:ml-6 p-1  text-left font-thin "
                  key={itemindex}
                >
                  {item}
                </li>
              ))}
            </li>
          ))}
        </div>
        <div className="flex-1 shadow-lg gap-40 p-1 md:p-4 m-1 md:m-2 w-full">
          <h2 className="mb-4 p-2 text-lg font-bold shadow-lg"> Soft Skills</h2>
          {softSkills.map((skill, index) => (
            <li
              className="ml-3 md:ml-6  m-4 text-left font-semibold "
              key={index}
            >
              {skill}
            </li>
          ))}
        </div>
        <div className="flex-1 shadow-lg gap-40 p-1 md:p-4 m-1 md:m-2 w-full">
          <h2 className="mb-4 p-2 text-lg font-bold shadow-lg">
            Hands-On Experinces
          </h2>
          {experinces.map((projectitem, index) => (
            <li className="ml-3 md:ml-6  text-left font-semibold " key={index}>
              {projectitem.project}
              {projectitem.technologies.map((tech, index) => (
                <li
                  className="ml-3 md:ml-6 p-1  text-left font-thin "
                  key={index}
                >
                  {tech}
                </li>
              ))}
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};
