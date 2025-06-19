import teamworkImage from "../assets/hr_image.jpg"; // Transparent PNG
import { motion } from "framer-motion";
import Service from "../components/Service";
import Who_we from "../components/Who_we";
import WhyBest from "../components/WhyBest";
import FAQSection from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import "./home.css";

const Home = () => {
const scrollToNext = () => {
    const next = document.getElementById('service');
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="bg-[#fff7f0] overflow-hidden max-h-max ">
      {/* Hero Section */}
      
         <section className="relative flex flex-col justify-center items-center min-h-screen bg-white px-6 text-black overflow-hidden">
      {/* Falling stars container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="text-left w-full max-w-7xl z-10">
        {/* Headline */}
        <h1 className="text-[11vw] font-black leading-none">
          WE<br />
          MAKE IT<br />
          HAPPEN
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex justify-between items-center max-w-md">
          <button className="border border-black text-sm font-semibold px-4 py-2 hover:bg-black hover:text-white transition">
            Get in touch
          </button>
          <p
            onClick={scrollToNext}
            className="text-sm font-semibold cursor-pointer hover:underline"
          >
            SCROLL DOWN
          </p>
        </div>
      </div>
    </section>

      
      {/* Animated Service Section */}
      <motion.div
      id="service"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Service  />
      </motion.div>

      {/* Animated Who We Are Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Who_we />
        <WhyBest />
        <FAQSection/>
        <ContactForm/>
      </motion.div>
    </section>
  );
};

export default Home;
