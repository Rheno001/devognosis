// src/pages/trainers/TrainersPage.jsx
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import logo from "../../assets/devalone-removebg-preview.png";
import singleBackgroundImage from "../../lecturers.jpg";
import Form from "../../components/Form.jsx";

const trainers = [
  {
    name: "BRIG GEN D B SHALJABA (rtd)",
    subject: "Security Intelligence,counter terrorism.",
    qualifications: "fwc MSc MASSA psc(++)",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "MR. MUHAMMAD LEMU",
    subject: "Physics",
    qualifications: "BSc Agric, MSc Resource Management",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "MR. SYLVESTER OKEREKE",
    subject: "Chemistry",
    qualifications: "BSc in Chemistry, 3 years of teaching experience",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "DR PADDY KEMDI NJOKU",
    subject: "Biology",
    qualifications: "PhD in Biology, 8 years of teaching experience",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "PROF. PAUL OMOJO OMAJI,",
    subject: "English",
    qualifications: "MA in English, 6 years of teaching experience",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "MR ONOJA ISAAC",
    subject: "History",
    qualifications: "BA in History, 4 years of teaching experience",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "DR. LIONEL RAWLINS",
    subject: "History",
    qualifications: "BA in History, 4 years of teaching experience",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "DAVID V. AGUILAR",
    subject: "History",
    qualifications: "BA in History, 4 years of teaching experience",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "DR. LINUS OKORIE",
    subject: "History",
    qualifications: "BA in History, 4 years of teaching experience",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "AMB. ODU, AKPANG ADE OBI,",
    subject: "History",
    qualifications: "BA in History, 4 years of teaching experience",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "UGWUMMADU, KINGSLEY",
    subject: "ICT",
    qualifications: "B.sc, CCNA, MCP, MCTS",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "DR. SAMSON A. SHAIBU",
    subject: "History",
    qualifications: "BA in History, 4 years of teaching experience",
    image: "https://via.placeholder.com/150",
  },
];

const TrainersPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleSwipe = (direction) => {
    if (direction === "LEFT") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length);
    } else if (direction === "RIGHT") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + trainers.length) % trainers.length
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div
        className="relative inset-0 bg-gradient-to-b from-gray-800 to-gray-600 z-0 h-[500px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${singleBackgroundImage})`,
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <motion.img
            src={logo} // Replace with the actual path to your logo
            alt="Organization Logo"
            className="w-[200px] h-[200px] mb-[-40px]"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-shadow"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet our Expert Trainers
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover our mission, vision, and goals.
          </motion.p>
        </div>
      </div>

      {/* Trainers Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our <span className="text-orange-500">Trainers</span>
          </h2>
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 text-shadow">{trainer.name}</h3>
                  <p className="text-gray-700 mb-1">
                    <strong>Subject:</strong> {trainer.subject}
                  </p>
                  <p className="text-gray-700">
                    <strong>Qualifications:</strong> {trainer.qualifications}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div
            className="sm:hidden relative flex flex-col mx-auto w-[90%]"
            {...handlers}
          >
            <div className="flex overflow-hidden">
              {trainers.map((trainer, index) => (
                <motion.div
                  key={index}
                  className={`inline-block bg-white shadow-lg rounded-lg overflow-hidden mr-4 transition-transform duration-500 ease-in-out transform ${
                    index === currentIndex
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ display: index === currentIndex ? "block" : "none" }}
                >
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-64 h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                    <p className="text-gray-700 mb-1">
                      <strong>Subject:</strong> {trainer.subject}
                    </p>
                    <p className="text-gray-700">
                      <strong>Qualifications:</strong> {trainer.qualifications}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {trainers.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-12 bg-white relative overflow-x-clip">
        <motion.div
          className="absolute inset-0 :w-full h-full"
          animate={{ y: [0, 10, 0] }} // Simple up and down motion
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="absolute inset-0 w-[400vw] md:w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 165, 0, 0.5)"
              d="M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,186.7C420,171,480,149,540,144C600,139,660,149,720,170.7C780,192,840,224,900,245.3C960,267,1020,277,1080,245.3C1140,213,1200,139,1260,128C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
            ></path>
          </svg>
        </motion.div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial={{ y: 0 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            <span className="text-orange-500">Contact</span> Us
          </h2>
          <motion.div
            className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
           <Form/>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default TrainersPage;