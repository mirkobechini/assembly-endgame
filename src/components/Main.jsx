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
    const wrongGuessCount = guessedLetters.filter(letter => !word.includes(letter)).length
    const isGameWon = (word.every(letter => guessedLetters.includes(letter)))
    const isGameLost = (wrongGuessCount >= languages.length - 1)
    const isGameOver = isGameWon || isGameLost

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
            <Status isGameWon={isGameWon} isGameLost={isGameLost} isGameOver={isGameOver} />
            <LanguageBox wrongGuessCount={wrongGuessCount} languages={languages} />
            <Word word={word} guessedLetters={guessedLetters} />
            <Keyboard letters={letters} addGuessedLetters={addGuessedLetters} guessedLetters={guessedLetters} word={word} />
            {isGameOver &&
                <button className="newGame" aria-label="Start new game">New Game</button>
            }
        </main>
    )
}