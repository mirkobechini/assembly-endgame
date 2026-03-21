import { nanoid } from "nanoid"

export default function Word({word, guessedLetters}) {
    return (
        <section className="word">
            { word.map( letter =>
                <span key={nanoid()} className="letter">{(guessedLetters.includes(letter))?letter.toUpperCase():""}</span>
            )}
        </section>
    )
}