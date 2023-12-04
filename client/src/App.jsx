import { Outlet } from "react-router-dom";
import Nav from './components/Nav'
// import CartPage from './components/Cart';

function App() {
  return (
    <div>

     <Nav />
     {/* <CartPage /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

