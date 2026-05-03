import { useState, useEffect } from 'react';
import type { Product } from '../types';
import Item from './Item';

export default function Shop() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data: Product[]) => setItems(data));
  }, []);
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}
