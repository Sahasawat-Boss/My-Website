"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useMotionValue, useMotionTemplate, motion, animate, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

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
    const handleScrollToContact = () => {
        const contactSection = document.querySelector("#Contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main id="hero">
            <motion.section
                ref={ref}
                style={{ backgroundImage }}
                className="relative flex justify-center items-center h-[85vh] px-6 pt-28 pb-24 text-gray-200"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="z-10 flex flex-col gap-y-3 items-center">
                    {/* Animated Heading */}
                    <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-white/40 text-4xl sm:text-6xl font-black">
                            Hello, I&apos;m
                        </span>
                        <span className="bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent text-4xl sm:text-6xl">
                            Boss
                        </span>
                    </motion.div>

                    {/* Animated Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Profile Picture with Hover Effect */}
                        <div className="relative mt-10 rounded-full overflow-hidden cursor-pointer group">
                            <a href="https://github.com/Sahasawat-Boss" target="_blank" rel="noopener noreferrer">
                                {/* Profile Image */}
                                <Image
                                    className="md:w-60 w-40 h-40 md:h-60 object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                                    src="/profile-pic.jpg"
                                    alt="profile pic"
                                    width={150}
                                    height={150}
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="text-white text-center font-semibold text-sm sm:text-lg">
                                        View Boss&apos;s GitHub
                                    </span>
                                </div>
                            </a>
                        </div>

                    </motion.div>

                    {/* Animated Subtitle */}
                    <motion.span
                        className="mt-4 mb-10 inline-block rounded-full bg-gray-600/50 text-center text-sm sm:text-lg px-5 py-1.5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        I&apos;m passionate about mastering full-stack development.
                    </motion.span>

                    {/* ✅ Animated Contact Button with Scroll Function */}
                    <motion.button
                        className="flex w-fit items-center gap-2 rounded-full px-5 py-2 text-lg cursor-pointer"
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.85 }}
                        onClick={handleScrollToContact} // Calls the scroll function
                    >
                        Contact Me
                        <FiArrowRight className="mt-1 text-lg" />
                    </motion.button>
                </div>
            </motion.section>
        </main>
    );
}

export default Hero;
