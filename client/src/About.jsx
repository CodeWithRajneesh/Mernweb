import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAOS from "./customhook/CustomHook";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useAOS();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section
        id="about"
        className="relative bg-cover bg-center mt-10 bg-no-repeat h-[35rem] sm:h-96 lg:h-[32rem]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-tablet_23-2148430857.jpg?size=626&ext=jpg&ga=GA1.1.1795337513.1723110158&semt=ais_hybrid')",
        }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:py-24 lg:px-20">
          <div className="flex items-center justify-center w-full lg:w-[25rem] mb-6 lg:mb-0">
            <img
              src="https://mambaui.com/assets/svg/Business_SVG.svg"
              alt="Business"
              className="object-contain h-48 sm:h-64 lg:h-full"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 p-3 sm:p-5">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl lg:text-5xl text-yellow-400 font-bold"
            >
              React JS Full
              <span className="text-white">stack</span> Developer
            </h1>
            <p
              data-aos="fade-up"
              className="mt-4 mb-6 text-gray-300 text-base sm:text-lg"
            >
              React JS Developer at Railworld India Pvt Ltd, working on leading
              e-commerce websites, enhancing user engagement and increasing
              sales.
            </p>
            <Link
              data-aos="zoom-in"
              to="/service"
              className="px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold rounded bg-green-800 text-gray-200 hover:bg-gray-300 hover:text-black border border-gray-700"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-6 sm:py-12">
        <div className="container mx-auto flex flex-col lg:flex-row p-4 sm:p-6 lg:p-12">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h3 className="text-xl sm:text-2xl text-yellow-400 font-semibold mb-4">
              Frequently Asked Questions
            </h3>
            <p
              data-aos="fade-right"
              className="text-gray-400 text-sm sm:text-base"
            >
              Do you have any questions about my services? Check out my FAQ
              section for quick answers to common queries. If you can’t find
              what you’re looking for, feel free to contact me directly – I’m
              always happy to help.
            </p>
          </div>

          <div className="lg:w-1/2 mx-4">
            <div>
              <h3
                className="text-lg sm:text-xl font-semibold text-yellow-400 mb-4 cursor-pointer"
                onClick={() => toggleAccordion(0)}
              >
                1. What is your development process?
              </h3>
              {openIndex === 0 && (
                <p className="text-gray-400 text-sm sm:text-base">
                  My development process focuses on creating high-quality,
                  user-friendly websites and applications. It starts with an
                  in-depth consultation, followed by design and development.
                  Regular updates ensure we stay aligned.
                </p>
              )}
            </div>

            <div className="mt-4">
              <h3
                className="text-lg sm:text-xl font-semibold text-yellow-400 mb-4 cursor-pointer"
                onClick={() => toggleAccordion(1)}
              >
                2. What kind of support do you offer post-launch?
              </h3>
              {openIndex === 1 && (
                <p className="text-gray-400 text-sm sm:text-base">
                  I offer comprehensive support post-launch, including
                  maintenance, updates, and troubleshooting. Whether you need
                  small tweaks or major changes, I’m here to ensure you get the
                  most out of your website or application.
                </p>
              )}
            </div>

            <div className="mt-4">
              <h3
                className="text-lg sm:text-xl font-semibold text-yellow-400 mb-4 cursor-pointer"
                onClick={() => toggleAccordion(2)}
              >
                3. How do you ensure project timelines are met?
              </h3>
              {openIndex === 2 && (
                <p className="text-gray-400 text-sm sm:text-base">
                  I set realistic milestones and communicate regularly to ensure
                  timelines are met without sacrificing quality. Regular updates
                  help keep the project on track.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
