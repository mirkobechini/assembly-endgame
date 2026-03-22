import clsx from "clsx"

export default function Status({ isGameOver, isGameWon, isGameLost }) {

    const gameStatusClasses = clsx(
        "status-section",
        {
            "won": isGameWon,
            "lost": isGameLost
        }
    )

    return (
        <section className={gameStatusClasses}>
            {isGameOver &&
                <>
                    {isGameWon &&
                        <>
                            <h2>You win!</h2>
                            <p>Well done! 🎉</p>
                        </>
                    }
                    {isGameLost &&
                        <>
                            <h2>Game over!</h2>
                            <p>You lose! Better start learning Assembly 😭</p>
                        </>
                    }

                </>
            }
        </section>
    )
}