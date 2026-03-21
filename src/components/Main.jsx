import { useState } from "react"
import LanguageBox from "./LanguageBox"
import Word from "./Word"


export default function Main() {


    const [word, setWord] = useState("react".split(""))

    return (
        <main>
            <LanguageBox />
            <Word word={word} />
        </main>
    )
}