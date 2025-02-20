import Button from './Button';

export default function ProductItem({
  product,
  onButtonClick,
  buttonLabel,
}: ProductItemProps) {
  let className = 'bg-sky-500 hover:bg-sky-600';
  if (buttonLabel === 'Remove') {
    className = 'bg-red-500 hover:bg-red-600';
  }

  return (
    <>
      {product.title}
      <Button
        onClick={() => onButtonClick(product.id)}
        children={buttonLabel}
        className={className}
      />
    </>
  );
}
