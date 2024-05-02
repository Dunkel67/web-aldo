import React, { useState } from 'react';

export default function BackgroundChanger({ isClosedBlocker, backgroundNumber, setBackgroundNumber}) {

    const [background] = useState(['Asset 15 Nº1 Fondo espacio.png', 'Asset 15 Nº2 Fondo tierra.png', 'Asset 15 Nº3 Fondo Bossfight.png']);

    const changeBackground = () => {
        if (!isClosedBlocker) {
            if (backgroundNumber < 2) {
                setBackgroundNumber(backgroundNumber + 1);
            } else {
                setBackgroundNumber(0);
            }
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${require('../Resources/Nº 5 Cambiador de escenarios/' + background[backgroundNumber])})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '90px',
                height: '60px'
            }}
            onClick={changeBackground}
        >
        </div>
    );

}