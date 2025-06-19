import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fffef6] border-b border-yellow-400 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-black">
          TalentBridge HR
        </Link>

        {/* Center pill nav group - Desktop */}
        <div className="hidden md:flex items-center border border-yellow-400 rounded-full px-6 py-2 space-x-6 font-medium text-black">
          <Link to="/" className="hover:underline decoration-yellow-400 underline-offset-4">✶ Home</Link>
          <Link to="/about" className="hover:underline decoration-yellow-400 underline-offset-4">✶ About Us</Link>
          <Link to="/services" className="hover:underline decoration-yellow-400 underline-offset-4">Case Studies</Link>
          <Link to="/contact" className="hover:underline decoration-yellow-400 underline-offset-4">Get in touch</Link>
        </div>

        {/* Right buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <Link to="/about" className="text-black hover:underline">Book a Call</Link>
          <Link
            to="/about"
            className="bg-[#ffffcc] text-black border border-yellow-400 rounded-md px-4 py-2 shadow-[2px_2px_0_0_rgba(255,215,0,1)] hover:shadow-[1px_1px_0_0_rgba(255,215,0,1)] transition"
          >
            Try Free
          </Link>
        </div>

        {/* Hamburger menu toggle - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            {mobileMenuOpen ? (
              // Cross Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-4 font-medium bg-[#fffef6] text-black border-t border-yellow-400">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block">✶ Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block">✶ About Us</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block">Case Studies</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block">Get in touch</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block">Book a Call</Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block mt-2 bg-[#ffffcc] text-black border border-yellow-400 rounded-md px-4 py-2 shadow-[2px_2px_0_0_rgba(255,215,0,1)] hover:shadow-[1px_1px_0_0_rgba(255,215,0,1)] transition"
          >
            Try Free
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
