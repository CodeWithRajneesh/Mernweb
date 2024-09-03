import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/Auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS, url } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/auth/register`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = response.data;

      if (response.status === 201) {
        storeTokenInLS(res.token);
        toast.success("User registered successfully");
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const res = error.response.data;
        toast.error(res.extraDetails ? res.extraDetails : res.message);
      } else {
        toast.error(`An error occurred: ${error.message}`);
      }
    }
  };

  return (
    <section className="bg-black pt-20 relative">
      <div className="flex flex-wrap justify-center lg:justify-start p-5 lg:h-full lg:items-center">
        <div className="flex flex-col justify-center sm:flex items-center lg:flex-row lg:items-start lg:w-full">
          <div className="lg:w-1/3">
            <h1
              data-aos="slide-right"
              className="bg-gradient-to-r text-center lg:text-left from-yellow-400 via-blue-500 to-purple-600 bg-clip-text text-3xl text-transparent tracking-wider sm:text-4xl"
            >
              Register Here!
            </h1>
            <img
              alt="3D Illustration"
              src="https://cdn.pixabay.com/photo/2017/07/12/06/30/3d-2496031_960_720.png"
              className="mt-8 w-[17rem] h-[19rem] object-cover lg:w-[18rem] lg:h-[20rem]"
            />
          </div>
          <div className="w-full lg:w-[35%] bg-gray-950 hover:shadow-2xl hover:shadow-cyan-400 p-2 mt-1 rounded-md0 lg:mt-0 ">
            <form
              data-aos="fade-up"
              onSubmit={handleSubmit}
              className="mx-auto w-[90%] p-2"
            >
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-yellow-500 font-serif text-lg tracking-wider font-bold"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full bg-gray-900 placeholder:text-slate-400 p-2 mt-1 rounded-md text-white text-sm "
                  placeholder="Enter username"
                  autoComplete="off"
                  required
                  value={user.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-yellow-500 font-serif text-lg tracking-wider font-bold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-gray-900 placeholder:text-slate-400 p-2 mt-1 rounded-md text-white text-sm "
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="text-yellow-500 font-serif text-lg tracking-wider font-bold"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full bg-gray-900 placeholder:text-slate-400 p-2 mt-1 rounded-md text-white text-sm "
                  placeholder="Enter phone number"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="text-yellow-500 font-serif text-lg tracking-wider font-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-gray-900 placeholder:text-slate-400 p-2 mt-1 rounded-md text-white text-sm "
                  placeholder="Enter password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full text-black font-medium bg-yellow-400 text-sm px-5 py-2.5 text-center "
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
