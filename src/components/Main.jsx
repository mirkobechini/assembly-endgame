import { useState } from "react"
import LanguageBox from "./LanguageBox"
import Word from "./Word"
import Keyboard from "./Keyboard"


export default function Main() {


    const [word, setWord] = useState("react".split(""))

    const letters = "abcdefghijklmnopqrstuvwxyz".split("")

    const [guessedLetters, setGuessedLetters] = useState([])

    function addGuessedLetters(letter) {
        setGuessedLetters(prevGuessed => {
            const guessedSet = new Set(prevGuessed)
            guessedSet.add(letter)
            return Array.from(guessedSet)
        })
    }

    return (
        <main>
            <LanguageBox />
            <Word word={word} />
            <Keyboard letters={letters} addGuessedLetters={addGuessedLetters} guessedLetters={guessedLetters} word={word} />
            <button className="newGame" aria-label="Start new game">New Game</button>
        </main>
    )
}