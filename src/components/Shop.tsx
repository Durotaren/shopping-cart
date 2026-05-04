import { useState, useEffect } from 'react';
import type { Product } from '../types';
import Item from './Item';

export default function Shop() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data: Product[]) => setItems(data.slice(0, 6)));
  }, []);
  return (
    <ul className="flex">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}
