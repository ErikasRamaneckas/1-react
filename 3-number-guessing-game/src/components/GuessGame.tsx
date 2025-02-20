import { useState } from 'react';
import GuessForm from './GuessForm.tsx';
import Message from './Message.tsx';
import { MIN, MAX } from '../consts.ts';

function generateRandNum(): number {
  return Math.floor(Math.random() * MAX) + MIN;
}

export default function GuessGame() {
  const [randNum, setRandNum] = useState(generateRandNum());
  const [guess, setGuess] = useState('');
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [message, setMessage] = useState('');
  console.log(randNum);
  function handleGuess(e: React.FormEvent) {
    e.preventDefault();
    setGuess('');
    setNumberOfGuesses(numberOfGuesses + 1);
    if (Number(guess) === randNum) {
      setMessage(
        `You won in ${
          numberOfGuesses + 1
        } guesses, enter your guess to play again`
      );
      setNumberOfGuesses(0);
      setRandNum(generateRandNum());
      return;
    }

    if (Number(guess) < randNum) {
      setMessage('too low!');
    } else {
      setMessage('too high!');
    }
  }

  return (
    <>
      <p className="text-center text-2xl mb-10">
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
