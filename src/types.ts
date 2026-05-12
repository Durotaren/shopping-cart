type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
};

interface ContextTypes {
  cartQuantity: number;
  changeCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  itemsInCart: number;
  changeItemsInCart: React.Dispatch<React.SetStateAction<number>>;
}

export type { Product, ContextTypes };
