import Jatekter from '../komponensek/tictactoe/Jatekter';
import { useState } from 'react';
import Modell from '../model/tictactoe/Model.js';
const tmodel = new Modell();

export default function TictacToeApp() {

    const [list, setList] = useState(tmodel.getList()); //Ez volt["X", "O", "", "", "", "", "", "", "",]

    function katt(index) {
        //egyenlőre írja be a X et
        //és írja be a state  et
        /**Miért fontosak, ha az értke megváltozik, akkor fog az oldalon csak az a dolog változik meg */
        console.log(index);
        tmodel.setAllapot(index);
        setList(tmodel.getList()) // [...lista] tényleges új másolat
    }

    return (
        <div className="tictactoe">
            <header>
                <h1>Tic Tac Toe játék</h1>
            </header>
            <article>
                <Jatekter lista={list} katt={katt} />
            </article>
        </div>
    )
}