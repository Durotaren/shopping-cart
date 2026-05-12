import type { AddedProduct } from '../types';

type Props = {
  item: AddedProduct;
  changeItemsInCart: React.Dispatch<React.SetStateAction<AddedProduct[]>>;
};

export default function ItemInCart({ item, changeItemsInCart }: Props) {
  return (
    <li
      key={item.id}
      className="flex flex-col justify-around gap-3 items-center my-2 bg-[#FFFFFF] rounded-lg border border-transparent hover:border-gray-600 transition"
    >
      <div className="rounded-md p-10 w-70 h-70">
        <img src={item.image} alt="" className="w-full h-full object-contain" />
      </div>
      <p className="text-black text-center">{item.title}</p>
      <p className="text-black">{item.price}$</p>
    </li>
  );
}
