import { useState } from 'react';
import ProductList from './components/ProductList.tsx';
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
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
