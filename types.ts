export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  tags: string[];
}

export interface CartItem extends Dish {
  quantity: number;
}