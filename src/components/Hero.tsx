"use client";

import Image from "next/image"; // ✅ Correct import for Next.js
import { useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion, animate } from "framer-motion"; // ✅ Importing from Framer Motion
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]; //code color for changing

function Hero() {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [color])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            className="relative grid min-h-[80vh] place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for work
                </span>

                <div className="flex gap-3">
                    <h1 className="text-white/40 text-3xl md:text-7xl font-black">
                        Hi, I am
                    </h1>

                    <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text leading-tight text-transparent text-3xl md:text-7xl">
                        Boss
                    </h1>
                </div>
                <Image
                    className="rounded-full"
                    src={"/profilepic.jpg"}
                    alt="profile pic"
                    width={150}
                    height={150}
                />
                <p className="my-6 max-w-xl">Passsionated to be Fullstack Developer</p>

                <motion.button
                    className="flex w-fit item-center gap-2 rounded-full px-4 py-2"
                    style={{
                        border,
                        boxShadow
                    }}
                    whileHover={{
                        scale: 1.015
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                > Download
                    <FiArrowRight className="" />
                </motion.button>




            </div>


        </motion.section>
    )
}

export default Hero