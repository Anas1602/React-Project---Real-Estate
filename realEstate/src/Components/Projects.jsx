import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets.js";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4); // lg screens: 4 slides
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3); // md screens: 3 slides
      } else {
        setSlidesToShow(1); // mobile: 1 slide
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = projectsData.length - slidesToShow;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = projectsData.length - slidesToShow;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const slideWidth = 100 / slidesToShow;

  return (
    <div
      id="Projects"
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevSlide}
          className="p-3 bg-gray-300 rounded mr-2 hover:bg-gray-400 transition-colors"
          aria-label="Previous Project">
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-gray-300 rounded mr-2 hover:bg-gray-400 transition-colors"
          aria-label="Next Project">
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`,
          }}>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 pb-20" // Added pb-20 for card overflow
              style={{ width: `${slideWidth}%` }}>
              <div className="relative">
                {" "}
                {/* Removed overflow hidden */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute left-0 right-0 -bottom-12 flex justify-center">
                  {" "}
                  {/* Changed to -bottom-12 */}
                  <div className="bg-white w-11/12 px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      {project.price} <span className="mx-2">|</span>{" "}
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
