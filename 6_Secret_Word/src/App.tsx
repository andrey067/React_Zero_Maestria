//CSS
import "./App.css";

//React
import { Stage } from "./models/Stage";
import { useCallback, useEffect, useState } from "react";

// Data
import { wordsList } from "./data/words";

// Components
import StartScree from "./components/StartScree";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages: Stage[] = [
  { id: 0, name: "start" },
  { id: 1, name: "game" },
  { id: 2, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState(Array<string>());
  const [guessedLetter, setGuessedLetter] = useState(Array<string>());
  const [wrongLetter, setWrongLetter] = useState(Array<string>());
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback((): {
    word: string;
    category: string;
  } => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    //pick a ramdom word

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  }, [words]);

  const clearLetterStates = () => {
    setGuessedLetter(Array<string>());
    setWrongLetter(Array<string>());
  };

  //starts the secret word game
  const startGame = useCallback(() => {
    // clear all lettes
    clearLetterStates();

    //pick word and pick category
    let { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letra) => letra.toLocaleLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
    console.log("category", category);
    console.log("wordLetters", wordLetters);
    console.log("gameStage", gameStage);
  }, [pickWordAndCategory]);

  //process the letter input
  const verifyLetter = (letter: string) => {
    console.log("letter", letter);
    const normalizedLetter = letter.toLocaleLowerCase();

    //check if letter has already been utilized
    if (
      guessedLetter.includes(normalizedLetter) ||
      wrongLetter.includes(normalizedLetter)
    )
      return;

    //push guessed leter or romove a guess
    if (letter.includes(normalizedLetter))
      setGuessedLetter((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    else {
      setWrongLetter((actualWrongLetter) => [
        ...actualWrongLetter,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
    console.log(`guessedLetter`, guessedLetter);
    console.log(`wrongLetter`, wrongLetter);
  };

  //check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //check win condition
  useEffect(() => {
    //check duble letter
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetter.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100));

      //restart new game
      startGame();
    }
  }, [guessedLetter, letters, startGame]);

  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScree startGame={startGame} />}
        {gameStage === "game" && (
          <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetter={guessedLetter}
            wrongLetter={wrongLetter}
            score={score}
          />
        )}
        {gameStage === "end" && <GameOver retry={retry} score={score} />}
      </div>
    </>
  );
}

export default App;
