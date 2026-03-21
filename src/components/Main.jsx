import { useState } from "react"
import LanguageBox from "./LanguageBox"
import Word from "./Word"
import Keyboard from "./Keyboard"


export default function Main() {


    const [word, setWord] = useState("react".split(""))

    const letters = "abcdefghijklmnopqrstuvwxyz".split("")

    return (
        <main>
            <LanguageBox />
            <Word word={word} />
            <Keyboard letters= {letters}/>
            <button className="newGame" aria-label="Start new game">New Game</button>
        </main>
    )
}