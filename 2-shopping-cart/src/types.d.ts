export {};

declare global {
  type Product = {
    id: number;
    title: string;
  };

  type OnButtonClick = {
    (productId: number): void;
  };
}
