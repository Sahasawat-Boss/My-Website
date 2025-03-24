"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useMotionValue, useMotionTemplate, motion, animate, useInView } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";

const COLORS_TOP = ["#1E67C6", "#CE84CF", "#13FFAA", "#DD335C"];

function Hero() {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 4.5,
            repeat: Infinity,
            repeatType: "mirror"
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    // 🔹 Detect when this section is in view
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    // ✅ Scroll to Contact Section
    const handleScrollToProjects = () => {
        const projectSection = document.querySelector("#Project4");
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main id="hero">
            <motion.section
                ref={ref}
                style={{ backgroundImage }}
                className="relative flex justify-center items-center h-screen px-6 pt-32 pb-24 text-gray-200"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="z-10 flex flex-col items-center">
                    {/* Animated Heading */}
                    <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex flex-col gap-2 justify-center items-center hover">
                            <span className="text-white/40 text-2xl sm:text-3xl font-black">
                                Transform Ideas into 
                            </span>
                            <span className="bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent text-4xl sm:text-5xl xl:text-6xl">
                                Digital Experiences
                            </span>
                        </div>
                    </motion.div>

                    {/* Animated Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Profile Picture with Hover Effect */}
                        <div className="relative mt-8 rounded-full overflow-hidden group">
                            <a href="https://github.com/Sahasawat-Boss" target="_blank" rel="noopener noreferrer">
                                {/* Profile Image */}
                                <Image
                                    className="md:w-60 w-40 h-40 md:h-60 object-cover rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-5"
                                    src="/profile-pic.jpg"
                                    alt="profile pic"
                                    width={150}
                                    height={150}
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="text-white text-center font-semibold text-sm sm:text-lg">
                                        View My GitHub
                                    </span>
                                </div>
                            </a>
                        </div>

                    </motion.div>

                    {/* Animated Subtitle */}
                    <motion.span
                        className="mt-4 mb-10 rounded-full bg-gray-600/50 text-center text-sm sm:text-lg px-5 py-1.5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <span className="hover">Hi, I&apos;m Boss — a Full-stack Developer based in Thailand.</span>
                    </motion.span>

                    {/* ✅ Animated Contact Button with Scroll Function */}
                    <motion.button
                        className="flex w-fit items-center gap-2 rounded-full px-5 py-2 text-lg"
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.85 }}
                        onClick={handleScrollToProjects} // Calls the scroll function
                    >
                        View my works
                        <FaLocationArrow className="mt-0.5 text-xs" />
                    </motion.button>
                </div>
            </motion.section>
        </main>
    );
}

export default Hero;
