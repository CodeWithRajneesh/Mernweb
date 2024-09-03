import React, { useEffect, useState } from "react";
import useAOS from "./customhook/CustomHook";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["I'm a Mern Stack Developer"];
  useAOS();
  useEffect(() => {
    let timer;
    if (index < phrases.length) {
      const currentPhrase = phrases[index];
      const length = currentPhrase.length;

      timer = setInterval(() => {
        setText((prev) => {
          if (prev.length < length) {
            return prev + currentPhrase[prev.length];
          } else {
            clearInterval(timer);
            setTimeout(() => {
              setText("");
              setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }, 1000);
            return prev;
          }
        });
      }, 100);
    }

    return () => clearInterval(timer);
  }, [index, text]);

  return (
    <section
      className="relative bg-cover sm:mt-16 mt-10 bg-center bg-no-repeat w-full h-[30rem] sm:h-screen"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2023/05/18/23/22/hacker-8003400_1280.jpg')",
      }}
    >
      <div
        id="home"
        className="flex flex-col sm:flex-row items-center  h-full px-4 sm:px-8 md:px-16  sm:text-left"
      >
        <div className="mb-8 sm:mb-32 mt-36 sm:mr-60">
          <span className="text-yellow-400 font-bold text-3xl sm:text-5xl">
            Rajneesh Kumar
          </span>
          <h1 className="text-white font-bold text-xl mt-5 sm:text-2xl whitespace-nowrap overflow-hidden">
            <span className="typewriter-text text-sm">{text}</span>
            <span className="caret blink">|</span>
          </h1>
          <div
            data-aos="fade-up"
            className="flex flex-col mt-16 items-center space-y-4 sm:items-start sm:space-y-0 sm:mt-16"
          >
            <span className="bg-gradient-to-r  from-yellow-400 via-green-400 to-white bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-4xl">
              Secure Access
            </span>
            <span className="bg-gradient-to-r  from-white via-white to-purple-600 bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-4xl">
              for
              <span className="bg-gradient-to-r pl-3  from-red-500 via-yellow-400 to-red-600 bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-4xl">
                everyone
              </span>
            </span>
            <span className="bg-gradient-to-r from-white via-white to-purple-600 bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-4xl">
              But not
              <span className="bg-gradient-to-r pl-3 from-red-500 via-yellow-400 to-red-600 bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-4xl">
                just anyone
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
