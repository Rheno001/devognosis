import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import about from "../../hands.jpg";
import faq from "../../questions.jpg";
import Testimonials from "../../components/Testimonials.jsx";
import Carousel from "../../components/Carousel.jsx";
import Hero from "../../components/Hero.jsx";
import singleBackgroundImage from "../../bg4.jpg";

const images = [
  "../../assets/bg1.jpg",
  "../../assets/bg2.jpg",
  "../../assets/bg3.jpg",
  "../../assets/bg4.jpg",
  "../../assets/bg5.jpg",
];

const courses = [
  "LEADERSHIP AND MANAGEMENT",
  "SECURITY TRAINING FOR MILITARY, PARA-MILITARY AND THE POLICE",
  "ETHICS AND COMPLIANCE",
  "OIL AND GAS",
  "FINANCE",
  "VOCATIONAL AND SKILL ACQUISITION",
  "DIGITAL MARKETING AND SOCIAL SELLING",
  "INFORMATION AND COMMUNICATION TECHNOLOGY",
];

const Landing = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const dropIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Hero Section with Image Slider */}
      <div className="relative flex h-screen w-full">
        <div
          className="inset-0 bg-fixed z-0 fixed bg-center bg-cover"
          style={{
            backgroundImage: `url(${singleBackgroundImage})`,
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-[40px] mt-[80px]">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mt-[-60px]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-orange-500">Devongnosis </span>Education
            </motion.h1>
            <div className="text-center md:w-[50%]">
              <motion.p
                className="mt-4 text-lg md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Our trainers are industry leaders with years of experience and a
                passion for teaching. They are dedicated to helping you achieve
                your learning goals with personalized guidance and support.
              </motion.p>
            </div>
            <Link
              to="/contact"
              className="mt-[20px] text-white text-lg px-6 py-2 rounded-3xl bg-orange-500 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-orange-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div
        className="py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 z-1 relative bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideInLeft}
      >
        <div className="relative md:w-1/2 flex justify-center">
          <motion.div variants={slideInLeft}>
            <img
              src={about}
              alt="About Us"
              className="md:w-full rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={slideInLeft}
        >
          <h2 className="text-3xl font-semibold text-gray-800">
            <span className="text-orange-500">About </span>Us
          </h2>
          <p className="mt-4 text-gray-600">
            Devongnosis Education (DGE) is a global network of experienced
            professionals and consultants assembled with the core objective of
            providing world-class knowledge-based services to public and private
            sector institutions within and outside Africa.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform hover:bg-white hover:text-orange-500"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Courses Section with Carousel */}
      <motion.div
        className="py-16 px-6 md:px-16 text-center z-1 relative bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={dropIn}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Our <span className="text-orange-500">Courses</span>
        </h2>
        <div className="overflow-hidden relative w-full py-[20px]">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: [0, -1200, 0] }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg rounded-xl p-6 w-60 text-center cursor-pointer flex flex-col items-center justify-center"
                onClick={() => (window.location.href = "/courses")}
              >
                <h3 className="text-xl font-bold text-gray-800">{course}</h3>
                <p className="text-gray-600 mt-2">
                  Learn {course} from industry experts.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/courses"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:bg-white hover:text-orange-500 transition-transform"
          >
            See More
          </Link>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="py-16 px-6 md:px-16 z-1 relative bg-gradient-to-r from-gray-900 to-gray-700 text-white flex flex-col md:flex-row gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideInLeft}
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="mt-4 text-lg">
            Find answers to common questions about our training programs.
          </p>
          <img src={faq} alt="" className="rounded-lg md:w-[35vw] mt-[20px]" />
        </div>
        <div className="md:mt-[75px] md:w-1/2 space-y-4">
          {[
            "What courses do you offer?",
            "Are the courses online?",
            "Do you provide certifications?",
            "How do I enroll?",
            "What is the duration of each course?",
          ].map((faq, index) => (
            <details
              key={index}
              className="bg-gray-800 p-4 rounded-md cursor-pointer"
            >
              <summary className="font-semibold">{faq}</summary>
              <p className="text-gray-300 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </details>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Carousel */}
      <motion.div
        className="py-[60px] bg-white z-1 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={dropIn}
      >
        <Testimonials />
      </motion.div>

      {/* CTA Section */}
      <div className="bg-white z-1 relative ">
        <motion.div
          className="hidden  md:block py-16 w-[90%] mx-auto rounded-4xl px-6 md:px-16 bg-gray-900 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={slideInRight}
        >
          <h2 className="text-3xl font-semibold">
            Ready to Take Your Skills{" "}
            <span className="text-orange-500">to the Next Level?</span>{" "}
          </h2>
          <p className="mt-4 text-lg">
            Join our training programs and start learning today. Take the first
            step towards your dream career!
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block px-8 py-4 bg-white text-orange-500 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </motion.div>
        <motion.div
          className="z-1 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={dropIn}
        >
          <div className="flex flex-col pt-[20px] items-center justify-center">
          <motion.h2
            className="text-2xl mt-[10px] font-bold text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our <span className="text-orange-500"> Clients</span>
          </motion.h2>
          <Carousel />
          </div>
          
         
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
