import img1 from "../assets/about3.jpg";
import img2 from "../assets/about5.jpg";
import img3 from "../assets/about4.jpg";
import { FaCogs, FaChartLine, FaDraftingCompass, FaBrain } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20 mt-24 border-t-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-red-500 font-semibold mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
            Reasons Why We are Best Business Consulting Agency
          </h2>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <FaCogs className="text-xl mt-1 text-black" />
              <div>
                <h4 className="font-semibold text-lg">Process Excellence</h4>
                <p className="text-gray-600 text-sm">Dominion fowl in there light she does lights.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <FaChartLine className="text-xl mt-1 text-black" />
              <div>
                <h4 className="font-semibold text-lg">Strategic Planning</h4>
                <p className="text-gray-600 text-sm">Dominion fowl in there light she does lights.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <FaDraftingCompass className="text-xl mt-1 text-black" />
              <div>
                <h4 className="font-semibold text-lg">Experience Design</h4>
                <p className="text-gray-600 text-sm">Dominion fowl in there light she does lights.</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <FaBrain className="text-xl mt-1 text-black" />
              <div>
                <h4 className="font-semibold text-lg">Artificial Intelligence</h4>
                <p className="text-gray-600 text-sm">Dominion fowl in there light she does lights.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <img src={img1} alt="Team" className="w-full rounded-lg object-cover h-48" />
          <img src={img2} alt="Laptop" className="w-full rounded-lg object-cover h-48" />
          <img src={img3} alt="Desk" className="w-full col-span-2 rounded-lg object-cover h-40" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 border-t pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
        <div>
          <h3 className="text-3xl font-bold">5310</h3>
          <p className="text-gray-600">Happy Client</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">5310</h3>
          <p className="text-gray-600">Complete Project</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">5310</h3>
          <p className="text-gray-600">Running Work</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">5310</h3>
          <p className="text-gray-600">Winning Award</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
