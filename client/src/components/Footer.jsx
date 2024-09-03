import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const triggerNavItem = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-yellow-400">
      <div
        data-aos="slide-right"
        className="text-center p-5 font-semibold text-xl sm:text-3xl"
      >
        Let's create something together
      </div>
      <div className="text-center pt-6">
        <Button />
      </div>

      <div className="flex flex-col sm:flex-row justify-around items-center sm:items-end p-6 sm:p-10">
        <div
          data-aos="fade-up"
          className="flex justify-center space-x-4 mb-6 sm:mb-0"
        >
          <a
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            title="Instagram"
            className="flex items-center justify-center bg-gray-950 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
            target="_blank"
          >
            <FaInstagram className="text-yellow-400" />
          </a>
          <a
            href="https://github.com/CodeWith"
            rel="noopener noreferrer"
            title="Github"
            className="flex items-center justify-center bg-gray-950 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
            target="_blank"
          >
            <FaGithub className="text-yellow-400" />
          </a>
          <a
            href="https://twitter.com"
            rel="noopener noreferrer"
            title="Twitter"
            className="flex items-center justify-center bg-gray-950 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
            target="_blank"
          >
            <FaTwitter className="text-yellow-400" />
          </a>
          <a
            href="https://facebook.com"
            rel="noopener noreferrer"
            title="Facebook"
            className="flex items-center justify-center bg-gray-950 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
            target="_blank"
          >
            <FaFacebook className="text-yellow-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajneesh847495"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex items-center justify-center bg-gray-950 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
            target="_blank"
          >
            <FaLinkedin className="text-yellow-400" />
          </a>
        </div>

        <div className="text-yellow-400 text-center mt-6 sm:mt-0">
          <p className="text-sm font-thin tracking-widest">
            &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
