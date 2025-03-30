import { Category, Game } from '../types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Action', slug: 'action' },
  { id: '2', name: 'Adventure', slug: 'adventure' },
  { id: '3', name: 'Puzzle', slug: 'puzzle' },
  { id: '4', name: 'Strategy', slug: 'strategy' },
  { id: '5', name: 'Sports', slug: 'sports' },
  { id: '6', name: 'Shooter', slug: 'shooter' },
  { id: '7', name: 'Racing', slug: 'racing' },
  { id: '8', name: 'RPG', slug: 'rpg' },
  { id: '9', name: 'Simulation', slug: 'simulation' },
  { id: '10', name: 'Arcade', slug: 'arcade' },
  { id: '11', name: 'Card', slug: 'card' },
];

// Sample data - in a real app, this would come from an API
export const GAMES: Game[] = [
  {
    id: 1,
    title: 'Texas Hold\'em Poker',
    description: 'Experience the thrill of the world\'s most popular poker game. Test your skills, bluff your opponents, and win big in this strategic card game.',
    coverImage: 'https://via.placeholder.com/300x200?text=Texas+Holdem+Poker',
    category: 'card',
    tags: ['poker', 'cards', 'strategy', 'casino'],
    isFeatured: true,
    rating: 4.9,
    iframe: 'https://cdn.zone.msn.com/assets/games/thirdparty/arkadium/texasholdempoker/20220728T1045/default.html'
  },
  {
    id: 2,
    title: 'Space Explorer',
    description: 'Explore the vastness of space in this immersive adventure game.',
    coverImage: 'https://via.placeholder.com/300x200?text=Space+Explorer',
    category: 'adventure',
    tags: ['space', 'exploration', 'sci-fi'],
    rating: 4.5,
    iframe: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html'
  },
  {
    id: 3,
    title: 'Puzzle Master',
    description: 'Test your problem-solving skills with challenging puzzles.',
    coverImage: 'https://via.placeholder.com/300x200?text=Puzzle+Master',
    category: 'puzzle',
    tags: ['brain teaser', 'logic', 'puzzle'],
    rating: 4.3,
    iframe: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html'
  },
  {
    id: 4,
    title: 'War Commander',
    description: 'Lead your army to victory in this epic strategy game.',
    coverImage: 'https://via.placeholder.com/300x200?text=War+Commander',
    category: 'strategy',
    tags: ['war', 'tactics', 'military'],
    rating: 4.6,
    iframe: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html'
  },
  {
    id: 5,
    title: 'Championship Soccer',
    description: 'Experience the thrill of soccer in this realistic sports simulation.',
    coverImage: 'https://via.placeholder.com/300x200?text=Championship+Soccer',
    category: 'sports',
    tags: ['soccer', 'football', 'team'],
    rating: 4.2,
    iframe: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html'
  },
  {
    id: 6,
    title: 'Zombie Apocalypse',
    description: 'Survive in a world overrun by zombies in this intense shooter game.',
    coverImage: 'https://via.placeholder.com/300x200?text=Zombie+Apocalypse',
    category: 'shooter',
    tags: ['zombie', 'survival', 'horror'],
    rating: 4.7,
    iframe: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html'
  },
  {
    id: 7,
    title: 'Speed Racer',
    description: 'Race against the best drivers in high-speed competitions.',
    coverImage: 'https://via.placeholder.com/300x200?text=Speed+Racer',
    category: 'racing',
    tags: ['cars', 'speed', 'competition'],
    rating: 4.4,
    iframe: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html'
  },
  {
    id: 8,
    title: 'Fantasy Quest',
    description: 'Embark on an epic journey in a fantasy world filled with magic and adventure.',
    coverImage: 'https://via.placeholder.com/300x200?text=Fantasy+Quest',
    category: 'rpg',
    tags: ['fantasy', 'magic', 'adventure'],
    rating: 4.9,
    iframe: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html'
  }
]; 