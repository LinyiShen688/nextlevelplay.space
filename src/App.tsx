import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGamepad, FaUsers, FaTrophy, FaStar } from 'react-icons/fa';

function App() {
  return (
    <>
      <Helmet>
        <title>Monster Survivors - Next Level Play</title>
        <meta name="description" content="Experience the ultimate survival adventure in Monster Survivors. Battle hordes of monsters, level up your character, and become the last survivor in this thrilling action game." />
        <meta name="keywords" content="Monster Survivors, online game, survival game, action game, monster game" />
        <link rel="canonical" href="https://nextlevelplay.space" />
        <meta property="og:title" content="Monster Survivors - Next Level Play" />
        <meta property="og:description" content="Experience the ultimate survival adventure in Monster Survivors. Battle hordes of monsters, level up your character, and become the last survivor." />
        <meta property="og:url" content="https://nextlevelplay.space" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Header Section */}
        <header className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Monster Survivors
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-300 mb-8">
            Survive the Monster Apocalypse in this Thrilling Action Adventure
          </p>
        </header>

        {/* Game Section */}
        <main className="container mx-auto px-4 py-8">
          {/* Game Frame */}
          <div className="aspect-video w-full max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://icloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Game Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <FaGamepad className="text-3xl text-blue-400 mb-4" />
              <h2 className="text-xl font-bold mb-2">Action-Packed Gameplay</h2>
              <p className="text-gray-300">Engage in intense battles with hordes of monsters using unique weapons and abilities.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <FaUsers className="text-3xl text-purple-400 mb-4" />
              <h2 className="text-xl font-bold mb-2">Character Progression</h2>
              <p className="text-gray-300">Level up your character, unlock new skills, and become stronger with each battle.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <FaTrophy className="text-3xl text-yellow-400 mb-4" />
              <h2 className="text-xl font-bold mb-2">Achievement System</h2>
              <p className="text-gray-300">Complete challenges and earn rewards as you progress through the game.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <FaStar className="text-3xl text-red-400 mb-4" />
              <h2 className="text-xl font-bold mb-2">Unique Monsters</h2>
              <p className="text-gray-300">Face off against a variety of unique monsters with different abilities and behaviors.</p>
            </div>
          </div>

          {/* Game Description */}
          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Monster Survivors</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Monster Survivors is an exhilarating action game that puts your survival skills to the ultimate test. 
                In a world overrun by terrifying monsters, you must fight to survive, level up your character, and 
                become the last survivor standing.
              </p>
              <p>
                With its stunning graphics, smooth controls, and engaging gameplay mechanics, Monster Survivors offers 
                an immersive gaming experience that will keep you on the edge of your seat. Whether you're playing on 
                PC or mobile devices, the game provides a seamless and responsive experience across all platforms.
              </p>
              <p>
                Challenge yourself to survive longer, defeat more monsters, and climb the global leaderboards. 
                With regular updates and new content, Monster Survivors continues to evolve and provide fresh 
                challenges for players worldwide.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2024 Next Level Play. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;