import React from "react";

export default function Skill() {
  // Skill Categories Data Array with Logos
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React.js",
          logo: "/Skill/react.png",
        },
        {
          name: "JavaScript",
          logo: "/Skill/javascript.png",
        },
        {
          name: "Tailwind CSS",
          logo: "/Skill/tailwind.png",
        },
        {
          name: "HTML5 & CSS3",
          logo: "/Skill/html.png",
        },
        {
          name: "Responsive Design",
          logo: "/Skill/responsive.png",
        },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        {
          name: "Python",
          logo: "/Skill/python.png",
        },
        {
          name: "Django",
          logo: "/Skill/django.png",
        },
        // {
        //   name: "Node.js",
        //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        // },
        // {
        //   name: "Express.js",
        //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        // },
        // {
        //   name: "REST APIs",
        //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
        // },
        // {
        //   name: "MongoDB",
        //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        // },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        {
          name: "Git & GitHub",
          logo: "/Skill/git.png",
        },
        {
          name: "VS Code",
          logo: "/Skill/vscode.png",
        },
        {
          name: "Vite",
          logo: "/Skill/vite.png",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[#020617] border-t border-gray-900 bg-grid-pattern"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.25em] text-[#2A8FEA] uppercase mb-3">
            Expertise & Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Technical Core Skills
          </p>
          <div className="w-12 h-[2px] bg-[#2A8FEA] mx-auto mt-4" />
        </div>

        {/* Bento-style Skills Grid */}
        <div className="flex flex-col justify-between gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#020617]/60 border border-gray-800 rounded-2xl p-8 hover:border-[#2A8FEA]/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(42,143,234,0.05)]"
            >
              {/* Category Header */}
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide uppercase group-hover:text-[#2A8FEA] transition-colors duration-300">
                {category.title}
              </h3>

              {/* Column-wise Skill List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-4 p-3 bg-gray-950 border border-gray-800 rounded-xl hover:border-gray-600 hover:bg-gray-900 transition-colors duration-200"
                  >
                    {/* Skill Logo inside a soft white box for visibility on black */}
                    <div className="w-12 h-10 flex items-center justify-center bg-white/5 rounded-lg p-1 border border-white/5">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={`w-full h-full object-contain ${
                          skill.name === 'VS Code' ? 'scale-[1.7]' :
                          ['Git & GitHub', 'Vite'].includes(skill.name) ? 'scale-[1.4]' : 
                          'scale-110'
                        }`}
                        loading="lazy"
                      />
                    </div>
                    {/* Skill Name */}
                    <span className="text-sm font-semibold tracking-wide text-gray-300 group-hover/item:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
