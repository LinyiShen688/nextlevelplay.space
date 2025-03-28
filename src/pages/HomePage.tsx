import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GAMES } from '../data';
import FeaturedGame from '../components/FeaturedGame';
import GameCard from '../components/GameCard';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
  const featuredGame = GAMES.find(game => game.isFeatured) || GAMES[0];
  const otherGames = GAMES.filter(game => game.id !== featuredGame.id);

  return (
    <>
      <Helmet>
        <title>NextLevelPlay.space - Play the Best Online Games Instantly</title>
        <meta name="description" content="Discover and play the best online games instantly in your browser. NextLevelPlay.space offers a wide selection of free games without downloads." />
        <meta name="keywords" content="online games, browser games, free games, no download games, html5 games, monster survivors" />
        <link rel="canonical" href="https://nextlevelplay.space" />
        <meta property="og:title" content="NextLevelPlay.space - Play the Best Online Games Instantly" />
        <meta property="og:description" content="Discover and play the best online games instantly in your browser without downloads." />
        <meta property="og:url" content="https://nextlevelplay.space" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="py-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar - now on the extreme left */}
            <div className="w-full lg:w-64 order-2 lg:order-1 px-4 lg:pl-4 lg:pr-0">
              <Sidebar />
            </div>
            
            {/* Main content - filling the rest of the space */}
            <div className="flex-1 order-1 lg:order-2 px-4 lg:pr-4">
              {/* Featured Game */}
              <FeaturedGame game={featuredGame} />
              
              <h2 className="text-2xl font-bold mt-10 mb-6 text-apple-black dark:text-white">
                Popular Games
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {otherGames.slice(0, 8).map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
              
              <h2 className="text-2xl font-bold my-6 text-apple-black dark:text-white">
                New Releases
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {otherGames.slice(0, 4).map(game => (
                  <GameCard key={`new-${game.id}`} game={game} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage; 