import ProductItem from './ProductItem.tsx';

export default function Cart({ cartItems, onRemoveProduct }) {
  return (
    <>
      <h2 className="text-4xl">Cart Items</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
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
