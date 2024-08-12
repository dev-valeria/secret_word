//CSS
import './App.css';

//React 
import { useCallback, useEffect, useState } from 'react';

//Components
import StartScreen from './components/StartScreen';

//data
import { wordsList } from './data/words';
import GameOver from './components/GameOver';
import Game from './components/Game'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickeword, setPickeWord] = useState("");
  const [pickedCategory, setPikedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickedWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words) 
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word 
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return { word, category }

  }

//starts the secret word game
  const startGame = () => {
    //pick word and pick category
    const { word, category } = pickedWordAndCategory()

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());
    setPickeWord(word);
    setPikedCategory(category);
    setLetters(letters);
    console.log(wordLetters)
    setGameStage(stages[1].name);
  };

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
