import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-[#e4f3f1] py-20 px-4">
      <div className="max-w-5xl mx-auto relative">
        {/* Main Card */}
        <div className="bg-white shadow-lg border relative z-10 flex flex-col md:flex-row p-10 rounded-md border-gray-200 mb-3.5" style={{ boxShadow: '10px 10px 0 #facc15' }}>
          {/* Left Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <button className="bg-orange-400 text-white text-sm px-4 py-1 rounded-full mb-4">
              Get Estimate
            </button>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
              Let's talk with<br />
              experience creative agency!
            </h2>
            <p className="text-gray-500 text-sm">
              Compellingly reinvent bricks-and-clicks imperatives through covalent initiatives.
            </p>
          </div>

          {/* Right Section */}
          <form className="md:w-1/2 space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold shadow-md"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Optional Decorations */}
        <div className="absolute bottom-0 left-0 transform translate-y-1/2">
          {/* You can add an SVG or emoji here to mimic the left-bottom leaf/icon */}
          <span className="text-purple-300 text-4xl">🍃</span>
        </div>
        <div className="absolute top-0 right-0 transform -translate-y-1/2 -rotate-12">
          {/* You can add a squiggly line SVG or custom icon here */}
          <span className="text-gray-400 text-4xl">➰</span>
          
        </div>
      </div>
    </div>
  );
}
