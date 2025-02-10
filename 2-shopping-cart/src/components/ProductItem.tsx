export default function ProductItem({
  product,
  onButtonClick,
  buttonLabel,
}) {
  return (
    <>
      {product.id} {product.name}
      <button onClick={() => onButtonClick(product.id)}>
        {buttonLabel}
      </button>
    </>
  );
}
