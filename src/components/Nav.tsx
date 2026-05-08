import cartSvg from '../assets/cart.svg';
import { Link } from 'react-router';

interface NavProps {
  quantity: number;
}

export default function Nav({ quantity }: NavProps) {
  return (
    <div className="w-[15vw] w-[250px] h-[56px] mx-auto mb-[1vw] bg-black rounded-4xl flex items-center cursor-pointer">
      <div className="ml-[8px] h-10 w-10 bg-white rounded-4xl mr-6 relative">
        <img className="p-2" src={cartSvg} alt="shopping cart" />
        <div className="absolute rounded-xl h-6 w-6 bg-orange-400 flex justify-center items-center text-sm -top-2 -right-2">
          {quantity}
        </div>
      </div>
      <div className="flex gap-5">
        <Link to="home" className="cursor-pointer">
          Home
        </Link>
        <Link to="shop" className="cursor-pointer">
          Shop
        </Link>
        <Link to="cart" className="cursor-pointer">
          Cart
        </Link>
      </div>
    </div>
  );
}
