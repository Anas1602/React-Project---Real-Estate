import brandImage from "../assets/brand_img.png";

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-center text-gray-500 max-w-80 mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img className="w-full sm:w-1/2 max-w-lg" src={brandImage}></img>
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            neque, expedita doloribus id nulla magni tempore, nam odit qui culpa
            voluptas sunt? Nemo ab nisi, adipisci explicabo similique in dicta!
            Voluptate, fugit? Cumque aperiam iste soluta reiciendis nemo vel
            voluptas. Debitis voluptatem ex, aliquid itaque quidem nobis quas
            fuga ad?
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
