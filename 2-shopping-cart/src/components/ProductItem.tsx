export default function ProductItem({
  product,
  onButtonClick,
  buttonLabel,
}: {
  product: Product;
  onButtonClick: OnButtonClick;
  buttonLabel: string;
}) {
  let color = 'bg-red-500';
  let hoverColor = 'hover:bg-red-600';
  if (buttonLabel === 'Add') {
    color = 'bg-sky-500';
    hoverColor = 'hover:bg-sky-600';
  }
  return (
    <>
      {product.title}
      <button
        className={`ml-5 px-3 ${color} py-2 text-white rounded-md transition-color duration-200 ${hoverColor} cursor-pointer`}
        onClick={() => onButtonClick(product.id)}
      >
        {buttonLabel}
      </button>
    </>
  );
}
