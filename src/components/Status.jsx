export default function Status({ isGameOver, isGameWon, isGameLost }) {
    return (
        <section className="status-section" 
        style={isGameOver &&
            isGameWon ? { backgroundColor: "#10A95B" } : isGameLost ? { backgroundColor: "#BA2A2A" } : {}
        }>
            { isGameOver &&
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