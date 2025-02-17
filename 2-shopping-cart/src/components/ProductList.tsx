import ProductItem from './ProductItem.tsx';

export default function ProductList({
  products,
  onAddProduct,
}: {
  products: Product[];
  onAddProduct: OnButtonClick;
}) {
  return (
    <>
      <h2 className="text-4xl">Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem
              product={product}
              onButtonClick={onAddProduct}
              buttonLabel="Add"
              buttonColor="sky"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
