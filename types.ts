export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image: string;
  spicyLevel: 0 | 1 | 2 | 3; // 0: none, 3: extreme
  isPopular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export type Category = 'all' | 'starters' | 'mains' | 'desserts' | 'drinks';