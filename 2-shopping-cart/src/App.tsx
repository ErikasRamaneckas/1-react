import { useState } from 'react';
import ProductList from './components/ProductList.tsx';
import Cart from './components/Cart.tsx';
import './App.css';

const initialProducts: Product[] = [
  {
    id: 1,
    title: 'Basic Widget',
  },
  {
    id: 2,
    title: 'Cool Gadget',
  },
  {
    id: 3,
    title: 'Tech Box',
  },
  {
    id: 4,
    title: 'Sleek Phone Case',
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function handleAddProduct(productId: number) {
    setCartItems((prevCartItems) => {
      const productToAdd = products.find(
        (product) => product.id === productId
      );
      return [...prevCartItems, { ...productToAdd }];
    });
  }

  function handleRemoveProduct(productId: number) {
    setCartItems(cartItems.filter((i) => i.id !== productId));
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
        onRemoveProduct={handleRemoveProduct}
      />
    </>
  );
}

export default App;
