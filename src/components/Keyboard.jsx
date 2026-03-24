import { clsx } from 'clsx';

export default function Keyboard({ letters, addGuessedLetters, guessedLetters, word }) {

    return (
        <section className="keyboard">
            {
                letters.map(letter => {
                    const isGuessed = guessedLetters.includes(letter);
                    const isInWord = word.includes(letter);
                    return (

                        <button onClick={() => addGuessedLetters(letter)}
                            className={clsx({
                                right: isGuessed && isInWord,
                                wrong: isGuessed && !isInWord,
                                keys: true
                            })}
                            key={letter} aria-label={`This is letter ${letter}`} disabled={isGameOver} 
                            aria-disabled={guessedLetters.includes(letter)}>{letter}</button>)
                })
            }
        </section>
    )
}