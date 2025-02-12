import { useState } from 'react';
import GuessForm from './GuessForm.tsx';
import Message from './Message.tsx';

function generateRandNum() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function GuessGame() {
  const [randNum] = useState(generateRandNum());
  const [guess, setGuess] = useState('');
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [message, setMessage] = useState('');

  function handleGuess(e) {
    e.preventDefault();
    console.log('Form submitted!');
    if (Number(guess) === randNum) {
      console.log('you win!');
      setMessage('You win');
      return;
    }
    setNumberOfGuesses(numberOfGuesses + 1);
    if (Number(guess) < randNum) {
      setMessage('too low!');
    } else {
      setMessage('too high!');
    }
  }
  return (
    <>
      <h3>{randNum}</h3>
      <p>Number of guesses: {numberOfGuesses}</p>
      <GuessForm
        guess={guess}
        setGuess={setGuess}
        onGuess={handleGuess}
      />
      <Message message={message} />
    </>
  );
}
