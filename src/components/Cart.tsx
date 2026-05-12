import { useOutletContext } from 'react-router';
import type { ContextTypes } from '../types';
import ItemInCart from './ItemInCart';

export default function Cart() {
  const { itemsInCart, changeItemsInCart }: ContextTypes = useOutletContext();

  return (
    <>
      <ul>
        {itemsInCart.map((item) => (
          <ItemInCart item={item} changeItemsInCart={changeItemsInCart} />
        ))}
      </ul>
    </>
  );
}
