import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/Auth";
import { toast } from "react-toastify";
import "./components/ToastStyles.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res_data = response.data;
      console.log("Response:", res_data);
      storeTokenInLS(res_data.token);

      toast.success("Login successfully");
      navigate("/");

      setForm({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Form error", error);
      toast.error("An error occurred during login");
    }
  };

  return (
    <section className="bg-black pt-20 lg:h-full sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-12">
        <div className="mx-auto w-full text-center sm:text-left">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold
            text-transparent tracking-wider sm:text-4xl"
          >
            Login Your Account Here!
          </h1>
          <div className="mt-16 w-fit mx-auto md:mt-10">
            <img
              alt="Login Illustration"
              src="https://cdn.pixabay.com/photo/2021/06/06/06/24/lock-6314371_1280.png"
              className="sm:w-[19rem] sm:h-[16rem] h-[13rem] w-[15rem] p-5 object-center object-cover"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="w-full px-4 pb-5 sm:px-6 sm:py-16 lg:w-full lg:px-8 lg:py-10"
      >
        <form
          onSubmit={handleSubmit}
          className="mx-auto  mt-8 bg-gray-950 max-w-md space-y-4 shadow-2xl p-9 hover:shadow-pink-500"
        >
          <div>
            <label
              htmlFor="email"
              className="text-yellow-400 font-serif text-xl font-bold"
            >
              Email
            </label>
            <div className="py-2">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full text-white bg-gray-900 placeholder:text-slate-200 p-2 pe-12 text-sm shadow-sm"
                placeholder="Enter your email"
                required
                autoComplete="off"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-yellow-400 font-serif text-xl font-bold"
            >
              Password
            </label>
            <div className="py-2">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full text-white bg-gray-900 placeholder:text-slate-200 p-2 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                required
                autoComplete="off"
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
