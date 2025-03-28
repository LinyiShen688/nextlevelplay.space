import React from 'react';
import { Game } from '../types';
import { FaStar, FaGamepad } from 'react-icons/fa';

interface FeaturedGameProps {
  game: Game;
}

const FeaturedGame: React.FC<FeaturedGameProps> = ({ game }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-apple">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* 左侧区域 - iframe (占据3/5) */}
        <div className="lg:col-span-3 order-2 lg:order-1">
          <div className="aspect-video w-full h-full">
            <iframe
              src={game.iframe}
              title={game.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        
        {/* 右侧区域 - 文字内容 (占据2/5) */}
        <div className="lg:col-span-2 order-1 lg:order-2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-3 text-apple-black dark:text-white">
              {game.title}
            </h1>
            
            <div className="flex items-center mb-4">
              {game.rating && (
                <div className="flex items-center mr-4">
                  <FaStar className="h-4 w-4 text-apple-yellow" />
                  <span className="ml-1 text-sm text-apple-dark-gray">{game.rating}</span>
                </div>
              )}
              <span className="text-sm text-apple-dark-gray capitalize">{game.category}</span>
            </div>
            
            <p className="text-apple-dark-gray mb-6">
              {game.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {game.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-apple-dark-gray"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center mt-auto">
            <button className="flex-1 bg-apple-blue hover:bg-apple-dark-blue text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 flex items-center justify-center">
              <FaGamepad className="mr-2" /> Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGame; 