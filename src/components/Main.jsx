import { useState } from "react"
import Status from "./Status"
import LanguageBox from "./LanguageBox"
import Word from "./Word"
import Keyboard from "./Keyboard"
import { languages } from "../data/languages"
import { getRandomWord } from "../data/utils"
import Confetti from "react-confetti"

export default function Main() {

    //State variables
    const [word, setWord] = useState(() => getRandomWord().split(""))
    const [guessedLetters, setGuessedLetters] = useState([])

    //Derived variables
    const numGuessesLeft = languages.length - 1
    const wrongGuessCount = guessedLetters.filter(letter => !word.includes(letter)).length
    const isGameWon = (word.every(letter => guessedLetters.includes(letter)))
    const isGameLost = (wrongGuessCount >= numGuessesLeft)
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessWrong = lastGuessedLetter && !word.includes(lastGuessedLetter)

    //Static variables
    const letters = "abcdefghijklmnopqrstuvwxyz".split("")


    function handleNewGame() {
        setGuessedLetters([])
        setWord(getRandomWord().split(""))
    }

    function addGuessedLetters(letter) {
        setGuessedLetters(prevGuessed => {
            const guessedSet = new Set(prevGuessed)
            guessedSet.add(letter)
            return Array.from(guessedSet)
        })
    }

    return (
        <main>
            {isGameWon && <Confetti/>}
            <Status isGameWon={isGameWon} isGameLost={isGameLost} isGameOver={isGameOver}
                isLastGuessWrong={isLastGuessWrong} languageLost={languages[wrongGuessCount - 1]?.name} />
            <LanguageBox wrongGuessCount={wrongGuessCount} languages={languages} />
            <Word word={word} guessedLetters={guessedLetters} lastGuessedLetter={lastGuessedLetter} numGuessesLeft={numGuessesLeft} isGameLost={isGameLost} />
            <Keyboard letters={letters} addGuessedLetters={addGuessedLetters} guessedLetters={guessedLetters} word={word} isGameOver={isGameOver} />
            {isGameOver &&
                <button className="newGame" onClick={handleNewGame} aria-label="Start new game">New Game</button>
            }
        </main>
    )
}