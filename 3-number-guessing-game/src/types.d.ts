export {};

declare global {
  type GuessFormProps = {
    guess: string;
    setGuess: React.Dispatch<React.SetStateAction<string>>;
    onGuess: (e: React.FormEvent) => void;
  };

  type MessageProps = {
    message: string;
  };
}
