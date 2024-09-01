import React from "react";
import { useAuth } from "./store/Auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <>
      <section className="p-4 bg-black">
        <div className="flex gap-8 justify-center flex-wrap">
          {services.map((curEl, index) => {
            const {service,description, price, provider  } = curEl;
            return (
              <div
                key={index}
                className="h-84 p-3  rounded-xl  w-60  border border-white flex flex-col  "
              >
                <img
                  src="https://mambaui.com/assets/svg/Business_SVG.svg"
                  alt=" service image"
                  className="h-[8rem] mx-auto p-1 w-[8rem]"
                />
                <div className="flex pt-2  items-center w-full justify-around ">
                  <span className="text-md   text-orange-500">
                    {provider}
                  </span>
                  <span className="text-sm text-blue-700">{price}</span>
                </div>
                <h1 className="text-sm pt-1 text-white">{service}</h1>
                <p className="pt-2 text-sm text-start text-white w-full">
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Service;
