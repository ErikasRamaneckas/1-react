import { useState } from 'react';
import GuessForm from './GuessForm.tsx';

function generateRandNum() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function GuessGame() {
  const [randNum] = useState(generateRandNum());
  const [guess, setGuess] = useState('');

  function handleGuess(e) {
    e.preventDefault();
    console.log('Form submitted!');
    if (Number(guess) === randNum) {
      console.log('you win!');
    }
  }
  return (
    <>
      <h3>{randNum}</h3>
      <GuessForm
        guess={guess}
        setGuess={setGuess}
        onGuess={handleGuess}
      />
    </>
  );
}
