import { useOutletContext } from 'react-router';
import type { ContextTypes } from '../types';
import ItemInCart from './ItemInCart';

export default function Cart() {
  const { itemsInCart, changeItemsInCart }: ContextTypes = useOutletContext();

  return (
    <>
      {itemsInCart.length && (
        <ul className="flex flex-col w-80 justify-between items-center bg-[#E8E8E8] rounded-lg">
          {itemsInCart.map((item) => (
            <ItemInCart item={item} changeItemsInCart={changeItemsInCart} />
          ))}
        </ul>
      )}
    </>
  );
}
