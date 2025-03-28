import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { CATEGORIES } from '../data';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search
    console.log('Searching for:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-apple-gray dark:bg-apple-black border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-apple-blue font-semibold text-xl">NextLevelPlay</span>
              <span className="text-apple-dark-gray text-xs ml-1">.space</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-apple-blue focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-apple-black dark:text-white hover:text-apple-blue">
                Browse Games
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="py-1">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/popular" className="px-3 py-2 text-sm text-apple-black dark:text-white hover:text-apple-blue">
              Popular
            </Link>
            <Link to="/new" className="px-3 py-2 text-sm text-apple-black dark:text-white hover:text-apple-blue">
              New Releases
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md ml-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for games..."
                className="w-full py-1 pl-3 pr-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-apple-blue text-sm"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-3 text-gray-400 hover:text-apple-blue"
              >
                <FaSearch className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="py-2">
              <span className="px-3 py-2 text-sm font-medium text-apple-dark-gray">Browse Games</span>
              <div className="mt-1 grid grid-cols-2 gap-1">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="block px-3 py-2 text-sm text-apple-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/popular" 
              className="block px-3 py-2 text-sm text-apple-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Popular
            </Link>
            <Link 
              to="/new" 
              className="block px-3 py-2 text-sm text-apple-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              New Releases
            </Link>
            <div className="pt-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for games..."
                  className="w-full py-2 pl-3 pr-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-apple-blue"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 px-3 text-gray-400 hover:text-apple-blue"
                >
                  <FaSearch className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 