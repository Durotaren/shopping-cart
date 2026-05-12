import { useOutletContext } from 'react-router';
import type { ContextTypes } from '../types';

export default function Cart() {
  const { itemsInCart, changeItemsInCart }: ContextTypes = useOutletContext();

  return (
    <>
      <div className="text-black">hey</div>

      {itemsInCart.map((item) => (
        <li className="text-black">{item.title}</li>
      ))}
    </>
  );
}
