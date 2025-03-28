import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-gray dark:bg-apple-black border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-[1920px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-apple-black dark:text-white">NextLevelPlay<span className="text-apple-blue">.space</span></h3>
            <p className="text-sm text-apple-dark-gray">
              Your destination for the best online games. Play instantly in your browser without downloads.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4 text-apple-black dark:text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/action" className="text-sm text-apple-dark-gray hover:text-apple-blue">
                  Action
                </Link>
              </li>
              <li>
                <Link to="/category/adventure" className="text-sm text-apple-dark-gray hover:text-apple-blue">
                  Adventure
                </Link>
              </li>
              <li>
                <Link to="/category/puzzle" className="text-sm text-apple-dark-gray hover:text-apple-blue">
                  Puzzle
                </Link>
              </li>
              <li>
                <Link to="/category/strategy" className="text-sm text-apple-dark-gray hover:text-apple-blue">
                  Strategy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4 text-apple-black dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-apple-dark-gray hover:text-apple-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-apple-dark-gray hover:text-apple-blue">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-apple-dark-gray hover:text-apple-blue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-apple-dark-gray hover:text-apple-blue">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4 text-apple-black dark:text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-apple-dark-gray hover:text-apple-blue">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-apple-dark-gray hover:text-apple-blue">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-apple-dark-gray hover:text-apple-blue">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-apple-dark-gray hover:text-apple-blue">
                <FaDiscord className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-apple-dark-gray">
                Sign up for our newsletter to get updates on new games and features.
              </p>
              <form className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 py-1 px-3 text-sm rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-apple-blue"
                />
                <button
                  type="submit"
                  className="bg-apple-blue text-white text-sm py-1 px-3 rounded-r-md hover:bg-apple-dark-blue focus:outline-none focus:ring-1 focus:ring-apple-blue"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-apple-dark-gray">
            &copy; {currentYear} NextLevelPlay.space. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 