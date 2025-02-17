export default function GuessForm({ guess, setGuess, onGuess } {
}) {
  return (
    <>
      <form className="mb-5 flex justify-between" onSubmit={onGuess}>
        <input
          className="caret-sky-600 bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-3xs"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
          type="number"
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
