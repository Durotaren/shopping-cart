import type { Product } from '../types';

type ItemProps = {
  item: Product;
};

const names: Record<number, string> = {
  1: "Fjallraven Men's backpack",
  2: 'Mens Premium T-Shirt',
  3: 'Mens Cotton Jacket',
  4: 'Mens Casual Slim Fit',
  5: 'John Hardy Bracelet',
  6: 'Solid Gold Micropave Ring',
  7: 'White Gold Princess Ring',
  8: 'Rose Gold Earrings',
  9: '2TB External Hard Drive',
  10: 'SanDisk 1TB Internal SSD',
  11: 'Silicon Power 256GB SSD',
  12: 'WD 4TB Gaming Drive',
  13: 'Acer Full HD Monitor',
  14: 'Curved Gaming Monitor',
  15: "Women's Jacket",
  16: 'Lock and Love Jacket',
  17: "Women's Rain Jacket",
  18: "Women's T-Shirt",
  19: "Opna Women's T-Shirt",
  20: "Women's Cotton T-Shirt",
};

export default function Item({ item }: ItemProps) {
  return (
    <li key={item.id} className="mx-auto flex flex-col">
      <div className="rounded-md p-2 bg-[#E8E8E8]">
        <img src={item.image} alt="" className="h-60 w-60" />
      </div>
      <p className="text-black text-center w-50">{names[item.id]}</p>
      <button className="text-black">Add to Cart</button>
      <button className="text-black">{item.price}$</button>
    </li>
  );
}
