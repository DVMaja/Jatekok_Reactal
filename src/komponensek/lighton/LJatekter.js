import React from 'react';
import Lampa from "./Lampa";
import './LJatekter.css';

export default function LampJatekter() {
    const numberOfLampas = 8;

    return (
        <div className="lJatekter">
            <Lampa />
            {Array.from({ length: numberOfLampas }).map((_, index) => (
                <Lampa key={index} />
            ))}
        </div>
    );
}
