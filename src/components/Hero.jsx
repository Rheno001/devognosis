// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import singleBackgroundImage from '../bg4.jpg'; // Update with your image path

const HeroSection = () => {
    const textRef = useRef(null);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 3 } }, // Slow fade-in
    };

    const slideDown = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Slow slide-down
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    textRef.current.classList.add('slide-in');
                }
            },
            { threshold: 0.1 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <section className='relative overflow-hidden'>
            <div className="inset-0 bg-fixed z-0 fixed h-full bg-center bg-cover"
            style={{
                backgroundImage: `url(${singleBackgroundImage})`, // Use a single background image
                transition: 'background-image 1s ease-in-out',
            }}>
                </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            <div className="container h-screen mx-auto text-center px-4 relative z-10 flex flex-col justify-center items-center">
                <motion.h1
                    className="text-4xl md:text-7xl font-bold mb-4 text-orange-500"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn}
                >
                    Devongnosis <span className='text-white'>Education</span>
                </motion.h1>
                <motion.p
                    className="text-lg max-w-2xl mx-auto text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={slideDown}
                >
                    Our trainers are industry leaders with years of experience and a passion for teaching. They are dedicated to helping you achieve your learning goals with personalized guidance and support.
                </motion.p>
                <Link
                    to="/contact"
                    className="mt-[20px] text-white text-lg px-6 py-2 rounded-3xl bg-orange-500 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-orange-500"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;