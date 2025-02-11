import Navbar from "./Navbar";
import headerImage from "../assets/header_img.png";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${headerImage})` }}
      id="Header">
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore Homes That Fit Your Dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a className="border border-white px-8 py-3 rounded" href="#Projects">
            Projects
          </a>
          <a
            className="bg-blue-500 px-8 py-3 rounded cursor-pointer hover:bg-blue-600"
            href="#Contact">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
