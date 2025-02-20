import ProductItem from './ProductItem.tsx';

export default function Cart({
  cartItems,
  onRemoveProduct,
}: CartProps) {
  return (
    <>
      <h2 className="text-4xl">Cart Items</h2>
      <ul>
        {cartItems.map((cartItem: Product) => (
          <li
            key={cartItem.id}
            className="flex items-center justify-between my-3"
          >
            <ProductItem
              product={cartItem}
              onButtonClick={onRemoveProduct}
              buttonLabel="Remove"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
