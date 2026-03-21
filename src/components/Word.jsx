import { nanoid } from "nanoid"

export default function Word({word}) {
    return (
        <section className="word">
            { word.map( letter =>
                <span key={nanoid()} className="letter">{letter}</span>
            )}
        </section>
    )
}