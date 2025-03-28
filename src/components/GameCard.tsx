import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-apple hover:shadow-apple-hover transition-all duration-300">
      <Link to={`/game/${game.id}`}>
        <div className="relative aspect-[4/3]">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {game.isFeatured && (
            <div className="absolute top-2 right-2 bg-apple-blue text-white text-xs px-2 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium text-apple-black dark:text-white transition-colors duration-200 group-hover:text-apple-blue">
              {game.title}
            </h3>
            {game.rating && (
              <div className="flex items-center">
                <FaStar className="h-4 w-4 text-apple-yellow" />
                <span className="ml-1 text-xs text-apple-dark-gray">{game.rating}</span>
              </div>
            )}
          </div>
          
          <p className="text-sm text-apple-dark-gray line-clamp-2 mb-3">
            {game.description}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {game.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-apple-dark-gray"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameCard; 