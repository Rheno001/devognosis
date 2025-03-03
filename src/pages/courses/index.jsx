import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import logo from "../../devalone.png";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Testimonials from "../../components/Testimonials.jsx";
import { Link } from "react-router-dom";
import { GiFallingOvoid } from "react-icons/gi";
import singleBackgroundImage from "../../courses.jpg";

const courses = [
  {
    id: 1,
    title: "LEADERSHIP AND MANAGEMENT",
    description:
      "The course also develops practical strategies for promoting, establishing and sustaining change for leaders in their organization.",
    details:
      "COURSE OBJECTIVES: Gain greater understanding of a leader's responsibilities, Create and maintain an ecient, effective and motivated team,Improve your ability to communicate with the team and your customers, Maximize your team performance by understanding human behavior and focusing on the needs of the individual and the team Strengthen your techniques for managing the performance of the team.",
    extra:
      "PROGRAMS: Leadership: The Attributes, Principles and Power, Developing Leaders for Sustainable, TransformationRelationship management, Human resource management, Communication techniques, Performance Management, Change management, Essentials of effective management, Leading High performance Organisation, Strategic Business Leadership: Engagement, Performance, and Execution Negotiation: Strategies and processes for impactful outcomes, Negotiation and decision making Strategies, Project Management Professionals, Real estate Management, Personal Development for Secretaries and Administrators, Pension Management, Disaster management, No-nonsense Leadership Strategic Management for Public Sector",
  },
  {
    id: 2,
    title: "SECURITY TRAINING FOR MILITARY, PARAMILITARY AND THE POLICE",
    description:
      "This course enhances security for people, assets, and organizations, benefiting security forces, police, military, and public or private sectors",
    details:
      "COURSE OBJECTIVES: Deal with the public in a professional and ethical manner Communicate eectively, both verbally and in writing To foster attitudes to integrity, selflessness and loyalty which set the soldier apart from others. To teach Ocer Cadets how to think and communicate as commanders and to foster a deep interest and care for the individual. React and take appropriate measures in emergency situations Understand human rights and diversity and perform other duties, as required.",
    extra:
      "PROGRAMS: Oraganisational Security and Management, Command and Control and Leadership, Loss prevention, Emotional intelligence, Cultural and border Intelligence, Close protection Security guarding, CCTV training, Door supervisor, Personal licence, Close Quarter Battle, Combat Trauma Medicine, Marksmanship, Mobility Operations, Amphibious Operations, Surveillance and Intelligence gathering techniques including Cyber Operations, Maritime Counter Terrorism including Special Forces diving, Clearance Diving and Evasive Driving, Explosive Method of Entry",
  },
  {
    id: 3,
    title: "ETHICS AND COMPLIANCE",
    description:
      "This course provides clear compliance solutions to build trust by ensuring businesses prioritize patients, act with integrity, respect people, and operate transparently.",
    details:
      "OBJECTIVES: To ensure strict compliance with ethical codes of conduct at workplace or business environment. To exhibit high moral responsibility in respect to compliance with ethical standards. Establish protocol for individuals to report ethics violation. Increase the awareness of people to always conform to standards",
    extra:
      "PROGRAMS: Upholding workplace ethics compliance as a panacea for systemic corruption, Global anti-bribery and corruption, Ethics and code of conduct for supervisors, Fair competition and anti-trust module, Foreign corrupt practices act and export controls, Ethics and code of conduct for all employees(basic), Procurement integrity, Ethical decision making simulation, Conflict of interest simulation, Work place diversity awareness, Government contracting essentials, Oversight and assessment, Anti-retaliation policy, Preventing fraud and abuse",
  },
  {
    id: 4,
    title: "OIL AND GAS",
    description:
      "This course equips participants with essential tools and knowledge to understand the oil and gas industry, key terms, and the oil and gas value chain.",
    details:
      "OBJECTIVES: Understand the wide scope of the oil and gas industry. Learn the importance of projects within the industry, how and why they are developed and led. Understand the critical commercial features and techniques of the industry and how they need to be applied. Learn valuable insights in key managerial, supervisory and leadership principles that are vital for business success.",
    extra:
      "PROGRAMS: Financial modelling and petroleum project economics, Supply Chain Management, Essential skills for oil and gas professionals, Management of international petroleum projects, HR management for oil and gas managers and supervisors, International gas business management, International petroleum law workshop, Advanced petroleum management programme Project services, Health Safety and Environment(HSE).",
  },
  {
    id: 5,
    title: "FINANCE",
    description:
      "Our finance training covers money management, asset control, and risk assessment. Designed for staff with financial responsibilities, these short courses are led by expert facilitators.",
    details:
      "OBJECTIVES: Participants should be able to: Understand the importance of budgeting and forecasting and also monitoring their performance. Implement, maintain and monitor financial control. Apply the fundamental concepts and tools of finance Explain the global financial environment and the globalization process experienced by organisations.",
    extra: "",
  },
  {
    id: 6,
    title: "VOCATIONAL AND SKILL ACQUISITION",
    description:
      "Training youths in specialized skills is essential for boosting employability in a competitive job market.",
    details:
      "PROGRAMS: Fashion design, Ankara craft, Products and cream making, Professional make over, Microsoft office, Fruit art training, Organic skin care, Pastries, Solar installation, maintenance and management services, Photography and video editing, Research and statistical analysis, Bead making, Fish farming, Wood work, Metal work, Computer repair and networking Driving",
  },
  {
    id: 7,
    title: "ICT",
    description:
      "ICT training is essential as digital skills become a key requirement for work and daily life.",
    details:
      "OBJECTIVES: To equip learners with the appropriate social skills required to cooperate with fellow ICT learners for a more productive learning. To help individuals become competent and confident users who can use the basic knowledge and skills acquired to assist them in their daily lives. To develop and use ICT to foster institutional collaboration among administrative communities. To enhance institutional capacities for networking, development and delivering of content and services. To build capacities in ICT for teaching, research and community service.",
    extra:
      "PROGRAMS: SOFWARE ENGINEERING, MOBILE APP DEVELOPMENT, DATABASE MANAGEMENT SYSTEM, COMPUTER NETWORKS, LAN Administration, Wireless Technology, Server technology, CCNA, CCNP, CCIE GRAPHICS AND ANIMATION",
  },
  {
    id: 8,
    title: "DIGITAL MARKETING AND SOCIAL SELLING",
    description:
      "This course would help participants understand the dynamics behind the digital marketing..",
    details:
      "PROGRAMS: Dynamic Search Advertising, Display Advertising, Social Selling, Adword and Adsense, Mobile Advertising(Admob), Social media Marketing, Search Engine Optimisation, E-commerce, DIGITAL MARKETING AND SOCIAL SELLING, E-mail Marketing",
  },
];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [offsetY, setOffsetY] = useState(0);

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div
        className="relative h-[500px] overflow-hidden bg-cover bg-center inset-0 bg-fixed z-0"
        style={{
          backgroundImage: `url(${singleBackgroundImage})`, // Use a single background image
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url(/path/to/hero-image.jpg)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
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
              className="text-4xl md:text-6xl font-bold relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Our <span className="text-orange-500">Courses</span>
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

      {/* Courses Grid (Desktop) & Carousel (Mobile) */}
      <div className="relative container mx-auto px-4 py-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="shape circle" />
          <div className="shape square" />
          <div className="shape triangle" />
        </div>
        <div className="hidden md:grid grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              setSelectedCourse={setSelectedCourse}
            />
          ))}
        </div>
        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id} className="mb-[30px]">
                <CourseCard
                  course={course}
                  setSelectedCourse={setSelectedCourse}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        className="fixed inset-0 z-50"
      >
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <Dialog.Title className="text-xl font-bold">
              {selectedCourse?.title}
            </Dialog.Title>
            <p className="mt-2 text-gray-700">{selectedCourse?.details}</p>
            <p className="mt-2 text-gray-700">{selectedCourse?.extra}</p>
            <button
              onClick={() => setSelectedCourse(null)}
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-2xl hover:bg-white hover:text-orange-500 duration-300 hover: shadow-lg"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      <div className="relative py-16 px-6 md:px-16 text-center bg-gray-200">
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
      </div>

      <div className="test p-4 rounded-lg mx-auto mt-[40px] pb-[40px] relative overflow-x-clip">
        <svg
          className="absolute inset-0 w-[200vw] md:w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgb(255, 179, 102"
            d="M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,186.7C420,171,480,149,540,144C600,139,660,149,720,170.7C780,192,840,224,900,245.3C960,267,1020,277,1080,245.3C1140,213,1200,139,1260,128C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          ></path>
        </svg>
        <Testimonials />
      </div>
    </div>
  );
}

function CourseCard({ course, setSelectedCourse }) {
  return (
    <div
      className="bg-white p-4 hover:scale-105 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
      onClick={() => setSelectedCourse(course)}
    >
      <div>
        <GiFallingOvoid className="text-orange-500 mb-[20px]" />
      </div>
      <h2 className="text-lg font-semibold text-orange-500">{course.title}</h2>
      <p className="text-gray-600 mt-1">{course.description}</p>
    </div>
  );
}