import { useState } from 'react';
import ProductList from './components/ProductList.tsx';
import Cart from './components/Cart.tsx';
import './App.css';

const initialProducts: Product[] = [
  {
    id: crypto.randomUUID(),
    title: 'Bread',
  },
  {
    id: crypto.randomUUID(),
    title: 'Butter',
  },
  {
    id: crypto.randomUUID(),
    title: 'Milk',
  },
  {
    id: crypto.randomUUID(),
    title: 'Cheese',
  },
];

export default function App() {
  const [products, setProducts] =
    useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function handleAddProduct(productId: string) {
    if (cartItems.some((item) => item.id === productId)) {
      alert('Item already exists in the cart!');
      return;
    }

    const productToAdd = products.find(
      (item) => item.id === productId
    )!;

    setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
  }

  function handleRemoveProduct(productId: string) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  return (
    <main className="flex flex-col items-center justify-start">
      <h1 className="text-6xl mb-10">Shopping Cart</h1>
      <ProductList
        products={products}
        onAddProduct={handleAddProduct}
      />
      <Cart
        cartItems={cartItems}
        onRemoveProduct={handleRemoveProduct}
      />
    </main>
  );
}
