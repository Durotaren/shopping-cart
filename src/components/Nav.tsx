import cartSvg from '../assets/cart.svg';
import { Link } from 'react-router';
import type { AddedProduct } from '../types';

interface NavProps {
  itemsInCart: AddedProduct[];
}

export default function Nav({ itemsInCart }: NavProps) {
  const total =
    itemsInCart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0) || 0;

  return (
    <div className="w-[15vw] h-[56px] w-[256px] mx-auto mb-[1vw] bg-black rounded-4xl flex items-center cursor-pointer">
      <div className="ml-[8px] h-10 w-10 bg-white rounded-4xl mr-6 relative">
        <img className="p-2" src={cartSvg} alt="shopping cart" />
        <div className="absolute rounded-xl h-6 w-6 bg-orange-400 flex justify-center items-center text-sm -top-1.5 -right-2">
          {total}
        </div>
      </div>
      <div className="flex">
        <Link to="home" className="cursor-pointer px-2">
          Home
        </Link>
        <Link to="shop" className="cursor-pointer px-2">
          Shop
        </Link>
        <Link to="cart" className="cursor-pointer px-2">
          Cart
        </Link>
      </div>
    </div>
  );
}
