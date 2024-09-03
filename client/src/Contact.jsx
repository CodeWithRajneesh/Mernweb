import ContactForm from "./components/ContactForm";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAOS from "./customhook/CustomHook";

const Contact = () => {
  const location = useLocation();
  useAOS();

  useEffect(() => {
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <>
      <section
        
        id="contact"
        className="relative bg-cover bg-center bg-no-repeat h-72 md:h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-tablet_23-2148430857.jpg?size=626&ext=jpg&ga=GA1.1.1795337513.1723110158&semt=ais_hybrid')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center text-white">
          <h2 
          data-aos="zoom-up"
          className="text-3xl md:text-5xl text-yellow-400 font-bold">
            Contact Me
          </h2>
        </div>
      </section>
      <ContactForm />
      <div className="flex justify-center w-full bg-black p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112279.19917441858!2d79.26611397440186!3d28.427554433196672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723144624779!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full  h-400"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
