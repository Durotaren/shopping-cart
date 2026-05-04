import Nav from './components/Nav';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="bg-[#E8E8E8] h-[100vh] p-[1vw] px-[2vw] text-white">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
