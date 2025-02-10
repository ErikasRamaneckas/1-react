import ProductItem from './ProductItem.tsx';

export default function ProductList({ products, onAddProduct }) {
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem
              product={product}
              onButtonClick={onAddProduct}
              buttonLabel="Add"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
