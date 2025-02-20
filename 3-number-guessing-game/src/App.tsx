import './App.css';
import GuessGame from './components/GuessGame.tsx';

function App() {
  return (
    <main className="flex flex-col items-center justify-start">
      <h1 className="text-6xl text-center my-10">
        Number Guessing Game
      </h1>
      <GuessGame />
    </main>
  );
}

export default App;
