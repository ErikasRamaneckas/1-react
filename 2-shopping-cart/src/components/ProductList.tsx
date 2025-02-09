import ProductItem from './ProductItem.tsx';

export default function ProductList({ products }) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
