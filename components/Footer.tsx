
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 dark:text-white dark:bg-[#090D1F]  py-8 w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        
        {/* Left: Year and copyright */}
        <p className="text-sm">
          &copy; {currentYear} Isaiah&apos;s Blog. All rights reserved.
        </p>

        {/* Center: Email */}
        <a
          href="mailto:contact@yourblog.com"
          className="text-sm hover:text-blue-600 transition-colors"
        >
          contact@isaiah.dev.com
        </a>

        {/* Right: Social links */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
