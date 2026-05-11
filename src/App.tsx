import Header from './components/Header';
import Nav from './components/Nav';
import { useState } from 'react';
import { Outlet } from 'react-router';

function App() {
  const [cartQuantity, changeCartQuantity] = useState(0);

  return (
    <div className="bg-[#FFFFFF] h-[100%] py-[1vw] px-[2vw] text-white rounded-lg">
      <div className="flex relative">
        <Header />
        <Nav quantity={cartQuantity} />
      </div>
      <Outlet context={changeCartQuantity} />
    </div>
  );
}

export default App;
