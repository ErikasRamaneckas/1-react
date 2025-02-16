export default function ProductItem({
  product,
  onButtonClick,
  buttonLabel,
}) {
  return (
    <>
      {product.id} {product.name}
      {/* classname pagal label ir naudoti ternary operator */}
      <button className="?" onClick={() => onButtonClick(product.id)}>
        {buttonLabel}
      </button>
    </>
  );
}
