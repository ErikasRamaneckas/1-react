import { MIN, MAX } from '../consts.ts';

export default function GuessForm({
  guess,
  setGuess,
  onGuess,
}: {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  onGuess: (e: React.FormEvent) => void;
}) {
  return (
    <>
      <form className="mb-5 flex justify-between" onSubmit={onGuess}>
        <input
          className="caret-sky-600 bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-3xs mr-5"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
          type="number"
          min={MIN}
          max={MAX}
        />
        <button
          className="bg-sky-500 text-white rounded-md px-5 transition-colors duration-200 hover:bg-sky-600 cursor-pointer"
          type="submit"
        >
          Guess
        </button>
      </form>
    </>
  );
}
