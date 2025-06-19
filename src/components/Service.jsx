import React from 'react';
import { FiPenTool, FiCode, FiTrendingUp } from 'react-icons/fi';
import { BsLightbulb } from 'react-icons/bs';
// CSS for animation

const services = [
  {
    title: 'UI/UX Design',
    description: 'We craft beautiful and functional user interfaces tailored for your users.',
    points: ['User Research', 'Wireframing & Prototyping', 'UI Guidelines'],
    icon: <FiPenTool size={32} className="text-yellow-500" />,
  },
  {
    title: 'Development',
    description: 'From websites to full-stack applications, we build scalable solutions.',
    points: ['Frontend & Backend', 'API Integrations', 'Performance Optimized'],
    icon: <FiCode size={32} className="text-blue-500" />,
  },
  {
    title: 'Brand Design',
    description: 'Helping brands find their visual identity and voice.',
    points: ['Logo & Visuals', 'Color Schemes', 'Style Guides'],
    icon: <BsLightbulb size={32} className="text-yellow-400" />,
  },
  {
    title: 'Marketing',
    description: 'Data-driven strategies to increase your reach and ROI.',
    points: ['Social Media Ads', 'SEO Optimization', 'Campaign Analytics'],
    icon: <FiTrendingUp size={32} className="text-pink-500" />,
  },
];

const Services = () => {
  const duplicated = [...services, ...services]; // Duplicate for infinite loop

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Providing best service</h2>
            <p className="text-gray-500 mt-1">The awesome people who make this all possible</p>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded shadow">
            View All Services
          </button>
        </div>

        {/* Infinite Scroll Slider with pause on hover */}
        <div className="relative overflow-hidden group">
          <div className="flex w-max gap-8 animate-scroll group-hover:paused">
            {duplicated.map((service, index) => (
              <div
                key={index}
                className="w-[350px] h-[320px] flex-shrink-0 bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:z-10"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside mb-4">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <button className="text-yellow-600 hover:underline font-medium text-sm">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
