import { motion } from "framer-motion";
import image from "../assets/about1.jpg";
import image1 from "../assets/about2.jpg";
import WhyChooseUs from "../components/Why_us";
import TeamSection from "../components/Teams";

const About = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 mb-5">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Left image with card */}
        <div className="relative w-fit md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Team Meeting"
            className="w-full max-w-[28rem] h-[34rem] rounded-lg shadow-md object-cover"
          />

          <div className="absolute -bottom-10 left-6 bg-white shadow-xl rounded-md p-4 flex gap-4 items-start w-[300px]">
            <img
              src={image1}
              alt="Forman"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="text-gray-600">
                "Grass face saw beginning meat fod creeping even dominion intercom
                created behold."
              </p>
              <p className="mt-2 font-semibold text-gray-800">
                Forman Cobid, <span className="text-blue-600">Founder</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right text content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm text-red-500 font-medium mb-7">About Company</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-7 leading-tight">
            We Are Business Consulting & Credit Repair Experts
          </h2>
          <p className="text-gray-600 mb-7">
            Grass our abundantly given make in may thema our you abundantly. Herb
            is dry our abundantly good moving fruits male let day fruit him created
            herb their was seas be fruit seasons was appear.
          </p>
          <p className="text-gray-600 mb-7">
            Dramatically whiteboard sustainable growth strategies vis-a-vis
            future-proof e-business. Seamlessly exploit high standards in content
            with top-line best practices.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Learn More →
            </a>
            <button className="flex items-center gap-2 text-gray-800 font-medium hover:text-black">
              <span className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-lg">
                ▶
              </span>
              Intro Video
            </button>
          </div>
        </div>
      </div>
      <WhyChooseUs/>
      <TeamSection/>
    </section>
  );
};

export default About;
