"use client";

import { motion, Variants } from "framer-motion";

const skills = [
  { name: "React", category: "Frontend", color: "text-cyan-600" },
  { name: "Next.js", category: "Frontend", color: "text-slate-900" },
  { name: "JavaScript", category: "Language", color: "text-yellow-500" },
  { name: "TypeScript", category: "Language", color: "text-blue-600" },
  { name: "Node.js", category: "Backend", color: "text-green-600" },
  { name: "Express", category: "Backend", color: "text-slate-700" },
  { name: "MongoDB", category: "Database", color: "text-green-500" },
  { name: "Tailwind CSS", category: "Frontend", color: "text-cyan-500" },
  { name: "C / C++", category: "Language", color: "text-blue-700" },
  { name: "Python", category: "Language", color: "text-yellow-600" },
  { name: "Java", category: "Language", color: "text-red-500" },
  { name: "Data Analysis", category: "Other", color: "text-purple-600" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 inline-block relative text-slate-900">
            Tech Stack
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent rounded-full" />
          </h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
            A versatile set of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group"
            >
              <div className={`text-xl font-bold font-heading mb-2 ${skill.color} transition-all duration-300 drop-shadow-sm`}>
                {skill.name}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                {skill.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
