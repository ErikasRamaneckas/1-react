import ProductItem from './ProductItem.tsx';

export default function Cart({ cartItems, onRemoveProduct }) {
  return (
    <>
      <h2>Cart</h2>
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
