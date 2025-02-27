"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Project1() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 }); // Retriggers animation when 20% is in view

    return (
        <section
            id="Project1"
            className="relative w-full h-fit flex flex-col items-center justify-center bg-gradient-to-b from-black to-blue-900 text-white px-14 py-20"
        >
            {/*== Title ==*/}
            <div ref={ref} className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                    className="w-fit"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold mb-8">
                        My <span className="text-purple-400">Recent Projects</span>
                    </h2>
                </motion.div>
            </div>

            {/*== Project 1==*/}
            <div ref={ref} className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Section: Text */}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Customizable Project Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-white">Process Inspection Request System (PIR) </h3>
                        <hr className="my-2 border-gray-500" />
                        <p className="text-gray-300">
                            PIR simplifies request creation, tracking, and management. Users submit detailed requests, monitor progress, and generate reports efficiently.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right Section: Image */}
                <motion.div
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {["/aichat2/aichat1md.png", "/aichat2/aichat2md.png"].map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt="Project Preview"
                                width={300}
                                height={150}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}