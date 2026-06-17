"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "DSA Pattern Visualizer",
    description: "An interactive visual tool to help developers intuitively understand complex Data Structure and Algorithm patterns.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    color: "from-blue-500 to-cyan-500",
    image: "/images/dsa.png",
  },
  {
    title: "Scrap Collection Platform",
    description: "A comprehensive platform to manage, track, and optimize the scrap collection workflow for local businesses.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
    color: "from-green-500 to-emerald-500",
    image: "/images/scrap.png",
  },
  {
    title: "SwachhCity",
    description: "A smart waste management platform with real-time bin monitoring, optimized collection routes, recycling analytics, and city-wide cleanliness tracking.",
    tags: ["Next.js", "Node.js", "MongoDB", "Maps API"],
    link: "#",
    color: "from-teal-500 to-green-500",
    image: "/images/swachhcity.png",
  },
  {
    title: "CyberDSA",
    description: "A fully animated, cyberpunk-themed DSA learning platform featuring interactive pattern visualizations, step-by-step algorithm walkthroughs, and a built-in code editor.",
    tags: ["React", "Framer Motion", "TypeScript", "Tailwind CSS"],
    link: "#",
    color: "from-purple-500 to-blue-500",
    image: "/images/cyberdsa.png",
  },
  {
    title: "LeetCode Tracker",
    description: "A dynamic dashboard to track LeetCode platform progress, visualize stats, and maintain problem-solving consistency.",
    tags: ["React", "Express", "Recharts"],
    link: "#",
    color: "from-yellow-400 to-orange-500",
    image: "/images/dsa.png",
  },
  {
    title: "KindDaan",
    description: "A secure and transparent donation platform bridging the gap between donors and people in need.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    link: "#",
    color: "from-brand-500 to-purple-500",
    image: "/images/scrap.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 inline-block relative text-slate-900">
            Selected Work
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent rounded-full" />
          </h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my recent projects, demonstrating my ability to build full-stack solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-full"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
              <div className="relative h-full flex flex-col glass-card bg-white/60 overflow-hidden border filter drop-shadow-sm border-slate-200">
                {/* Project Image Banner */}
                <div className="relative w-full h-56 bg-slate-100 overflow-hidden border-b border-slate-200">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 relative z-10"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent relative z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-brand-600 transition-all">
                      {project.title}
                    </h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors group/link shrink-0 ml-4">
                      <svg className="w-5 h-5 text-slate-400 group-hover/link:text-brand-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-3 py-1 text-xs font-semibold bg-slate-100 border border-slate-200 rounded-full text-slate-600 bg-white/50 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
