"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";

export default function Project1() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 }); // Retriggers animation when 20% is in view
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (imageSrc: string) => {
        setModalImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <section
            id="Project1"
            className="relative w-full h-fit flex flex-col items-center justify-center bg-gradient-to-b from-black to-blue-900 text-white px-14 pt-20"
        >
            {/*== Title ==*/}
            <div ref={ref} className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                    className="w-fit"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-bold mt-8  mb-8">
                        My <span className="text-purple-400">Recent Projects</span>
                    </h2>
                </motion.div>
            </div>

            {/*== Project 2==*/}
            <div ref={ref} className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Section: Text */}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Customizable Project Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-white">AI-Summarizer</h3>
                        <hr className="my-2 border-gray-500" />
                        <p className="text-gray-300">
                        AI-Summarizer is a web application that extracts and summarizes web articles into concise, easy-to-read summaries using AI.
                        </p>

                        {/* Stunning Button for AI Chatbot */}
                        <a
                            href="https://ai-summarizer-boss-demo.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Try AI-Summarizer →
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Section: Image */}
                <motion.div
                    className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {["/ai-sum/ai-sum1.jpg", "/ai-sum/ai-sum2.jpg"].map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openModal(src)}
                            className="cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt="Project Preview"
                                width={250}
                                height={150}
                                className="rounded-lg shadow-lg "
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal for Enlarged Image */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                overlayClassName="fixed inset-0 z-50"
                ariaHideApp={false}
            >
                <div className="relative cursor-pointer" onClick={closeModal}>
                    <Image
                        src={modalImage}
                        alt="Enlarged Project Preview"
                        width={650}
                        height={350}
                        className="rounded-lg"
                    />
                </div>
            </Modal>
        </section>
    );
}