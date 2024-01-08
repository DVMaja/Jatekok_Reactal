import LampJatekter from "../komponensek/lighton/LJatekter"
import LModel from "../model/lighton/LModell"

export default function LightOnApp() {
    return (
        <div className="lighton">
        <header>
                <h1>Light On játék</h1>
            </header>
            
            <article>
                <LampJatekter/>
            </article>
        </div>
    )
}