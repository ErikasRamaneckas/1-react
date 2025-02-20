export {};

declare global {
  type Product = {
    id: string;
    title: string;
  };

  type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit';
  };

  type CartProps = {
    cartItems: Product[];
    onRemoveProduct: OnButtonClick;
  };

  type ProductListProps = {
    products: Product[];
    onAddProduct: OnButtonClick;
  };

  type ProductItemProps = {
    product: Product;
    onButtonClick: OnButtonClick;
    buttonLabel: string;
  };

  type OnButtonClick = {
    (productId: string): void;
  };
}
