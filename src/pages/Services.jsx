import { HiArrowRight } from "react-icons/hi";
import WhyChooseUs from "../components/AboutWho";

const services = [
  {
    title: "Business Advice",
    desc: "Deliver faster, more personalized support with shared screens and a Support Bot. Our expert consultants help you optimize strategy and drive business growth across all sectors."
  },
  {
    title: "Startup Business",
    desc: "Empowering startups with innovative tools, mentorship, and strategic plans. From idea validation to scaling up operations, we've got your back with proven frameworks."
  },
  {
    title: "Financial Advice",
    desc: "Receive detailed financial planning, investment guidance, and wealth management tailored to your unique needs. We bring clarity to your finances."
  },
  {
    title: "Risk Management",
    desc: "Minimize threats and maximize resilience. Our services include risk assessment, mitigation planning, and compliance monitoring to keep your business secure."
  },
  {
    title: "Business Advice",
    desc: "Improve operational efficiency and unlock your company's full potential with personalized business analysis and hands-on guidance from our seasoned experts."
  },
  {
    title: "Financial Advice",
    desc: "Our financial advisors are dedicated to helping you achieve your short-term goals and long-term success through comprehensive planning and support."
  },
  {
    title: "Financial Advice",
    desc: "We help small and large businesses navigate financial decisions, reduce debt, and ensure profitability in competitive environments."
  },
  {
    title: "Risk Management",
    desc: "Stay prepared for market volatility and internal challenges. We help companies build sustainable models through proactive risk strategies."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
          <div>
            <p className="text-sm text-red-500 font-medium mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              We Provide The Best <br />
              Service For Consulting
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative border rounded-lg p-8 shadow-md transition duration-300 cursor-pointer bg-white hover:bg-yellow-100 min-h-[350px]"
            >
              <span className="block h-[2px] w-8 bg-gray-800 mb-4"></span>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-12">{service.desc}</p>
              <button
                className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition"
              >
                <HiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t-2 border-gray-100"></div>

      {/* Additional Section */}
      <WhyChooseUs />
    </section>
  );
};

export default Services;
