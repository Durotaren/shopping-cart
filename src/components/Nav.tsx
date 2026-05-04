import cartSvg from '../assets/cart.svg';

export default function Nav() {
  return (
    <div className="w-[15vw] h-[56px] mx-auto mb-[1vw] bg-black rounded-4xl flex items-center cursor-pointer">
      <div className="ml-[8px] h-10 w-10 bg-white rounded-4xl mr-6">
        <img className="p-2" src={cartSvg} alt="" />
      </div>
      <div className="flex gap-5">
        <button className="cursor-pointer">Home</button>
        <button className="cursor-pointer">Shop</button>
        <button className="cursor-pointer">Cart</button>
      </div>
    </div>
  );
}
