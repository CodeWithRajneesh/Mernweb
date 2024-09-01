import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  const triggerNavItem = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-yellow-400" data-aos="fade-up">
      <div className="text-center p-5 font-semibold text-xl sm:text-4xl">
        Let's create something together
      </div>
      <div className="text-center pt-6">
        <Button />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end p-6 sm:p-10">
        <ul className="flex flex-col sm:flex-row justify-center gap-4 mb-6 sm:mb-0">
          {["Rajneesh Kumar", "About", "Careers", "Projects"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  onClick={() => triggerNavItem(item.toLowerCase())}
                  className="text-yellow-500 font-semibold transition hover:text-yellow-400"
                  to={`/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="flex justify-center space-x-4 mb-6 sm:mb-0">
          <Link
            to="https://www.instagram.com"
            rel="noopener noreferrer"
            title="Instagram"
            className="flex items-center justify-center bg-gray-800 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-yellow-400" />
          </Link>
          <Link
            to="https://github.com/CodeWith"
            rel="noopener noreferrer"
            title="Github"
            className="flex items-center justify-center bg-gray-800 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
          >
            <FaGithub className="text-yellow-400" />
          </Link>
          <Link
            to="https://twitter.com"
            rel="noopener noreferrer"
            title="Twitter"
            className="flex items-center justify-center bg-gray-800 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
          >
            <FaTwitter className="text-yellow-400" />
          </Link>
          <Link
            to="https://facebook.com"
            rel="noopener noreferrer"
            title="Facebook"
            className="flex items-center justify-center bg-gray-800 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
          >
            <FaFacebook className="text-yellow-400" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/rajneesh847495"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex items-center justify-center bg-gray-800 w-8 h-8 rounded-full sm:w-10 sm:h-10 transform hover:scale-110 transition-transform"
          >
            <FaLinkedin className="text-yellow-400" />
          </Link>
        </div>

        <div className="text-yellow-500 text-center mt-6 sm:mt-0">
          <p className="text-sm font-thin tracking-widest">
            &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
