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
  itemsInCart: AddedProduct[];
  changeItemsInCart: React.Dispatch<React.SetStateAction<AddedProduct[]>>;
}

interface AddedProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export type { Product, ContextTypes, AddedProduct };
