import { nanoid } from "nanoid"

export default function Word({ word, guessedLetters, lastGuessedLetter, numGuessesLeft }) {
    return (
        <>
            <section className="word">
                {word.map(letter =>
                    <span key={nanoid()} className="letter">{(guessedLetters.includes(letter)) ? letter.toUpperCase() : ""}</span>
                )}
            </section>
            <section
                className="sr-only"
                aria-live="polite"
                role="status"
            >
                <p>
                    {word.includes(lastGuessedLetter) ? 
                    `You guessed correctly: ${lastGuessedLetter}` 
                    : `You guessed incorrectly: ${lastGuessedLetter}`}
                    You have {numGuessesLeft} attempts left
                </p>
                <p>Current word: {word.split("").map(letter => 
                    (guessedLetters.includes(letter)) ? letter : "blank.").join(" ")}</p>

            </section>
        </>
    )
}