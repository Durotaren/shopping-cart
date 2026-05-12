import { useOutletContext } from 'react-router';
import type { ContextTypes } from '../types';

export default function Cart() {
  const { itemsInCart, changeItemsInCart }: ContextTypes = useOutletContext();
  return (
    <div className="h-[90%] rounded-md bg-[#FFFFFF] text-black">
      {itemsInCart}
    </div>
  );
}
