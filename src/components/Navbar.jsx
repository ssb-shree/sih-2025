"use client";
import { useState } from "react";
import { FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Framer motion variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.05 } }),
  };

  const mobileLinks = ["Home", "Generate", "About", "Contact"];

  return (
    <div className="navbar bg-base-100 shadow-md px-4 border-b relative">
      {/* Left Section */}
      <div className="flex-1">
        <a className="flex items-center text-xl font-bold gap-2">
          <FaCalendarAlt className="text-primary text-2xl" />
          TimetableGen
        </a>
      </div>
    </div>
  );
}
