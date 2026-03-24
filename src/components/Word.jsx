import { nanoid } from "nanoid"
import { clsx } from "clsx"

export default function Word({ word, guessedLetters, lastGuessedLetter, numGuessesLeft, isGameLost }) {

    return (
        <>
            <section className="word">
                {word.map(letter =>
                    <span key={nanoid()} className={clsx("letter",
                        {
                            "not-guessed": !guessedLetters.includes(letter) && isGameLost,
                        }
                    )}>{
                        isGameLost || guessedLetters.includes(letter) ? letter.toUpperCase() : ""
                    }
                    </span>
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
                <p>Current word: {word.map(letter =>
                    (guessedLetters.includes(letter)) ? letter : "blank.").join(" ")}</p>

            </section>
        </>
    )
}