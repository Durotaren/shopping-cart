import Header from './components/Header';
import Nav from './components/Nav';
import { useState } from 'react';
import { Outlet } from 'react-router';
import type { AddedProduct } from './types';

function App() {
  const [cartQuantity, changeCartQuantity] = useState(0);
  const [itemsInCart, changeItemsInCart] = useState<AddedProduct[]>([]);

  return (
    <div className="bg-[#FFFFFF] h-[100%] py-[1vw] px-[2vw] text-white rounded-lg">
      <div className="flex relative">
        <Header />
        <Nav quantity={cartQuantity} itemsInCart={itemsInCart} />
      </div>
      <Outlet
        context={{
          cartQuantity,
          changeCartQuantity,
          itemsInCart,
          changeItemsInCart,
        }}
      />
    </div>
  );
}

export default App;
