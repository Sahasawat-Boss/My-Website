"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function ProjectOther() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const images = [
        "/other/Sone3.png", "/other/Sone.png","/other/galmock.png",
        "/aichat2/aichat2md.png", "/aichat2/aichat1md.png",
        "/Bp/bp1.png", "/Bp/bp2.png", 
        "/Bp/crud2.png", "/Bp/crud.png", "/Bp/crud3.png",
        "/store/Store1.png",
    ];

    const openModal = (imageSrc: string) => {
        setModalImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    // Scroll Functions
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <section
            id="ProjectOther"
            className="relative w-full h-fit flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-950 text-white px-6 pt-8 pb-8"
        >
            {/* Title */}
            <motion.div
                className="w-full text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-3xl font-bold border-b border-gray-500 inline-block pb-2">
                    My Other Projects
                </h3>
            </motion.div>

            {/* Scrollable Image Section with Arrows */}
            <div className="relative w-full max-w-6xl mt-6 flex items-center bg-black/70">
                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 z-10 bg-black bg-opacity-65 p-2 rounded-full hover:bg-opacity-85 transition"
                >
                    <AiOutlineLeft className="w-8 h-8 text-white" />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="w-full overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-gray-400 flex space-x-4 px-12 py-2"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openModal(src)}
                            className="cursor-pointer flex-shrink-0"
                        >
                            <Image
                                src={src}
                                alt={`Project ${index + 1}`}
                                width={250}
                                height={250}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 z-10 bg-black bg-opacity-65 p-2 rounded-full hover:bg-opacity-85 transition"
                >
                    <AiOutlineRight className="w-8 h-8 text-white" />
                </button>
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
        </section>
    );
}
