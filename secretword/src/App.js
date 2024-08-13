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
];

const guessesQty = 3;
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickeword, setPickeWord] = useState("");
  const [pickedCategory, setPikedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickedWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word 
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return { word, category }

  },[words]);

//starts the secret word game
  const startGame = useCallback(() => {
    //clean all letters
    clearLettersStates();
    //pick word and pick category
    const { word, category } = pickedWordAndCategory()

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());
    setPickeWord(word);
    setPikedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickedWordAndCategory]);

  //process the letter input
  const verifyLetter = (letter) => {

    //check if letter has already been utilized
    const normalizedLetter = letter.toLowerCase();
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
    return;
  }
    //push guessed letter or remove  a guess
     if (letters.includes(normalizedLetter)) {
    setGuessedLetters((prevGuessedLetters) => [
      ...prevGuessedLetters,
      normalizedLetter
    ]);
  } else {
    setWrongLetters((prevWrongLetters) => [
      ...prevWrongLetters,
      normalizedLetter
    ]);
       setGuesses((actualGuesses) => actualGuesses - 1);
  }
  };

  const clearLettersStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  };
  //check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      clearLettersStates();
      setGameStage(stages[2].name);
    }

  }, [guesses]);

  //check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    //wind condition
    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => actualScore += 100)
      //restart game  whith new word
      startGame();
    }
}, [guessedLetters, letters, startGame])
    
  //restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}
        pickedWord={pickeword}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      

      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
  }
  

export default App;
