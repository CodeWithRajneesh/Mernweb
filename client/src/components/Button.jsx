import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
    if (location.pathname === "/contact") {
      // Scroll to the section if already on the contact page
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the contact page, and then scroll to the section
      navigate("/contact", { state: { scrollTo: id } });
    }
  };

  return (
    <button
      data-aos="fade-up"
      type="button"
      onClick={() => handleClick("contact")}
      className="text-black bg-yellow-400 hover:bg-slate-300 hover:text-black border border-sky-700 font-medium rounded-full text-md sm:px-6 px-3 p-1 py-1 sm:py-2 text-center me-2 mb-2"
    >
      <div className="flex text-sm items-center gap-3 tracking-widest justify-center">
        Let's talk
        <svg
          className="h-5 w-5 text-black mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button;
