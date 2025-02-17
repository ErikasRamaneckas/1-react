import { useState } from 'react';
import GuessForm from './GuessForm.tsx';
import Message from './Message.tsx';

function generateRandNum() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function GuessGame() {
  const [randNum, setRandNum] = useState(generateRandNum());
  const [guess, setGuess] = useState('');
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [message, setMessage] = useState('');
  console.log(randNum);

  function handleGuess(e: React.FormEvent) {
    e.preventDefault();
    if (Number(guess) === randNum) {
      setMessage('You win, enter your guess to play again');
      setNumberOfGuesses(0);
      setGuess('');
      setRandNum(generateRandNum());
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
      <p className="text-2xl mb-10">
        Number of guesses: {numberOfGuesses}
      </p>
      <GuessForm
        guess={guess}
        setGuess={setGuess}
        onGuess={handleGuess}
      />
      <Message message={message} />
    </>
  );
}
