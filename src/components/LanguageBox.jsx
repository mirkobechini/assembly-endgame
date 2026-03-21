import {languages} from "../data/languages"

export default function LanguageBox(){
    return(
        <div className="languageBox">
            {
                    languages.map(lang => (
                        <span className="badge" 
                        style={{backgroundColor: lang.backgroundColor, color: lang.color}}>{lang.name}</span>
                    ))
                }
        </div>
    )
}