import { useState } from "react"
import Status from "./Status"
import LanguageBox from "./LanguageBox"
import Word from "./Word"
import Keyboard from "./Keyboard"
import { languages } from "../data/languages"


export default function Main() {

    //State variables
    const [word, setWord] = useState("react".split(""))
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


    function addGuessedLetters(letter) {
        setGuessedLetters(prevGuessed => {
            const guessedSet = new Set(prevGuessed)
            guessedSet.add(letter)
            return Array.from(guessedSet)
        })
    }

    return (
        <main>
            <Status isGameWon={isGameWon} isGameLost={isGameLost} isGameOver={isGameOver}
             isLastGuessWrong={isLastGuessWrong} languageLost={languages[wrongGuessCount-1]?.name} />
            <LanguageBox wrongGuessCount={wrongGuessCount} languages={languages} />
            <Word word={word} guessedLetters={guessedLetters} lastGuessedLetter={lastGuessedLetter} numGuessesLeft={numGuessesLeft} />
            <Keyboard letters={letters} addGuessedLetters={addGuessedLetters} guessedLetters={guessedLetters} word={word} isGameOver={isGameOver} />
            {isGameOver &&
                <button className="newGame" aria-label="Start new game">New Game</button>
            }
        </main>
    )
}