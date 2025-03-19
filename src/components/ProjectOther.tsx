"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

export default function ProjectOther() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const images = [
        "/other/Sone3.png", "/other/Sone.png", '/mockup/mock1.png', '/mockup/mock2.png', '/mockup/mock3.png',
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
            scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

// Auto-scroll with infinite loop
useEffect(() => {
    const interval = setInterval(() => {
        if (scrollContainerRef.current) {
            if (
                scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth >=
                scrollContainerRef.current.scrollWidth
            ) {
                // If at the end, scroll back to the start
                scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Otherwise, keep scrolling right
                scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
            }
        }
    }, 1500); // Faster scroll every 1.5 seconds

    return () => clearInterval(interval);
}, []);


    return (
        <section className="relative w-full flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-950 text-white px-6 pt-12 pb-16">

            {/* Title with Animation */}
            <motion.div
                className="w-full text-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-4xl font-extrabold text-white drop-shadow-md border-b-4 border-purple-500 inline-block pb-2">
                    Featured Projects
                </h3>
            </motion.div>

            {/* Scrollable Image Section with Arrows */}
            <div className="relative w-full max-w-5xl flex items-center justify-center">

                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 z-20 bg-black/50 p-3 rounded-full hover:bg-opacity-80 transition duration-300 shadow-md"
                >
                    <AiOutlineLeft className="w-8 h-8 text-white" />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="w-full overflow-x-scroll overflow-y-hidden flex space-x-2 x-12 py-4 scrollbar-hide snap-x snap-mandatory"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openModal(src)}
                            className="cursor-pointer flex-shrink-0 transition-transform duration-300"
                        >
                            <div className="relative group">
                                <Image
                                    src={src}
                                    alt={`Project ${index + 1}`}
                                    width={280}
                                    height={180}
                                    className=" shadow-xl group-hover:shadow-purple-500/40"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300  flex items-center justify-center text-lg font-bold text-white opacity-0 group-hover:opacity-100">
                                    Click to View
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 z-20 bg-black/50 p-3 rounded-full hover:bg-opacity-80 transition duration-300 shadow-md"
                >
                    <AiOutlineRight className="w-8 h-8 text-white" />
                </button>
            </div>

            {/* Modal for Enlarged Image */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-lg z-50"
                overlayClassName="fixed inset-0 z-50"
                ariaHideApp={false}
            >
                {/* Click anywhere to close */}
                <div className="absolute inset-0" onClick={closeModal}></div>

                <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg">

                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
                    >
                        <AiOutlineClose className="w-6 h-6 text-white" />
                    </button>

                    <Image
                        src={modalImage}
                        alt="Enlarged Project Preview"
                        width={800}
                        height={450}
                        className="rounded-lg"
                    />
                </div>
            </Modal>
        </section>
    );
}
