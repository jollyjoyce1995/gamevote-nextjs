"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css"
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navbarRef = useRef(null);
    const sessionData = useSession()

    console.log(sessionData);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={navbarRef}
            className={`${styles.navbar} bg-white shadow`}
            style={{
                padding: isScrolled ? "30px 10px" : "80px 10px",
                transition: "padding 0.3s ease",
                background: "#ddd",
            }}>
            <div className={`${styles.navbarContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0"
                        style={{
                            width: isScrolled ? 200 : 500,
                            height: isScrolled ? 100 : 250,
                            transition: "width 0.3s ease, height 0.3s ease",
                            position: "relative"
                        }}>
                        <a href="#" className="text-xl font-bold text-indigo-600">
                            <Image src="/logo.png" alt="asdf" fill></Image>
                        </a>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-700 hover:text-indigo-600">asdf</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Services</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
                    </div>

                    <div className="md:hidden">
                        <button id="menu-button" className="text-gray-700 focus:outline-none focus:text-indigo-600">
                            ☰
                        </button>
                    </div>
                </div>

                <div id="mobile-menu" className="hidden md:hidden px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="block text-gray-700 hover:text-indigo-600">Home</a>
                    <a href="#" className="block text-gray-700 hover:text-indigo-600">About</a>
                    <a href="#" className="block text-gray-700 hover:text-indigo-600">Services</a>
                    <a href="#" className="block text-gray-700 hover:text-indigo-600">Contact</a>
                </div>
            </div>
        </div>
    );
}
