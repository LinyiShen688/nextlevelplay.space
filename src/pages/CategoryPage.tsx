import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft } from 'react-icons/fa';
import { GAMES, CATEGORIES } from '../data';
import GameCard from '../components/GameCard';
import Sidebar from '../components/Sidebar';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = CATEGORIES.find(cat => cat.slug === slug);
  const games = GAMES.filter(game => game.category === slug);
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-apple-black dark:text-white mb-4">Category Not Found</h1>
        <Link to="/" className="text-apple-blue hover:underline">
          Return to homepage
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{`${category.name} Games - NextLevelPlay.space`}</title>
        <meta name="description" content={`Play the best ${category.name.toLowerCase()} games online for free. Browse our collection of ${category.name.toLowerCase()} games and play instantly in your browser.`} />
        <meta name="keywords" content={`${category.name.toLowerCase()} games, online games, browser games, free games`} />
        <link rel="canonical" href={`https://nextlevelplay.space/category/${category.slug}`} />
        <meta property="og:title" content={`${category.name} Games - NextLevelPlay.space`} />
        <meta property="og:description" content={`Play the best ${category.name.toLowerCase()} games online for free.`} />
        <meta property="og:url" content={`https://nextlevelplay.space/category/${category.slug}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="py-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="px-4 mb-8">
            <Link to="/" className="inline-flex items-center text-apple-blue hover:underline">
              <FaArrowLeft className="mr-2" /> Back to home
            </Link>
            
            <h1 className="text-3xl font-bold mt-4 text-apple-black dark:text-white">
              {category.name} Games
            </h1>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar - now on the extreme left */}
            <div className="w-full lg:w-64 order-2 lg:order-1 px-4 lg:pl-4 lg:pr-0">
              <Sidebar />
            </div>
            
            {/* Main content - filling the rest of the space */}
            <div className="flex-1 order-1 lg:order-2 px-4 lg:pr-4">
              {games.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {games.map(game => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-apple text-center">
                  <p className="text-apple-dark-gray mb-4">
                    No games found in this category yet.
                  </p>
                  <Link to="/" className="text-apple-blue hover:underline">
                    Explore other games
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage; 