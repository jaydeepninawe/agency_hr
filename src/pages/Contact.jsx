import { HiArrowRight } from "react-icons/hi2";

const Contact= () => {
  return (
    <section className="px-6 md:px-20 py-12 bg-white text-gray-900 max-h-[100vh] mb-20
    ">
      {/* Header */}
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          Love to hear from you,
          <br />
          Get in touch <span className="inline-block">👋</span>
        </h2>
      </div>

      {/* Form */}
      <form className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Your name</label>
            <input
              type="text"
              placeholder="Edward Snowden"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Your email</label>
            <input
              type="email"
              placeholder="itanexemple@gmail.com"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Interested In */}
          <div>
            <label className="block mb-2 font-medium">What you are interested</label>
            <select className="w-full border border-gray-300 px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black">
              <option>Design & Branding</option>
              <option>Web Development</option>
              <option>Marketing</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block mb-2 font-medium">Project Budget</label>
            <select className="w-full border border-gray-300 px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black">
              <option>Select your budget</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000+</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            placeholder="Let tell us know your project about"
            rows="5"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-gray-800 transition"
          >
            Just Send <HiArrowRight className="text-lg" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
