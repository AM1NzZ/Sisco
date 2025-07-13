"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-pacifico text-gray-900">
              <img src="/Group 2.png" alt="logo" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/news"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
              Login
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`ri-${isMenuOpen ? "close" : "menu"}-line text-xl`}
            ></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Products
              </Link>
              <Link
                href="/solutions"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link
                href="/news"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left whitespace-nowrap cursor-pointer">
                  Login
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
