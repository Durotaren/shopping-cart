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
  itemsInCart: Product[];
  changeItemsInCart: React.Dispatch<React.SetStateAction<AddedProduct[]>>;
}

interface AddedProduct {
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export type { Product, ContextTypes, AddedProduct };
