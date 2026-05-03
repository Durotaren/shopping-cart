import type { Product } from '../types';
type ItemProps = {
  item: Product;
};

export default function Item({ item }: ItemProps) {
  return (
    <li key={item.id}>
      <img src={item.image} alt="" className="w-50 h-auto" />
      {item.category}
      {item.title}
    </li>
  );
}
