import React from "react";
import leftImage from "../assets/team1.jpg"; // Replace with your image
import rightImage from "../assets/team.jpg"; // Replace with your image

const WhyBest = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
            Why We Are Best
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            We can show <br /> you a better way...
          </h2>
          <p className="text-gray-600">
            Compellingly reinvent bricks-and-clicks imperatives through covalent initiatives. Interactively communicate standardized initiatives via diverse sources.
          </p>
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded shadow-md transition duration-300">
            Get Started Now
          </button>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4 items-stretch">
  {/* Left Image (match right total height) */}
  <div className="h-full">
    <img
      src={leftImage}
      alt="Working"
      className="rounded-lg shadow-md w-full h-full object-cover"
    />
  </div>

  {/* Right Column */}
  <div className="flex flex-col justify-between h-full">
    <img
      src={rightImage}
      alt="Team"
      className="rounded-lg shadow-md w-full object-cover h-[calc(100%-56px)]"
    />
    <div className="mt-3 p-2 bg-yellow-100  font-semibold text-2xl text-gray-800 rounded w-full text-center shadow">
      10M+ <br />
      <span className="font-normal text-xs text-gray-600">Customer trust us</span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default WhyBest;
