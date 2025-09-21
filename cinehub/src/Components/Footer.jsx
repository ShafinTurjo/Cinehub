import React from "react";
import logo from "../assets/logo.svg";
import googlePlay from "../assets/googlePlay.svg";
import appStore from "../assets/appStore.svg";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        {/* Logo + tagline */}
        <div className="md:max-w-96">
          <img className="h-11" src={logo} alt="logo" />
          <p className="mt-6 text-sm">
            Explore the Magic of Cinema.<br />
  Lights...Camera... Cinefy!
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img src={googlePlay} alt="google play" className="h-9 w-auto" />
            <img src={appStore} alt="app store" className="h-10 w-auto" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
  <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
  <ul className="space-y-2 text-sm">
    <li>Phone: <a href="tel:+880123456789" className="hover:text-white">+880 1631 500 617</a></li>
    <li>Email: <a href="mailto:info@cinefy.com" className="hover:text-white">info@cinefy.com</a></li>
  </ul>
</div>
      </div>

      {/* Bottom footer */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © 2025 Cinefy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
