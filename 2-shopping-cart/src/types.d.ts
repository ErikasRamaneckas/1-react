export {};

declare global {
  type Product = {
    id: string;
    title: string;
  };

  type OnButtonClick = {
    (productId: string): void;
  };
}
