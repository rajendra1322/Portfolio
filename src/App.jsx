import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import rajendra from "./assets/raj.jpg";

// ICONS
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiTailwindcss, SiExpress
} from "react-icons/si";
import sportkart from './assets/sportkart.png'
import rajmart from './assets/rajmart.png'
import cms from './assets/cms.png'


function App() {
  const [page, setPage] = useState("home");

  const fade = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 bg-black/30 backdrop-blur-md sticky top-0 z-50">

  {/* LOGO + NAME */}
  <div className="flex items-center gap-3">
    <img
      src="/rajendralogo.jpg"   // 👉 put your logo inside public folder
      alt="logo"
      className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full hover:scale-150 duration-500 transition"
    />

    <h1 className="text-xl md:text-2xl font-bold">
      Rajendra
    </h1>
  </div>

  {/* NAV BUTTONS */}
  <div className="flex gap-4 md:gap-6">
    <button
      onClick={() => setPage("home")}
      className={page === "home" ? "text-purple-400" : ""}
    >
      Home
    </button>

    <button
      onClick={() => setPage("projects")}
      className={page === "projects" ? "text-purple-400" : ""}
    >
      Projects
    </button>

    <button
      onClick={() => setPage("contact")}
      className={page === "contact" ? "text-purple-400" : ""}
    >
      Contact
    </button>
  </div>

</nav>

      <div className="p-6 md:p-10">

        {/* ================= HOME ================= */}
        {page === "home" && (
          <motion.div variants={fade} initial="hidden" animate="show" className="flex flex-col gap-20">

            {/* HERO */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Hello, I'm <span className="text-purple-400">Rajendra</span>
                </h1>

                <p className="text-gray-300 mb-6">
                  I build modern, fast and responsive web applications using MERN stack.
                </p>

                <button
                  onClick={() => setPage("projects")}
                  className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition hover:scale-105"
                >
                  View Projects
                </button>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
                <img
                  src={rajendra}
                  className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-500 shadow-lg"
                />
              </motion.div>
            </div>

            {/* ===== ABOUT ME (IMPROVED) ===== */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl mb-4 hover:text-[yellow]">About Me</h2>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base hover:text-[yellow] hover:scale-125 cursor-wait">
                I'm a Full Stack Developer focused on creating clean and interactive user interfaces.
                I enjoy working with React and building scalable backend systems using Node.js and MongoDB.
                I love turning ideas into real applications and continuously improving my skills in modern web development.
              </p>
            </div>

            {/* ===== SKILLS WITH TOOLTIP ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl text-center mb-8">Technologies</h2>

              <div className="overflow-hidden">
                <div className="flex gap-6 animate-scroll whitespace-nowrap">

                  {[
                    { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
                    { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
                    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
                    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
                    { icon: <FaReact />, name: "React", color: "text-cyan-300" },
                    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
                    { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
                    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
                    { icon: <SiMysql />, name: "MySQL", color: "text-blue-400" },
                    { icon: <FaGitAlt />, name: "Git", color: "text-orange-400" },

                    // duplicate loop
                    { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
                    { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
                    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
                    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
                    { icon: <FaReact />, name: "React", color: "text-cyan-300" },
                    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
                    { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
                    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
                    { icon: <SiMysql />, name: "MySQL", color: "text-blue-400" },
                    { icon: <FaGitAlt />, name: "Git", color: "text-orange-400" },

                  ].map((item, i) => (
                    <div key={i} className="relative group">

                      {/* ICON */}
                      <div
                        className={`text-4xl md:text-5xl p-6 rounded-xl 
                        bg-white/10 backdrop-blur-lg border border-white/20 
                        shadow-lg transition duration-300 
                        ${item.color} group-hover:scale-110`}
                      >
                        {item.icon}
                      </div>

                      {/* TOOLTIP */}
                      <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 
                        text-xs bg-black px-2 py-1 rounded opacity-0 
                        group-hover:opacity-100 transition">
                        {item.name}
                      </span>

                    </div>
                  ))}

                </div>
              </div>
            </div>

          </motion.div>
        )}

        {/* PROJECTS */}
        {/* PROJECTS */}
        {page === "projects" && (
          <motion.div variants={fade} initial="hidden" animate="show">
            <h2 className="text-2xl md:text-3xl mb-10 text-center">Projects</h2>

            <div className="grid md:grid-cols-3 gap-8">

              {/* ================= RAJMART ================= */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20 shadow-lg"
              >
                {/* IMAGE */}
                <div className="w-full h-52 overflow-hidden rounded-lg">
                  <img
                    src={rajmart}
                    alt="RajMart"
                    className="w-full h-[230px] object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="text-xl font-semibold mt-4 mb-2">RajMart</h3>

                {/* DESCRIPTION */}
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>
                    An online e-commerce application that allows users to browse and purchase products through a simple and efficient interface.
                  </li>
                  <li>
                    Implemented OTP-based login and JWT authentication for secure user access.
                  </li>
                  <li>
                    Integrated Razorpay for online payments and also supports Cash on Delivery.
                  </li>
                  <li>
                    After placing an order, users receive an email confirmation with a QR code to view order details.
                  </li>
                  <li>
                    Used Cloudinary for storing and managing product images in the cloud.
                  </li>
                </ul>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs hover:scale-110 transition duration-500">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINK */}
                <a
                  href="https://rajmart.vercel.app"
                  target="_blank"
                  className="block mt-4 text-purple-400 text-sm hover:underline"
                >
                  🔗 View Live Project
                </a>
              </motion.div>

              {/* ================= SPORTSKART ================= */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20 shadow-lg"
              >
                <div className="w-full h-52 overflow-hidden rounded-lg">
                  <img
                    src={sportkart}
                    alt="SportsKart"
                    className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="text-xl font-semibold mt-4 mb-2">SportsKart</h3>

                <ul className="text-gray-400 text-sm space-y-2">
                  <li>
                    An online sports equipment shopping application to browse and purchase various sports items.
                  </li>
                  <li>
                    Designed with a smooth and responsive UI for better user experience.
                  </li>
                  <li>
                    Includes advanced search and filtering features to quickly find products.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs hover:scale-110 transition duration-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* ================= CATERING ================= */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20 shadow-lg"
              >
                <div className="w-full h-52 overflow-hidden rounded-lg">
                  <img
                    src={cms}
                    alt="Catering System"
                    className="w-full h-[250px] object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="text-xl font-semibold mt-4 mb-2">Catering System</h3>

                <ul className="text-gray-400 text-sm space-y-2">
                  <li>
                    A user-friendly application developed using Java for seamless food ordering.
                  </li>
                  <li>
                    Allows customers to browse menus, place orders, and generate bills automatically.
                  </li>
                  <li>
                    Built as a JavaFX desktop application using Java, FXML, and CSS.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Java", "JavaFX", "FXML", "CSS"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs hover:scale-110 transition duration-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}

        {/* CONTACT */}
        {page === "contact" && (
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-center space-y-6"
          >
            <h2 className="text-2xl md:text-3xl mb-4">Contact</h2>

            <p className="text-gray-300">📧 rajendracharyarr@gmail.com</p>
            <p className="text-gray-300">📱 +91-9902184855</p>

            <div className="flex justify-center gap-4 flex-wrap mt-4">

              {/* GITHUB */}
              <a
                href="https://github.com/Rajendra1322"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
              >
                GitHub
              </a>

              {/* RESUME VIEW */}
              <button
                onClick={() => setPage("resume")}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition"
              >
                View Resume
              </button>

            </div>
          </motion.div>
        )}
        {/* ================= RESUME ================= */}
        {page === "resume" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            {/* BACK BUTTON */}
            <button
              onClick={() => setPage("home")}
              className="mb-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              ← Back to Home
            </button>

            {/* PDF VIEWER */}
            <div className="w-full h-[80vh] border border-white/20 rounded-xl overflow-hidden">
              <iframe
                src="/RajendraAcharya.pdf"
                title="Resume"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default App;