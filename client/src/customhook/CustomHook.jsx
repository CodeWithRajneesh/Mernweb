import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Easing
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
};

export default useAOS;
