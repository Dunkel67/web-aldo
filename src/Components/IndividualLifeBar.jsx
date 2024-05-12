import React, { useState, useEffect } from 'react';

export default function IndividualLifeBar () {

    const [barra] = useState(['Asset 13 Numero 0.png', 'Asset 13 Numero 1.png', 'Asset 13 Numero 2.png', 'Asset 13 Numero 3.png', 'Asset 13 Numero 4.png', 'Asset 13 Numero 5.png', 'Asset 13 Numero 6.png', 'Asset 13 Numero 7.png', 'Asset 13 Numero 8.png', 'Asset 13 Numero 9.png']);
    
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    // Score 1 -------------------------------------------------------

    const [doubleClick1, setDoubleClick1] = useState(true);
    const [clickBlocker1, setClickBlocker1] = useState(false);
    
    const handleDoubleClick1 = () => {
        handleClickBlocker1();
        setDoubleClick1(!doubleClick1);
    };

    const handleClickBlocker1 = () => {
        setClickBlocker1(!clickBlocker1);
    };

    const handleEnter1 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker1();
            setDoubleClick1(!doubleClick1);
        }
    };

    // Score 2 -------------------------------------------------------

    const [doubleClick2, setDoubleClick2] = useState(true);
    const [clickBlocker2, setClickBlocker2] = useState(false);
    
    const handleDoubleClick2 = () => {
        handleClickBlocker2();
        setDoubleClick2(!doubleClick2);
    };

    const handleClickBlocker2 = () => {
        setClickBlocker2(!clickBlocker2);
    };

    const handleEnter2 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker2();
            setDoubleClick2(!doubleClick2);
        }
    };

    const increaseScore = (setter, score) => {
        if (score < 9) {
            setter(score + 1);
        }
    };

    const decreaseScore = (setter, score) => {
        if (score > 0) {
            setter(score - 1);
        }
    };
    
    return (
                    
                    <div
                        style={{
                            position: 'absolute',
                            width: '86px',
                            height: '32px',
                            display: 'flex',
                        }}
                    >
                        <img
                            src={require('../Resources/Nº 13 Barras/Asset 13 Barra de vida aliada (izquierda).png')}
                            alt={`Barra de vida aliada`}
                            style={{
                                position: 'absolute',
                                width: '86px',
                                height: '32px',
                            }}
                        >
                        </img>
                        
                        <div
                            style={{
                                width: '33px',
                                height: '27px',
                                marginLeft: '6px',
                                marginTop: '3px',
                                cursor: 'pointer',
                            }}
                            onClick={() => 
                                {if (!clickBlocker1) {
                                    increaseScore(setScore1, score1)
                                }}
                            }
                            onDoubleClick={() =>
                                {if (!clickBlocker1) {
                                    handleDoubleClick1()
                                }}
                            }
                            onContextMenu={(e) => {
                                e.preventDefault();
                                decreaseScore(setScore1, score1);
                            }}
                        >
                            
                            <div
                                style={{
                                    display: 'flex',
                                    height: '100%'
                                }}
                            >
                                {
                                    doubleClick1 ? (
                                        score1.toString().split('').map((number, index) => (
                                            <img
                                                key={index}
                                                src={require(`../Resources/Nº 13 Barras/${barra[number]}`)}
                                                alt={`Numero ${number}`}
                                                style={{
                                                    width: '9px',
                                                    height: '21px',
                                                    zIndex: '5',
                                                    margin: 'auto',
                                                    display: 'block'
                                                }}
                                            />
                                        ))
                                    ) : (
                                        <input
                                        type="number1"
                                        value={score1}
                                        onChange={(e) => setScore1(e.target.value)}
                                        onKeyDown={(e) => handleEnter1(e)}
                                        style={{
                                            display: 'block',
                                            width: '26px',
                                            zIndex: '5',
                                        }}  
                                        />
                                    )
                                }
                            </div>

                        </div>

                        <div
                            style={{
                                width: '33px',
                                height: '27px',
                                marginTop: '3px',
                                marginLeft: '9px',
                                cursor: 'pointer',
                            }}
                            onClick={() => 
                                {if (!clickBlocker2) {
                                    increaseScore(setScore2, score2)
                                }}
                            }
                            onDoubleClick={() =>
                                {if (!clickBlocker2) {
                                    handleDoubleClick2()
                                }}
                            }
                            onContextMenu={(e) => {
                                e.preventDefault();
                                decreaseScore(setScore2, score2);
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    height: '100%'
                                }}
                            >
                                {
                                    doubleClick2 ? (
                                        score2.toString().split('').map((number, index) => (
                                            <img
                                                key={index}
                                                src={require(`../Resources/Nº 13 Barras/${barra[number]}`)}
                                                alt={`Numero ${number}`}
                                                style={{
                                                    width: '9px',
                                                    height: '21px',
                                                    zIndex: '5',
                                                    margin: 'auto',
                                                    display: 'block'
                                                }}
                                            />
                                        ))
                                    ) : (
                                        <input
                                        type="number2"
                                        value={score2}
                                        onChange={(e) => setScore2(e.target.value)}
                                        onKeyDown={(e) => handleEnter2(e)}
                                        style={{
                                            display: 'block',
                                            width: '26px',
                                            zIndex: '5',
                                        }}  
                                        />
                                    )
                                }
                            </div>
                        </div>

                    </div>
    );
}