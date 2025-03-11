"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";

export default function ProjectOther() {
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
            id="ProjectOther"
            className="relative w-full h-fit flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-950 text-white px-14 pt-8 pb-8"
        >
            {/*== Project 2==*/}
            <div ref={ref} className="max-w-6xl mx-auto flex-col items-center justify-center gap-12">
                {/* Title Section*/}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >

                </motion.div>

                {/* Right Section: Image */}
                <div className="flex flex-col justify-center items-center gap-4">
                    {/* Customizable Project Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col max-w-xs justify-center items-center">
                            <h3 className="text-3xl font-bold text-white text-center border-b border-gray-500 mt-4 my-3 pb-2">
                                My Other Projects
                            </h3>
                        </div>
                    </motion.div>
                    <motion.div
                        className="w-full grid grid-cols-2  md:grid-cols-3  gap-4 justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        {["/aichat2/aichat2md.png", "/aichat2/aichat1md.png", "/Bp/crud2.png", "/Bp/crud.png", "/Bp/crud3.png", "/Bp/bp1.png", "/Bp/bp2.png", "/store/Store1.png"].map((src, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openModal(src)}
                                className="cursor-pointer"
                            >
                                <Image
                                    src={src}
                                    alt="Sample Project"
                                    width={220}
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
                            width={700}
                            height={350}
                            className="rounded-lg"
                        />
                    </div>
                </Modal>
            </div>
        </section>
    );
}