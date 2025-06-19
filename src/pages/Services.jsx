import { motion } from "framer-motion";

 const Services = ()=>{
    return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-white flex flex-col items-center justify-center px-4 text-center">
      {/* Wrench animation */}
      <motion.div
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="text-6xl mb-6"
      >
        🔧
      </motion.div>

      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800"
      >
        This Page is Under Development
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-gray-600 text-sm md:text-base max-w-md"
      >
        We're working hard to bring you something awesome. Please check back soon or contact our support if needed.
      </motion.p>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow transition"
      >
        <a href="/">Go Back Home</a>
      </motion.div>
    </div>
  );
}
export default Services;