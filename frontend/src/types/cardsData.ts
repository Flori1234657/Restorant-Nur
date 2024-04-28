type CardData = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  isAvailable: boolean;
  price: number;
  isLiked: boolean;
};

export type FoodCategories =
  | 'Fish'
  | 'Pasta'
  | 'Risotto'
  | 'Soups'
  | 'Salads'
  | 'Drink'
  | 'Others';

export type FoodCardData = CardData & {
  cookingTime: string;
  category: FoodCategories;
  discount: null | number;
};

export type PromosCardData = CardData & {
  persons: number;
  type: string; // 'Economic' | 'Dinner' | 'Breakfast' | 'Couple'
};
