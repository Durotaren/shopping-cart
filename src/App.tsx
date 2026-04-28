import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div className="bg-black h-[100vh] text-white">Hello!</div>;
}

export default App;
