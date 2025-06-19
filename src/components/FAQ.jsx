import React, { useState } from "react";

const faqs = [
  {
    question: "What is your hourly rate?",
    answer:
      "We're sorry you are experiencing some trouble. Open the help chat in the bottom right corner to chat with someone directly or we might have some helpful information in our knowledge base here.",
  },
  {
    question: "What type of projects do you take on?",
    answer: "",
  },
  {
    question: "How do you charge for projects?",
    answer: "",
  },
  {
    question: "What time-zone do you work in?",
    answer: "",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [question, setQuestion] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        <span className="bg-green-600 text-xs px-2 py-1 rounded-full">FAQs</span>
        <h2 className="text-3xl font-bold">Frequently asked questions</h2>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && faq.answer && (
              <p className="text-gray-400 mt-2 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}

        {/* Input Box */}
        <div className="mt-16 bg-white text-black rounded-md shadow-md p-6 relative">
          <h3 className="text-xl font-semibold mb-2">
            Also more question? let us know
          </h3>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-md outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-semibold text-sm">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
