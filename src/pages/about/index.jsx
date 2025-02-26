import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../devalone.png";
import Chair from "../../gen.jpg";
import Carousel from "../../components/Carousel.jsx";
import { FaBullseye } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { GiFallingOvoid } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiFnFal } from "react-icons/gi";
import { GiOilPump } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrCompliance } from "react-icons/gr";
import singleBackgroundImage from "../../aboutus.jpg";

function About() {
  const [offsetY, setOffsetY] = useState(0);
  const [showCard, setShowCard] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
    setShowCard(true);
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
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div
          className="inset-0 bg-fixed z-0 fixed bg-center bg-cover"
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
              className="w-[200px] h-[200px] mt-[-130px]"
              style={{ transform: `translateY(${offsetY * 0.5}px)` }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.h1
              className="text-4xl md:text-6xl font-bold mt-[-60px]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Us
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
      </div>

      {/* Chairman Section */}
      <section className="hidden md:flex flex-col-reverse relative z-1 bg-white md:flex-row items-center gap-4 justify-between px-6 md:px-16 py-[40px] text-center">
        <div className="text-center md:text-left">
          <motion.h2
            className="text-3xl font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            A word from our chairman
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Globally, nations have come to realize that educated society seems
            to have relative advantage in developing faster than those that are
            not. Therefore, education is considered one of the most valuable
            treasure any nation can give to its citizens. Functional education
            should be geared towards the acquisition of knowledge and
            information as well as relevant competencies (skills, attitude,
            aptitude, etc.) Eective education therefore should go beyond mere
            literacy- ability to read and write. It should incorporate ability
            to "do" and "apply" that is, it should equip the leaners with some
            form of technical know- how. These includes the ability to use
            working tools according to standard, social behaviors etc.
            Devongnosis Education Limited see learning, unlearning and
            relearning as a continuous process and we have taken it as our
            foremost responsibility that we pass the necessary information that
            would build capacity of people in all sectors. We are committed to
            add value to society, improve operational standards, and help create
            a stable and well organized workforce in both public and private
            organizations. We believe in networking to improve standards that is
            why our team is made of a network of professionals across diverse
            field and occupation.
          </motion.p>
        </div>
        <img
          src={Chair}
          alt="Chairman's picture"
          className="w-[25vw] md:ml-[20px] flex items-center justify-center rounded-full"
        />
      </section>

      {/* Vision Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-16 text-center bg-white relative">
        {/* First Div */}
        <div className="md:w-1/2 p-4 bg-gray-100 md:bg-white mb-[20px] md:mb-[0]">
          <motion.h2
            className="text-2xl md:text-3xl md:text-left font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Devongnosis Education
          </motion.h2>
          <motion.p
            className="text-[12px] md:text-[16px] text-gray-600 mb-4 md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Devongnosis Education (DGE) is a global network of experienced
            professionals and consultants assembled with the core objective of
            providing world-class knowledge-based services to public and private
            sector institutions within and outside Africa. We leverage on a
            network of excellent partnership with world renowned training
            establishments, and business schools as well as ICT organizations in
            the US, Asia and Europe to provide combined wealth of expertise,
            re-engineered systems and cutting edge training services across a
            broad spectrum of sectors.
          </motion.p>
          <motion.button
            className="text-white md:flex text-lg px-6 py-2 rounded-3xl bg-orange-500 transition-transform duration-300 hover:scale-105 hover:text-orange-500 shadow-md hover:bg-white"
            onClick={() => setShowCard(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
        </div>

        {/* Overlay and Card */}
        {showCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                More About Our Devongnosis Education
              </h3>
              <p className="text-[12px] md:text-[16px] text-gray-700 mb-4">
                In line with our strategy for realizing set objectives,
                Devongnosis organizes National and International Programmes
                (Conferences, Workshops, Seminars and Exhibitions) with themes
                carefully selected to address critical and contemporary
                challenges. Our Programmes are organized both within and outside
                Nigeria. We collaborate with appropriate public and private
                sector organizations and professional institutions to deliver on
                our set goals and objectives. Our faculty is composed of highly
                skilled professionals in public and executive
                training/mentoring, skill acquisition & capacity building. Our
                proposal is unequalled as it is particularly tailored to
                ameliorate the challenges faced by the Nigeria Customs Service.
                Our experience and feedback from previous trainings conducted
                for the service gives us a clear understanding of these
                challenges.
              </p>
              <button
                className="text-white text-lg px-6 py-2 rounded-3xl bg-orange-500 transition-transform duration-300 hover:scale-105 hover:text-orange-500 shadow-md hover:bg-white"
                onClick={() => setShowCard(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        <div className="flex flex-col gap-4 md:w-1/2">
          {/* First Div */}
          <motion.div
            className="flex p-4 rounded-xl cursor-pointer"
            onClick={() => handleCardClick(1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaAngleDoubleRight className="text-4xl text-orange-500  h-[75px] w-[75px] md:h-[130px] md:w-[220px] md:mr-[20px]" />
            <div>
              <h2 className="text-xl md:text-2xl md:text-left font-bold text-gray-800 mb-[2px]">
                Our Mission
              </h2>
              <p className="text-[12px] md:text-[16px] text-gray-600 md:text-left">
                Our mission is to create a platform, build resourceful capacity,
                project and bring high impact development programs and a wide
                range of consultancy services that yields exceptional human
                performance in private and public sectors
              </p>
            </div>
          </motion.div>

          {/* Second Div */}
          <motion.div
            className="flex p-4 rounded-xl cursor-pointer"
            onClick={() => handleCardClick(1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBullseye className="text-4xl text-orange-500 md:h-[130px] md:w-[120px] md:mr-[20px]" />
            <div>
              <h2 className="text-xl md:text-2xl md:text-left font-bold text-gray-800 mb-[2px]">
                Our Vision
              </h2>
              <p className="text-[12px] md:text-[16px] text-gray-600 md:text-left">
                Our vision is to transform the learning world in delivering
                sustainable human capital for the present and the future
              </p>
            </div>
          </motion.div>

          {/* Third Div */}
          <motion.div
            className="flex p-4 rounded-xl cursor-pointer"
            onClick={() => handleCardClick(1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaAngleDoubleLeft className="text-4xl text-orange-500 md:h-[130px] md:w-[120px] md:mr-[20px]" />
            <div>
              <h2 className="text-xl md:text-2xl md:text-left font-bold text-gray-800 mb-[2px]">
                Our Guiding Attitude
              </h2>
              <p className="text-[12px] md:text-[16px] text-gray-600 md:text-left">
                Our primary focus is designing, developing and delivering both o
                -site and on-site training programmes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-6 md:px-16 text-center relative z-1 bg-gray-200">
        <div className="top flex items-center justify-between">
          <motion.div
            className="flex flex-col w-full md:w-1/2 items-center md:items-start mb-[15px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex gap-2">
              <GiFallingOvoid className="text-orange-500" />
              <span className="text-[12px]">Our Courses</span>
            </div>
            <div className="flex">
              <h2 className="text-xl text-center md:text-left md:text-2xl font-bold">
                Explore our <br />{" "}
                <span className="text-orange-500">different courses</span>
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-800 text-left">
              Take your skills to the next level.
            </p>
            <div className="flex items-center gap-2 text-orange-500 border-b-2 border-orange-500 w-3/5">
              <Link to="/contact" className="">
                Ask a Question
              </Link>
              <FaArrowRightLong />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:grid grid-cols-4 grid-row-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="flex flex-col cursor-pointer hover:scale-105 transition duration-300 bg-white rounded-lg text-left py-2 px-4 col-start-1 col-end-3 row-start-1 row-end-2 ">
            <GiFallingOvoid className="text-orange-500 mb-[20px]" />
            <h3 className="orange-500 text-15px font-bold text-orange-500">
              LEADERSHIP AND MANAGEMENT
            </h3>
            <p className="text-gray-800">
              The course also develops practical strategies for promoting,
              establishing and sustaining change for leaders in their
              organization.
            </p>
          </div>
          <div className="flex flex-col cursor-pointer hover:scale-105 transition duration-300 bg-white rounded-lg text-left py-2 px-4 col-start-4 col-end-5 row-start-2 row-end-3">
            <GiFallingOvoid className="text-orange-500 mb-[20px]" />
            <h3 className="orange-500 text-15px font-bold text-orange-500">
              DIGITAL MARKETING AND SOCIAL SELLING
            </h3>
            <p className="text-gray-800">
              This course would help participants understand the dynamics behind
              the digital marketing..
            </p>
          </div>
          <div className="hidden md:flex flex-col cursor-pointer hover:scale-105 transition duration-300 bg-white rounded-lg text-left py-2 px-4 col-start-1 col-end-2 row-start-2 row-end-3">
            <FaComputer className="text-orange-500 mb-[20px]" />
            <h3 className="orange-500 text-15px font-bold text-orange-500">
              ICT
            </h3>
            <p className="text-gray-800">
              ICT training is essential as digital skills become a key
              requirement for work and daily life.
            </p>
          </div>
          <div className="hidden md:flex flex-col cursor-pointer hover:scale-105 transition duration-300 bg-white rounded-lg text-left py-2 px-4 col-start-2 col-end-4 row-start-2 row-end-3">
            <GrCompliance className="text-orange-500 mb-[20px]" />
            <h3 className="orange-500 text-15px font-bold text-orange-500">
              ETHICS AND COMPLIANCE
            </h3>
            <p className="text-gray-800">
              This course will deliver a clear and integral compliance solutions
              and values in order to build trust, by ensuring that business have
              patient focus, acts with integrity, demonstration of respect for
              people and operation with transparency.
            </p>
          </div>
          <div className="hidden md:flex flex-col cursor-pointer hover:scale-105 transition duration-300 bg-white rounded-lg text-left py-2 px-4 col-start-3 col-end-5 row-start-1 row-end-2">
            <FaMoneyBillTrendUp className="text-orange-500 mb-[20px]" />
            <h3 className="orange-500 text-15px font-bold text-orange-500">
              FINANCE
            </h3>
            <p className="text-gray-800">
              Our finance training covers money management, asset control, and
              risk assessment. Designed for staff with financial
              responsibilities, these short courses are led by expert
              facilitators.
            </p>
          </div>
          <div className="hidden md:flex flex-col cursor-pointer hover:scale-105 transition duration-300 bg-white rounded-lg text-left py-2 px-4 col-start-1 col-end-2 row-start-3 row-end-4">
            <GiOilPump className="text-orange-500 mb-[20px]" />
            <h3 className="orange-500 text-15px font-bold text-orange-500">
              OIL AND GAS
            </h3>
            <p className="text-gray-800">
              This course equips participants with essential tools and knowledge
              to understand the oil and gas industry, key terms, and the oil and
              gas value chain.
            </p>
          </div>
          <div className="hidden md:flex flex-col cursor-pointer hover:scale-105 transition duration-300 bg-white rounded-lg text-left py-2 px-4 col-start-2 col-end-3 row-start-3 row-end-4">
            <GiFallingOvoid className="text-orange-500 mb-[20px]" />
            <h3 className="orange-500 text-15px font-bold text-orange-500">
              VOCATIONAL AND SKILL ACQUISITION
            </h3>
            <p className="text-gray-800">
              Training youths in specialized skills is essential for boosting
              employability in a competitive job market.
            </p>
          </div>
          <div className="hidden md:flex flex-col cursor-pointer hover:scale-105 transition duration-300 bg-white rounded-lg text-left py-2 px-4 col-start-3 col-end-5 row-start-3 row-end-4">
            <GiFnFal className="text-orange-500 mb-[20px]" />
            <h3 className="orange-500 text-15px font-bold text-orange-500">
              SECURITY TRAINING FOR MILITARY, PARA MILITARY AND THE POLICE
            </h3>
            <p className="text-gray-800">
              Security is essential for protecting people, assets, and
              organizations. This course benefits security agencies,
              paramilitary bodies, police, armed forces, and both public and
              private organizations.
            </p>
          </div>
        </motion.div>
        <div className="mt-[25px]">
          {" "}
          <Link
            to="/courses"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:bg-white hover:text-orange-500 transition-transform"
          >
            See More
          </Link>
        </div>
      </section>

      {/* Detailed Explanation Section */}
      <section className="py-16 px-6 md:px-16 text-center bg-gray-200 relative z-1">
        <motion.div
          className="py-12 w-[90%] mx-auto rounded-4xl px-6 md:px-16 bg-gray-900 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={slideInRight}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to Take Your Skills{" "}
            <span className="text-orange-500">to the Next Level?</span>{" "}
          </h2>
          <p className="mt-4 text-[13px] md:text-lg">
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
      </section>

      <section className="pt-16 pb-8 px-6 md:px-16 text-center relative z-1 bg-white">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-orange-500">Experience</span>
        </motion.h2>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-bold text-orange-500">
              Capacity Building Training and Intensive Workshop for Nigeria
              Customs Service (2014)
            </h3>
            <p className="text-gray-600">
              The workshop was a nationwide training on “Upholding Workplace
              Ethics as a Panacea for Systemic Corruption”. The training cuts
              across issue on leadership, corporate governance, accountability
              and performance, organisational integrity, rules of engagement
              etc. resource persons were picked from our network of
              professionals in Nigeria and the United states (Personnel from
              homeland securities).
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-bold text-orange-500">
              Skill Acquisition/empowerment/ Start-up Kit for Cosmetics and
              Confectioneries Production for Unemployed youths in Mbaise and
              Abuja (2016)
            </h3>
            <p className="text-gray-600">
              We had the sole responsibility to train youth and women from
              Mbaise and Abuja on the production of Air Freshener, Liquid Soap,
              Insecticides, Disinfectants etc. This was part of the constituency
              program of RT. HON. RAPHAEL NNANNA IGBOKWE. We went beyond
              classroom theories to practical session. Participants were also
              trained on how to brand their products.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-bold text-orange-500">
              Training Workshop in collaboration with The Nigerian Institute of
              Electrical Electronics Engineers (NIEEE)
            </h3>
            <p className="text-gray-600">
              Electrical Services Design for Resisdence Estates Standby Diesel
              Generator: Selection, Sezing, Installation, Operation and
              Maintenance Electrical Design for Commerce and Industrial Estates
              Air Conditioning Systems: Principles, Installation, Operation and
              Maintenance
            </p>
          </div>
          {/* Add more projects as needed */}
        </motion.div>
      </section>
      <section className="py-14 relative z-1 bg-white">
        <div className="flex items-center justify-center mb-[-25px]">
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our <span className="text-orange-500"> Clients</span>
          </motion.h2>
        </div>

        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={dropIn}
        >
          <Carousel />
        </motion.div>
      </section>
    </div>
  );
}

export default About;