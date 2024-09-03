import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { user, url } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);
  if (userData && user) {
    setForm({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await axios.post(`${url}/api/form/contact`, form, {
        header: {
          "Content-Type": "application/json",
        },
      });
      console.log("Message sent successfully", response.data);
      toast.success("Message sent successfully");
      navigate("/");
    } catch (error) {
      console.log("Message sending error", error);
      toast.error("Message sending error");
    }
  };

  return (
    <section className="bg-black">
      <div className="grid grid-cols-1  gap-8 px-4 py-4 mx-auto border border-gray-900 md:grid-cols-2  dark:text-gray-800">
        <div
          data-aos="zoom-in-up"
          className="flex flex-col bg-gray-900 gap-4 p-8 shadow-2xl "
        >
          <strong className="text-3xl text-yellow-400">
            Get in touch with me
          </strong>

          <div className="flex p-3">
            <Link
              to="/"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full sm:w-10 sm:h-10 hover:bg-blue-400 group"
            >
              <svg
                className="h-6 w-6 text-blue-400 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>

            <div className="mx-5">
              <h2
                data-aos="zoom-up"
                className="text-xl text-yellow-400 my-1 font-bold"
              >
                Address
              </h2>
              <p data-aos="slide-right" className="text-gray-400">
                Vill-Karaura, Teh-Meerganj, Dist-Bareilly, Pincode-243504
              </p>
            </div>
          </div>

          <div className="flex p-3">
            <Link
              to="https://www.linkedin.com/in/rajneesh847495"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full sm:w-10 sm:h-10 hover:bg-blue-400 group"
            >
              <svg
                className="h-6 w-6 group-hover:text-white text-blue-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </Link>
            <div className="mx-5">
              <h2
                data-aos="fade-up"
                className="text-xl my-1 text-yellow-400 font-bold"
              >
                Call Us
              </h2>
              <p data-aos="slide-right" className="text-gray-400">
                +91 7248362369
              </p>
            </div>
          </div>

          <div className="flex p-3">
            <Link
              to="https://www.linkedin.com/in/rajneesh847495"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full sm:w-10 sm:h-10 hover:bg-blue-400 group"
            >
              <svg
                className="h-6 w-6 group-hover:text-white text-sky-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                <line x1="8" y1="9" x2="16" y2="9" />
                <line x1="8" y1="13" x2="14" y2="13" />
              </svg>
            </Link>
            <div className="mx-5">
              <h2
                data-aos="fade-up"
                className="text-xl my-1 text-yellow-400  font-bold"
              >
                Email Us
              </h2>
              <p data-aos="slide-right" className="text-gray-400">
                rajneesh847495@gmail.com
              </p>
            </div>
          </div>
        </div>

        <form
          data-aos="fade-up"
          onSubmit={handleSubmit}
          className="p-8 space-y-6 shadow-2xl bg-gray-900"
        >
          <div>
            <label htmlFor="username" className=" text-yellow-400 text-xl">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="w-full p-2 my-3  placeholder-slate-200 text-white bg-gray-800"
              placeholder="Enter username"
              required
              autoComplete="off"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className=" text-yellow-400 text-xl">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="w-full p-2 my-3 bg-gray-800  placeholder-slate-200 text-white  "
              placeholder="Enter email"
              required
              autoComplete="off"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className=" text-yellow-400 text-xl">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Type message here"
              className="w-full p-2 my-3  placeholder-slate-200 text-white bg-gray-800 "
              required
              autoComplete="off"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 p-2 text-sm font-bold tracking-wide uppercase rounded border border-gray-900 hover:bg-yellow-400 text-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
