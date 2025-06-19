import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
      {/* Subscribe Section */}
      <div
        className="max-w-5xl mx-auto w-[90%] bg-yellow-400 rounded-sm px-6 py-6 translate-y-[-50%] z-10 relative"
        style={{ boxShadow: "4px 4px 0 #000" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Subscribe newsletter!
          </h2>
          <div className="flex w-full md:w-auto items-center border-b border-black">
            <input
              type="email"
              placeholder="@your email address"
              className="bg-yellow-400 placeholder-black text-black outline-none px-2 py-1 w-full md:w-64"
            />
            <button className="text-sm font-semibold hover:underline px-4 py-1">
              Submit Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="pt-28 pb-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + Social */}
          <div>
            <h3 className="text-2xl font-bold mb-1">TalentBridge HR</h3>
            <p className="text-gray-400 text-sm mb-2">
              Connecting Creative Service
            </p>
            {/* <p className="text-gray-500 text-sm">FB / Tw / Li</p> */}
            <p className="text-xs text-gray-600 mt-4">
              Copyright © 2025 TalentBridgehr
            </p>
          </div>

          {/* Wp Afinar */}
          <div>
            <h4 className="font-semibold mb-3">Wp Afinar</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Support Career</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>WhatsApp</li>
              <li>Support 24</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
