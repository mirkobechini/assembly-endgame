import clsx from "clsx"
import { getFarewellText } from "../data/utils"


export default function Status({ isGameOver, isGameWon, isGameLost, isLastGuessWrong, languageLost }) {

    const gameStatusClasses = clsx(
        "status-section",
        {
            "won-status": isGameWon,
            "lost-status": isGameLost,
            "farewell-status": !isGameOver && isLastGuessWrong
        }
    )

    function renderGameStatus(){
        if (!isGameOver && isLastGuessWrong)
             return <p>{getFarewellText(languageLost)}</p>;
        if(isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }
        if(isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        return null;
    }

    return (
        <section className={gameStatusClasses}>
            {renderGameStatus()}
        </section>
    )
}