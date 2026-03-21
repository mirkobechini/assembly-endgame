export default function Keyboard({ letters }) {

    return (
        <section className="keyboard">
            {
                letters.map(letter =>
                    <button className="keys" key={letter} aria-label={`This is letter ${letter}`}>{letter}</button>)
            }
        </section>
    )
}