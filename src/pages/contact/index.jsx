// src/pages/contact/ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/telly.jpg"; // Adjust the path to your logo
import backgroundImage from "../../background.jpg"; // Import your background image
import Map from "../../components/Map.jsx";

const ContactPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Hero Section */}
      <section
        className="h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-6xl font-bold text-white">
          <span className="text-orange-500">Contact</span> Us
        </h1>
      </section>

      {/* Information and Contact Form Section */}
      <section className="container mx-auto py-12 flex flex-col items-center justify-center md:flex-row gap-8 px-[40px]">
        {/* Contact Information */}
        <div className="bg-white md:z-100 h-[400px] shadow-lg rounded-lg md:w-1/2 p-6 text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl text-gray-700 font-bold mb-2">
            <span className="text-orange-500">Contact </span>Information
          </h2>
          <p className="text-gray-700 text-[13px] md:text-xl">
            Phone: <span className="text-orange-500">+44-34335-3344</span>
          </p>
          <p className="text-gray-700 text-[13px] md:text-xl">
            Email:{" "}
            <span className="text-orange-500">
              devongnosiseducation@gmail.com
            </span>
          </p>
          <p className="text-gray-700 text-[13px] md:text-xl">
            Address:{" "}
            <span className="text-orange-500">
              Lux Mundi Estate Plot 3727 Lugbe, Off Airport Road Abuja, Nigeria
            </span>
          </p>
        </div>

        {/* Contact Form */}
        <motion.div
          className="shadow-lg mt-[-60px] md:mt-0 rounded-lg p-8 z-10 flex flex-col h-[400px] md:w-1/2 items-center"
          style={{ background: "linear-gradient(135deg, #e0e0e0, #bdbdbd)" }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl text-gray-700 font-bold mb-4 text-center">
            Drop a <span className="text-orange-500">Message</span>
          </h2>
          <form className="space-y-4">
            <div className="flex items-center">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="flex items-center">
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Google Map */}
      <section className="container mx-auto py-12">
        <Map />
      </section>
    </div>
  );
};

export default ContactPage;