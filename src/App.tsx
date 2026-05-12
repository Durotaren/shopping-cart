import Header from './components/Header';
import Nav from './components/Nav';
import { useState } from 'react';
import { Outlet } from 'react-router';
import type { AddedProduct } from './types';

function App() {
  const [itemsInCart, changeItemsInCart] = useState<AddedProduct[]>([]);

  return (
    <div className="bg-[#FFFFFF] h-[100%] py-[1vw] px-[2vw] text-white rounded-lg">
      <div className="flex relative">
        <Header />
        <Nav itemsInCart={itemsInCart} />
      </div>
      <Outlet
        context={{
          itemsInCart,
          changeItemsInCart,
        }}
      />
    </div>
  );
}

export default App;
