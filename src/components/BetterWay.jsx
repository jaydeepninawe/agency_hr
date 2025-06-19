import React from "react";

const BetterWay = () => {
  return (
    <div className="max-w-md mx-auto p-8 font-sans text-center">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Why You Are Better?</h1>
        <p className="text-xl text-gray-600">We can show you a better way...</p>
      </header>

      {/* Main content */}
      <main>
        <p className="text-gray-700 leading-relaxed mb-8">
          Compellingly reinvent bricks-and-clicks<br />
          imperatives through covalent initiatives.<br />
          Interactively communicate standardized<br />
          initiatives via diverse sources.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* CTA Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded transition-colors duration-300 mb-8">
          Get Started Now
        </button>

        {/* Footer */}
        <footer className="mt-8">
          <p className="font-bold text-lg">TOMA+</p>
          <p className="text-gray-600 text-sm">Customer Trust us</p>
        </footer>
      </main>
    </div>
  );
};

export default BetterWay;