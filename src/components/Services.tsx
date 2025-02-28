"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
    {
        "id": "01",
        "title": "Web Development",
        "description": "Building high-performance, scalable web applications and websites that deliver seamless user experiences while aligning with your brand’s vision and business objectives."
    },
    {
        "id": "02",
        "title": "Mockup Design",
        "description": "Transforming ideas into visually compelling and user-centric mockups, ensuring intuitive layouts, aesthetics, and seamless functionality before development begins."
    },
    {
        "id": "03",
        "title": "Workflow Design",
        "description": "Optimizing and structuring business processes with efficient workflow solutions to enhance productivity and streamline operations."
    }
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const Services: FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 }); // Retriggers animation when 20% is in view

    return (
        <section id="services" ref={ref} className="bg-black text-white pt-20 px-12 mx-auto md:px-24">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-purple-400 uppercase mb-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    Services
                </motion.h2>

                <div className="grid gap-8">
                    {services.map((service, index) => (
                        //smooth slide-in effect.
                        <motion.div
                            key={service.id}
                            className="flex items-start gap-6"
                            initial={{ opacity: 0, x: -70 }}  // Initial state: Hidden & shifted left
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animation trigger
                            transition={{ duration: 1, delay: index * 0.2 }} // Smooth transition with stagger effect
                        >

                            <span className="text-3xl font-bold text-purple-400">
                                {service.id}
                            </span>
                            <div>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
