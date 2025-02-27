"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiMysql, SiDocker, SiGithub } from "react-icons/si";

const stackCategories = [
    {
        title: "Frontend",
        stacks: [
            { name: "TypeScript", icon: <SiTypescript size={50} className="text-blue-400" /> },
            { name: "Next.js", icon: <SiNextdotjs size={50} className="text-white" />, favorite: true },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-blue-300" />, favorite: true },
            { name: "React", icon: <SiReact size={50} className="text-blue-400" /> },
            { name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-400" /> },
            { name: "CSS", icon: <SiCss3 size={50} className="text-blue-500" /> },
            { name: "HTML", icon: <SiHtml5 size={50} className="text-orange-500" /> },
        ],
    },
    {
        title: "Backend",
        stacks: [
            { name: "Node.js", icon: <SiNodedotjs size={50} className="text-green-400" /> },
            { name: "Express.js", icon: <SiExpress size={50} className="text-white" /> },
            { name: "Prisma", icon: <SiPrisma size={50} className="text-white" />, favorite: true },
        ],
    },
    {
        title: "Database",
        stacks: [
            { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-400" /> },
            { name: "PostgreSQL", icon: <SiPostgresql size={50} className="text-blue-500" /> },
            { name: "MySQL", icon: <SiMysql size={50} className="text-orange-500" /> },
        ],
    },
    {
        title: "DevOps",
        stacks: [
            { name: "GitHub", icon: <SiGithub size={50} className="text-white" /> },
            { name: "Docker", icon: <SiDocker size={50} className="text-blue-600" /> },
        ],
    },
];

export default function Stack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.25 }); // Retriggers animation when 25% is in view

    return (
        <div id="stack" className="w-full flex justify-center py-16 px-6">
            <div ref={ref} className="border border-white/20 backdrop-blur-3xl rounded-3xl p-6 mx-auto text-white text-center max-w-5xl">
                <motion.h2
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Tech Stack
                </motion.h2>

                {/* Loop Through Categories */}
                {stackCategories.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>

                        {/* Tech Stack Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {category.stacks.map((stack, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    {stack.favorite && (
                                        <motion.button
                                            className="absolute top-0.5 right-1"
                                            whileHover={{ scale: 1.5 }}
                                        >
                                            ❤️
                                        </motion.button>
                                    )}
                                    {stack.icon}
                                    <span className="text-lg">{stack.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
