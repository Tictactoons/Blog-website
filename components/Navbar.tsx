"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav
      className="w-full bg-white shadow-md sticky top-0 z-50
     bg-white/10 dark:bg-[#090D1F] backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl tracking-tighter font-bold text-gray-900 dark:text-white"
        >
          isaiah.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/blog"
            className="hover:text-[#6941C6] dark:text-white dark:hover:text-blue-400 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#6941C6] dark:text-white dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:text-[#6941C6] dark:text-white dark:hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/newsletter"
            className="hover:text-[#6941C6] dark:text-white dark:hover:text-blue-400 transition-colors"
          >
            Newsletter
          </Link>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          >
            {/* Toggle circle */}
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-0"
              } flex items-center justify-center`}
            >
              {/* Emoji inside circle */}
              {darkMode ? "🌞" : "🌚"}
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        {isOpen? (
          <X
            size={24}
            onClick={() => setIsOpen(false)}
            className="text-[#090D1F] dark:text-white cursor-pointer transition-transform duration-200 hover:scale-110 md:hidden"
          />
        ) : (
          <Menu
            size={24}
            onClick={() => setIsOpen(true)}
            className=" text-[#090D1F] dark:text-white cursor-pointer transition-transform duration-200 hover:scale-110 md:hidden" 
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 h-screen bg-white dark:bg-gray-900 px-5 pb-4 space-y-6 flex flex-col items-center justify-center">

            <Link
          href="/"
          className="text-xl tracking-[-0.05em] font-bold text-gray-900 dark:text-white"
        >
          isaiah.dev
        </Link>

          <Link
            href="/blog"
            className="block hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="block hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="block hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            About
          </Link>
          <Link
            href="/newsletter"
            className="block hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            Newsletter
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          >
            {/* Toggle circle */}
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-0"
              } flex items-center justify-center`}
            >
              {/* Emoji inside circle */}
              {darkMode ? "🌞" : "🌚"}
            </span>
          </button>

          <div className="pt-8">
            {isOpen ? (
              <IoMdClose
                className="text-[30px] dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
