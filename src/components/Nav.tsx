"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
    { title: "About", path: "#hero" },
    { title: "Stack", path: "#stack" },
    { title: "Projects", path: "#Project1" },
    { title: "Services", path: "#services" },
    { title: "Contact", path: "#Contact" },
];

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        const target = document.querySelector(path);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        closeNav();
    };

    return (
        <nav className="fixed w-full top-0 z-50 flex justify-center py-4 px-6 text-white">
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center justify-center backdrop-blur-lg bg-black/55 border border-white/40 rounded-full px-6 py-3">
                <ul className="flex space-x-9">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                className="hover:text-purple-400 transition-all duration-300"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div
                onClick={toggleNav}
                className="md:hidden fixed top-6 right-6 border border-white/70 rounded p-2 text-white cursor-pointer z-50"
            >
                {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black/90 transition-transform duration-300 ${navOpen ? "translate-x-0" : "-translate-x-full"
                    } md:hidden`}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-10 text-3xl">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                onClick={(e) => handleSmoothScroll(e, link.path)}
                                className="hover:text-purple-400 transition-all duration-300"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
