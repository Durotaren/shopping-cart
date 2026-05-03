import { useState, useEffect } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
};

export default function Shop() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data: Product[]) => setItems(data));
  }, []);
  return (
    <div>
      {items.map((item) => (
        <p>
          {item.category}
          {item.title}
        </p>
      ))}
    </div>
  );
}
