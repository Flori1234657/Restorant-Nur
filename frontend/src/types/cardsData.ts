type CardData = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  isAvailable: boolean;
  price: number;
  isLiked: boolean;
};

export type FoodCardData = CardData & {
  cookingTime: string;
  discount: null | number;
};

export type PromosCardData = CardData & {
  persons: number;
  type: string; // 'Economic' | 'Dinner' | 'Breakfast' | 'Couple'
};
