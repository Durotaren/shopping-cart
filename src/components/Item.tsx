import type { Product } from '../types';
import { useState } from 'react';

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
  const [count, setCount] = useState<number>(1);

  return (
    <li
      key={item.id}
      className="flex flex-col justify-around gap-3 items-center my-2 bg-[#FFFFFF] rounded-lg border border-transparent hover:border-gray-600 transition"
    >
      <div className="rounded-md p-10 w-70 h-70">
        <img src={item.image} alt="" className="w-full h-full object-contain" />
      </div>
      <p className="text-black text-center">{names[item.id]}</p>
      <p className="text-black">{item.price}$</p>
      <div className="flex justify-between items-center gap-5">
        <button
          onClick={() => {
            if (count > 0) {
              setCount((prev) => prev - 1);
            }
          }}
          className="w-7 h-7 text-black rounded-md bg-white border-black border-1 flex justify-center items-center cursor-pointer"
        >
          -
        </button>
        <p className="text-black w-[20px] flex justify-center">{count}</p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="w-7 h-7 text-black rounded-md bg-white border-black border-1 flex justify-center items-center cursor-pointer"
        >
          +
        </button>
      </div>
      <button className="text-black w-[90%] p-2 mb-3 rounded-md border-black border-1 cursor-pointer">
        Add to Cart
      </button>
    </li>
  );
}
