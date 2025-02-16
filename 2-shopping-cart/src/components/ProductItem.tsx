export default function ProductItem({
  product,
  onButtonClick,
  buttonLabel,
}) {
  return (
    <div className="text-xl">
      {product.id} {product.name}
      {/* classname pagal label ir naudoti ternary operator */}
      <button
        className="px-3 py-2 bg-sky-500 text-white rounded-md transition-color duration-200 hover:bg-sky-600 cursor-pointer"
        onClick={() => onButtonClick(product.id)}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
