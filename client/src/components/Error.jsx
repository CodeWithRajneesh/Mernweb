import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="grid h-screen place-content-center bg-black px-4">
        <div className="text-center">
          <h1 className="bg-gradient-to-r w-full  from-lime-600 via-blue-500 to-amber-400 bg-clip-text text-3xl text-transparent sm:text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-red-700 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-lg text-red-100">We can't find that page.</p>

          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0,0); // Scroll to top on button click
            }}
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;


