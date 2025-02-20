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
          <li
            key={product.id}
            className="flex items-center justify-between my-3"
          >
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
