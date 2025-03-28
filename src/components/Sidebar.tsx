import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data';

const POPULAR_TAGS = [
  'action', 'adventure', 'puzzle', 'rpg', 'shooter', 
  'strategy', 'survival', 'racing', 'sports', 'platformer'
];

const Sidebar: React.FC = () => {
  return (
    <aside className="sticky top-20">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-apple mb-6">
        <h2 className="text-lg font-semibold mb-4 text-apple-black dark:text-white">Categories</h2>
        <ul className="space-y-2">
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <Link 
                to={`/category/${category.slug}`}
                className="block text-apple-dark-gray hover:text-apple-blue transition-colors duration-200"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-apple mb-6">
        <h2 className="text-lg font-semibold mb-4 text-apple-black dark:text-white">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TAGS.map((tag, index) => (
            <Link 
              key={index} 
              to={`/tags/${tag}`}
              className="inline-block text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-apple-dark-gray hover:bg-apple-blue hover:text-white transition-colors duration-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-apple">
        <h2 className="text-lg font-semibold mb-4 text-apple-black dark:text-white">Community</h2>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/discord"
              className="block text-apple-dark-gray hover:text-apple-blue transition-colors duration-200"
            >
              Join our Discord
            </Link>
          </li>
          <li>
            <Link 
              to="/forums"
              className="block text-apple-dark-gray hover:text-apple-blue transition-colors duration-200"
            >
              Forums
            </Link>
          </li>
          <li>
            <Link 
              to="/developers"
              className="block text-apple-dark-gray hover:text-apple-blue transition-colors duration-200"
            >
              For Developers
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar; 