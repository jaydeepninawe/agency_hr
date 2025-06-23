import React from 'react';
import { FaCogs, FaBullseye, FaPencilRuler, FaRobot } from 'react-icons/fa';
import service1 from "../assets/service1.jpg"

const features = [
  {
    icon: <FaCogs className="text-xl text-black" />,
    title: 'Process Excellence',
    desc: 'Dominion fowl in there light she does lights.',
  },
  {
    icon: <FaBullseye className="text-xl text-black" />,
    title: 'Strategic Planning',
    desc: 'Dominion fowl in there light she does lights.',
  },
  {
    icon: <FaPencilRuler className="text-xl text-black" />,
    title: 'Experience Design',
    desc: 'Dominion fowl in there light she does lights.',
  },
  {
    icon: <FaRobot className="text-xl text-black" />,
    title: 'Artificial Intelligence',
    desc: 'Dominion fowl in there light she does lights.',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6">
        <p className="text-red-500 font-semibold">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Reasons Why We <br />
          are Best Business <br />
          Consulting Agency
        </h2>

        <div className="space-y-6 pt-6">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <div className="bg-gray-100 p-2">
          <img
            src={service1} // Replace with actual image path
            alt="Team"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
