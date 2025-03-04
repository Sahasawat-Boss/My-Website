"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.25 }); // Animation triggers when 25% is in view

    return (
        <section id="Contact" ref={ref} className="bg-gradient-to-b from-purple-950 to-black text-white pt-8 pb-8 px-12 lg:px-20">
            <div className="flex flex-col justify-center items-center">
                {/* Title */}
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    Get in <span className="text-purple-400">touch</span>
                </motion.h2>

                {/* Contact Box */}
                <motion.div
                    className="bg-gray-900 w-fit px-12 rounded-xl p-5 shadow-lg"
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Github */}
                    <div className="mb-6">
                        <p className="text-gray-400">Github</p>
                        <a href="https://github.com/Sahasawat-Boss" target="_blank" className="text-lg ml-3 font-bold text-white flex items-center gap-1 hover:text-purple-400">
                            https://github.com/Sahasawat-Boss <FiExternalLink />
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="mb-6">
                        <p className="text-gray-400">Phone</p>
                        <a className="text-lg ml-3 font-bold text-white flex items-center gap-1 hover:text-purple-400">
                            086-868-4466
                        </a>
                    </div>

                    {/* Email */}
                    <div className="mb-2">
                        <p className="text-gray-400">Email</p>
                        <a className="text-lg ml-3 font-bold text-white flex items-center gap-1 hover:text-purple-400">
                            sahasawat.rk@gmail.com
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
