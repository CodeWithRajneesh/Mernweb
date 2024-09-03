import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full p-3 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <img
            className="h-11 w-11"
            src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png"
            alt="sitelogo"
          />
        </div>
        <div className="md:hidden">
          <button
            className="text-yellow-400 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-10 absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent text-center md:text-left mt-2 md:mt-0`}
        >
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) =>
                `block px-4 py-2 tracking-widest font-medium ${
                  isActive ? "text-slate-100" : "text-yellow-400"
                } after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) =>
                `block px-4 py-2 tracking-widest font-medium ${
                  isActive ? "text-slate-100" : "text-yellow-400"
                } after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) =>
                `block px-4 py-2 tracking-widest font-medium ${
                  isActive ? "text-slate-100" : "text-yellow-400"
                } after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100`
              }
            >
              Contact
            </NavLink>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <NavLink
                  to="/admin"
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    `block px-4 py-2 tracking-widest font-medium ${
                      isActive ? "text-slate-100" : "text-yellow-400"
                    } after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100`
                  }
                >
                  Admin
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    `block px-4 py-2 tracking-widest font-medium ${
                      isActive ? "text-slate-100" : "text-yellow-400"
                    } after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100`
                  }
                >
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/register"
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    `block px-4 py-2 tracking-widest font-medium ${
                      isActive ? "text-slate-100" : "text-yellow-400"
                    } after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100`
                  }
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    `block px-4 py-2 tracking-widest font-medium ${
                      isActive ? "text-slate-100" : "text-yellow-400"
                    } after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100`
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
