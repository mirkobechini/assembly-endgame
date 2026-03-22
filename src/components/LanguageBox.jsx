

export default function LanguageBox({wrongGuessCount, languages}) {
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