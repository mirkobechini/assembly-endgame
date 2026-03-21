import { languages } from "../data/languages"

export default function LanguageBox({wrongGuessCount}) {
    return (
        <div className="languageBox">
            {
                languages.map((lang, index) => (
                    <span key={lang.name} className={`badge ${(wrongGuessCount > index) ? "lost" : ""}`}
                        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}>{lang.name}</span>
                ))
            }
        </div>
    )
}