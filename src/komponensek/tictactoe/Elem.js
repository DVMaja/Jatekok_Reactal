import './Jatekter.css';

export default function Elem(props) {


    function katt() {
        props.katt(props.index);
    }

    return (
        <div className="elem" onClick={katt}>
            <p className="betu">{props.ertek}</p>
        </div>
    )

}