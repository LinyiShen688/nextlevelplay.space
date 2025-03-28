import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { GAMES } from '../data';
import { Game } from '../types';
import GameCard from '../components/GameCard';

const GameDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [relatedGames, setRelatedGames] = useState<Game[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundGame = GAMES.find(g => g.id === parseInt(id));
      setGame(foundGame || null);
      
      if (foundGame) {
        // Get games from the same category
        const related = GAMES
          .filter(g => g.id !== foundGame.id && g.category === foundGame.category)
          .slice(0, 3);
        setRelatedGames(related);
      }
    }
  }, [id]);
  
  if (!game) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-apple-black dark:text-white mb-4">Game Not Found</h1>
        <Link to="/" className="text-apple-blue hover:underline">
          Return to homepage
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{`${game.title} - NextLevelPlay.space`}</title>
        <meta name="description" content={game.description} />
        <meta name="keywords" content={`${game.title}, ${game.tags.join(', ')}, online game`} />
        <link rel="canonical" href={`https://nextlevelplay.space/game/${game.id}`} />
        <meta property="og:title" content={`${game.title} - NextLevelPlay.space`} />
        <meta property="og:description" content={game.description} />
        <meta property="og:url" content={`https://nextlevelplay.space/game/${game.id}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-apple-blue hover:underline mb-6">
          <FaArrowLeft className="mr-2" /> Back to games
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-apple">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-apple-black dark:text-white">
                  {game.title}
                </h1>
                <div className="flex items-center mb-4">
                  <Link 
                    to={`/category/${game.category}`}
                    className="text-sm text-apple-blue hover:underline mr-4"
                  >
                    {game.category.charAt(0).toUpperCase() + game.category.slice(1)}
                  </Link>
                  {game.rating && (
                    <div className="flex items-center">
                      <FaStar className="h-4 w-4 text-apple-yellow" />
                      <span className="ml-1 text-sm text-apple-dark-gray">{game.rating}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button className="bg-apple-blue hover:bg-apple-dark-blue text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 mt-4 md:mt-0">
                Play Now
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {game.tags.map((tag, index) => (
                <Link 
                  key={index}
                  to={`/tags/${tag}`}
                  className="inline-block text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-apple-dark-gray hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
            
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe
                src={game.iframe}
                title={game.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold mb-4 text-apple-black dark:text-white">
                About {game.title}
              </h2>
              <p className="text-apple-dark-gray">
                {game.description}
              </p>
              <p className="text-apple-dark-gray mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies ultricies, 
                nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl 
                aliquam nunc, vitae aliquam nisl nunc vitae nisl.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-apple-black dark:text-white">
                How to Play
              </h2>
              <p className="text-apple-dark-gray">
                Use the arrow keys or WASD to move your character. Press space to attack. Collect power-ups to increase your chances 
                of survival. Defeat as many monsters as possible to achieve a high score.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-apple-black dark:text-white">
                Features
              </h2>
              <ul className="list-disc pl-5 text-apple-dark-gray">
                <li>Engaging gameplay with challenging monsters</li>
                <li>Multiple character classes to choose from</li>
                <li>Unique power-ups and abilities</li>
                <li>Progressive difficulty level</li>
                <li>Compete with friends for high scores</li>
              </ul>
            </div>
          </div>
        </div>
        
        {relatedGames.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-apple-black dark:text-white">
              Similar Games You Might Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedGames.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GameDetailPage; 