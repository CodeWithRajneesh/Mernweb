import React from "react";
import { useAuth } from "./store/Auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <>
      <section id="service" className="p-4 mt-16 bg-black">
        <h1 className="text-center mt-5 mb-8 text-2xl   sm:text-4xl text-yellow-400">
          services
        </h1>
        <div className="flex gap-8 justify-center flex-wrap">
          {services.map((curEl, index) => {
            const { service, description, price, provider } = curEl;
            return (
              <div
                data-aos="fade-up"
                key={index}
                className="h-84 p-3 bg-gray-950 rounded-lg  w-60   flex flex-col  "
              >
                <img
                  src="https://mambaui.com/assets/svg/Business_SVG.svg"
                  alt=" service image"
                  className="h-[8rem] mx-auto p-1 w-[8rem]"
                />
                <div className="flex pt-2  items-center w-full justify-around ">
                  <span className="text-sm   text-yellow-400">{provider} </span>
                  <span className="text-sm text-blue-700">{price} </span>
                </div>
                <h1 className="text-lg pt-1 text-yellow-400">{service} </h1>
                <p className="pt-2 text-sm text-start text-gray-400 w-full">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Service;
