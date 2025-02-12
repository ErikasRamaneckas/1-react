export default function GuessForm({ guess, setGuess, onGuess }) {
  return (
    <>
      <form onSubmit={onGuess}>
        <input
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
          type="number"
        />
        <button type="submit">Guess</button>
      </form>
    </>
  );
}
