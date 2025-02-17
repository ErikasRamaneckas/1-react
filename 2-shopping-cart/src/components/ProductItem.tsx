export default function ProductItem({
  product,
  onButtonClick,
  buttonLabel,
  buttonColor,
}: {
  product: Product;
  onButtonClick: OnButtonClick;
  buttonLabel: string;
  buttonColor: string;
}) {
  let color = '';
  if (buttonColor === 'red') {
    color = 'bg-red-500';
  } else if (buttonColor === 'sky') {
    color = 'bg-sky-500';
  }

  return (
    <div className="my-5 flex justify-between text-xl">
      {product.title}
      {/* classname pagal label ir naudoti ternary operator */}
      <button
        className={`px-3 ${color} py-2 text-white rounded-md transition-color duration-200  cursor-pointer`}
        onClick={() => onButtonClick(product.id)}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
