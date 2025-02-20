export default function Button({
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`transition-colors duration-200 rounded-md px-6 py-2 ml-5 cursor-pointer text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
