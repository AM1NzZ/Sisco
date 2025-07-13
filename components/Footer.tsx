"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Link href="/" className="text-2xl font-pacifico text-gray-900">
                <img src="/cropped-sisco-128x43 1.png" alt="logo" />
              </Link>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              Leading the revolution in polymer compounds with innovative
              engineering solutions and sustainable manufacturing practices for
              a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-lg hover:bg-blue-400 transition-colors duration-200 cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-lg hover:bg-blue-400 transition-colors duration-200 cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-lg hover:bg-blue-400 transition-colors duration-200 cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-lg hover:bg-blue-400 transition-colors duration-200 cursor-pointer">
                <i className="ri-youtube-fill text-lg"></i>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <nav className="space-y-3">
              <Link
                href="/about"
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                Our Products
              </Link>
              <Link
                href="/solutions"
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                Solutions
              </Link>
              <Link
                href="/careers"
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                Careers
              </Link>
              <Link
                href="/news"
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                News & Media
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-blue-200 mt-1"></i>
                <div>
                  <p className="text-blue-100">
                    1234 Innovation Drive
                    <br />
                    Tech Park, CA 90210
                    <br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-blue-200"></i>
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-blue-200"></i>
                <span className="text-blue-100">contact@sisco.com</span>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4037086......"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-blue-100 text-sm">
              © 2024 Sisco Polymer Compounds. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
