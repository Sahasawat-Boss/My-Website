"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";

export default function Project2() {
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
            id="Project2"
            className="relative w-full h-fit flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white px-14 pb-20"
        >
            {/*== Project 2==*/}
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
                        <h3 className="text-2xl font-bold text-white">AI Chatbot v2</h3>
                        <hr className="my-2 border-gray-500" />
                        <p className="text-gray-300">
                            AI Chatbot v2 is a Next.js-powered chatbot using the Gemini API (free key) for AI-driven conversations. Fast, smart, and hosted on Vercel.
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
                            onClick={() => openModal(src)}
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