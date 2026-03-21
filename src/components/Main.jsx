import { useState } from "react"
import LanguageBox from "./LanguageBox"
import Word from "./Word"
import Keyboard from "./Keyboard"


export default function Main() {

    //State variables
    const [word, setWord] = useState("react".split(""))
    const [guessedLetters, setGuessedLetters] = useState([])

    //Derived variables
    const wrongGuessCount = guessedLetters.filter(letter => !word.includes(letter)).length

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
            <LanguageBox wrongGuessCount = {wrongGuessCount}/>
            <Word word={word} guessedLetters={guessedLetters} />
            <Keyboard letters={letters} addGuessedLetters={addGuessedLetters} guessedLetters={guessedLetters} word={word} />
            <button className="newGame" aria-label="Start new game">New Game</button>
        </main>
    )
}