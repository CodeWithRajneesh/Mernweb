import React, { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["I'm a Mern Stack Developer"];

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
      className="relative bg-cover bg-center bg-no-repeat w-full h-[40rem] sm:h-screen"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9980.jpg?ga=GA1.1.1795337513.1723110158&semt=ais_hybrid')",
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center h-full px-4 sm:px-8 md:px-16 text-center sm:text-left">
        <div className="mb-8 sm:mb-0 sm:mr-16">
          <span className="text-yellow-400 font-bold text-3xl sm:text-5xl">
            Rajneesh Kumar
          </span>
          <h1 className="text-white font-bold text-xl mt-5 sm:text-2xl whitespace-nowrap overflow-hidden">
            <span className="typewriter-text">{text}</span>
            <span className="caret blink">|</span>
          </h1>
          <button
            type="button"
            onClick={() => handleClick("contact")}
            className="text-black bg-yellow-400 mt-12 sm:mt-32 hover:text-black border border-sky-700 font-medium rounded-full text-md px-6 py-2 text-center"
          >
            <div className="flex items-center gap-3 tracking-wider justify-center">
              Let's start
            </div>
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4 sm:items-start sm:space-y-0 sm:mt-32">
          <span className="bg-white bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-3xl">
            Secure Access
          </span>
          <span className="bg-gradient-to-r from-white via-white to-purple-600 bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-3xl">
            for
            <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-3xl">
              everyone
            </span>
          </span>
          <span className="bg-gradient-to-r from-white via-white to-purple-600 bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-3xl">
            But not
            <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-bold text-transparent tracking-wider sm:text-3xl">
              just anyone
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
