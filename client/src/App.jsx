import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/HomePage';
import ProductDetails from './components/ProductDetailsPage';
import "./index.css"
function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


