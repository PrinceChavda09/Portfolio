import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Project() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, secure payments, and a powerful admin dashboard.",
      techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application featuring real-time updates and intuitive drag-and-drop interfaces.",
      techStack: ["React.js", "Express", "PostgreSQL", "Socket.io"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered application that generates high-quality images from text descriptions using the latest models.",
      techStack: ["React.js", "Python", "OpenAI API", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-black border-t border-gray-900 overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2A8FEA]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
          <h2 className="text-xs font-bold tracking-[0.25em] text-[#2A8FEA] uppercase mb-3">
            Portfolio
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Featured Projects
          </p>
          <div className="w-12 h-[2px] bg-[#2A8FEA] mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl bg-gray-950/80 backdrop-blur-xl border border-gray-800 hover:border-[#2A8FEA]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#2A8FEA]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2A8FEA] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1.5 text-xs font-semibold tracking-wide bg-gray-900 border border-gray-800 text-gray-300 rounded-lg hover:border-[#2A8FEA]/50 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 bg-gray-900 border border-gray-800 text-white font-medium py-2.5 rounded-xl hover:bg-gray-800 hover:border-gray-700 transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 bg-[#2A8FEA]/10 border border-[#2A8FEA]/30 text-[#2A8FEA] font-medium py-2.5 rounded-xl hover:bg-[#2A8FEA]/20 hover:border-[#2A8FEA]/60 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
