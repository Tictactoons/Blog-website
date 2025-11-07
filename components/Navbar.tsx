"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Menu, X } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

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

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav
      className="w-full bg-white shadow-md sticky top-0 z-50
     bg-white/10 dark:bg-[#090D1F] backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-5  sm:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl tracking-tighter font-bold text-gray-900 dark:text-white"
        >
          isaiah.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex text-xs items-center gap-6 font-semibold">
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

         
          <Link
            href="/write"
            className="hover:text-[#6941C6] dark:text-white dark:hover:text-blue-400 transition-colors"
          >
            Write
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


           {/* Dynamic Login / Logout */}
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-[#ddd8e8] text-white dark:hover:text-[#090D1F] 
              transition-colors px-3 text-xs py-2 rounded-xl dark:hover:bg-[#a8b3dd] bg-[#090D1F] font-semibold
               dark:bg-white dark:text-[#090D1F] hover:bg-[#090D1F]/90"
            >
              Sign out
            </button>
          ) : (
            <Link
              href="/login"
              className="hover:text-[#ddd8e8] text-white dark:hover:text-[#090D1F] 
              transition-colors px-3 text-xs py-2 rounded-xl dark:hover:bg-[#a8b3dd] bg-[#090D1F] font-semibold
               dark:bg-white dark:text-[#090D1F] hover:bg-[#090D1F]/90"
            >
              Login
            </Link>
          )}

        </div>

        {/* Mobile menu button */}
        {isOpen ? (
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

          <Link
            href="/dashboard"
            className="hover:text-[#6941C6] dark:text-white dark:hover:text-blue-400 transition-colors"
          >
            Dash
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

          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-[#ddd8e8] text-white dark:hover:text-[#090D1F] 
              transition-colors px-3 text-xs py-2 rounded-xl dark:hover:bg-[#a8b3dd] bg-[#090D1F] font-semibold
               dark:bg-white dark:text-[#090D1F] hover:bg-[#090D1F]/90"
            >
              Sign out
            </button>
          ) : (
            <Link
              href="/login"
              className="hover:text-[#ddd8e8] text-white dark:hover:text-[#090D1F] 
              transition-colors px-3 text-xs py-2 rounded-xl dark:hover:bg-[#a8b3dd] bg-[#090D1F] font-semibold
               dark:bg-white dark:text-[#090D1F] hover:bg-[#090D1F]/90"
            >
              Login
            </Link>
          )}

          <div className="pt-8">
            {isOpen ? (
              <IoMdClose
                className="text-[30px] dark:text-white cursor-pointer hover:transition-all duration-300 hover:scale-125"
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
