import React, { useState } from 'react';

export default function TurnCounter () {
    
    const [score, setScore] = useState(1);
    
    const increaseScore = () => {
        if (score < 9) {
            setScore(score + 1);
        }
    };

    const decreaseScore = () => {
        if (score > 1) {
            setScore(score - 1);
        }
    };
    
    return (
        <div
            style={{
                backgroundImage: `url(${require('../Resources/Nº 6 Contador de turnos/Asset nº6 Contador de turnos ' + score + '.png')})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '120px',
                height: '120px'
            }}
            onClick={increaseScore}
            onContextMenu={(e) => {
                e.preventDefault();
                decreaseScore();
            }}
        >
        </div>
    );

}