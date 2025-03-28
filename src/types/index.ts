export interface Game {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  tags: string[];
  isFeatured?: boolean;
  rating?: number;
  iframe?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export type GameCategory = 
  | 'action'
  | 'adventure'
  | 'puzzle'
  | 'strategy'
  | 'sports'
  | 'shooter'
  | 'racing'
  | 'rpg'
  | 'simulation'
  | 'arcade'; 