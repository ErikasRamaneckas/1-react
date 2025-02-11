import GuessForm from './GuessForm.tsx';
import Message from './Message.tsx';

function generateRandNum() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function GuessGame() {
  generateRandNum();
  return (
    <>
      <h3>{generateRandNum()}</h3>
      <GuessForm />
      <Message />
    </>
  );
}
