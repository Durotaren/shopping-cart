import type { AddedProduct } from '../types';

type Props = {
  item: AddedProduct;
  changeItemsInCart: React.Dispatch<React.SetStateAction<AddedProduct[]>>;
};

export default function ItemInCart({ item, changeItemsInCart }: Props) {
  return (
    <li
      key={item.id}
      className="flex flex-col justify-around gap-1 items-center my-6 bg-[#FFFFFF] rounded-lg border border-transparent hover:border-gray-600 transition"
    >
      <div className="rounded-md p-10 w-60 h-50">
        <img src={item.image} alt="" className="w-full h-full object-contain" />
      </div>
      <p className="text-black text-center">{item.title}</p>
      <p className="text-black">{item.price}$</p>
      <p className="text-black">{item.quantity}</p>
      <button
        className="text-black cursor-pointer p-2 border border-gray-600 rounded-lg mb-2"
        onClick={() => {
          changeItemsInCart((prev) =>
            prev.filter((product) => product.id !== item.id),
          );
        }}
      >
        Click here to delete
      </button>
    </li>
  );
}
