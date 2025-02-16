import { useState } from 'react';
import ProductList from './components/ProductList.tsx';
import Cart from './components/Cart.tsx';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: 'test1',
  },
  {
    id: 2,
    name: 'test2',
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);

  function handleAddProduct(productId: number) {
    setCartItems((prevCartItems) => {
      const productToAdd = products.find(
        (product) => product.id === productId
      );
      return [...prevCartItems, { ...productToAdd }];
    });
  }

  return (
    <>
      <h1 className="text-7xl mb-10">Shopping Cart</h1>
      <ProductList
        products={products}
        onAddProduct={handleAddProduct}
      />
      <Cart
        cartItems={cartItems}
        onRemoveProduct={handleAddProduct}
      />
    </>
  );
}

export default App;
