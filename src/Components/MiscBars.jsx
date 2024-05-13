import React, { useState } from 'react';

export default function MiscBars () {

    const [barra] = useState(['Asset 13 Numero 0.png', 'Asset 13 Numero 1.png', 'Asset 13 Numero 2.png', 'Asset 13 Numero 3.png', 'Asset 13 Numero 4.png', 'Asset 13 Numero 5.png', 'Asset 13 Numero 6.png', 'Asset 13 Numero 7.png', 'Asset 13 Numero 8.png', 'Asset 13 Numero 9.png']);
    
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [score3, setScore3] = useState(0);
    const [score4, setScore4] = useState(0);
    const [score5, setScore5] = useState(0);
    const [score6, setScore6] = useState(0);
    const [score7, setScore7] = useState(0);
    const [score8, setScore8] = useState(0);
    const [score9, setScore9] = useState(0);
    const [score10, setScore10] = useState(0);
    const [score11, setScore11] = useState(0);
    const [score12, setScore12] = useState(0);
    const [score13, setScore13] = useState(0);
    const [score14, setScore14] = useState(0);
    const [score15, setScore15] = useState(0);
    const [score16, setScore16] = useState(0);
    const [score17, setScore17] = useState(0);
    const [score18, setScore18] = useState(0);
    const [score19, setScore19] = useState(0);
    const [score20, setScore20] = useState(0);
    const [score21, setScore21] = useState(0);
    const [score22, setScore22] = useState(0);
    const [score23, setScore23] = useState(0);
    const [score24, setScore24] = useState(0);

    // AVISO: ESTO ES UNA PORQUERÍA QUE HE HECHO DE ESTA FORMA PORQUE TENGO LA CABEZA COMO UN FLAN Y LLEVO DEMASIADO RATO PARA LA LÓGICA DE ESTO, NO ES UNA BUENA SOLUCIÓN NI MUCHO MENOS, FUNCIONA Y POCA COSA MÁS

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

    // Score 3 -------------------------------------------------------

    const [doubleClick3, setDoubleClick3] = useState(true);
    const [clickBlocker3, setClickBlocker3] = useState(false);
    
    const handleDoubleClick3 = () => {
        handleClickBlocker3();
        setDoubleClick3(!doubleClick3);
    };

    const handleClickBlocker3 = () => {
        setClickBlocker3(!clickBlocker3);
    };

    const handleEnter3 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker3();
            setDoubleClick3(!doubleClick3);
        }
    };

    // Score 4 -------------------------------------------------------

    const [doubleClick4, setDoubleClick4] = useState(true);
    const [clickBlocker4, setClickBlocker4] = useState(false);
    
    const handleDoubleClick4 = () => {
        handleClickBlocker4();
        setDoubleClick4(!doubleClick4);
    };

    const handleClickBlocker4 = () => {
        setClickBlocker4(!clickBlocker4);
    };

    const handleEnter4 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker4();
            setDoubleClick4(!doubleClick4);
        }
    };

    // Score 5 -------------------------------------------------------

    const [doubleClick5, setDoubleClick5] = useState(true);
    const [clickBlocker5, setClickBlocker5] = useState(false);

    const handleDoubleClick5 = () => {
        handleClickBlocker5();
        setDoubleClick5(!doubleClick5);
    };

    const handleClickBlocker5 = () => {
        setClickBlocker5(!clickBlocker5);
    };

    const handleEnter5 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker5();
            setDoubleClick5(!doubleClick5);
        }
    };

    // Score 6 -------------------------------------------------------

    const [doubleClick6, setDoubleClick6] = useState(true);
    const [clickBlocker6, setClickBlocker6] = useState(false);

    const handleDoubleClick6 = () => {
        handleClickBlocker6();
        setDoubleClick6(!doubleClick6);
    };

    const handleClickBlocker6 = () => {
        setClickBlocker6(!clickBlocker6);
    };

    const handleEnter6 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker6();
            setDoubleClick6(!doubleClick6);
        }
    };

    // Score 7 --------------------------------------------------------

    const [doubleClick7, setDoubleClick7] = useState(true);
    const [clickBlocker7, setClickBlocker7] = useState(false);

    const handleDoubleClick7 = () => {
        handleClickBlocker7();
        setDoubleClick7(!doubleClick7);
    };

    const handleClickBlocker7 = () => {
        setClickBlocker7(!clickBlocker7);
    };

    const handleEnter7 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker7();
            setDoubleClick7(!doubleClick7);
        }
    };

    // Score 8 --------------------------------------------------------

    const [doubleClick8, setDoubleClick8] = useState(true);
    const [clickBlocker8, setClickBlocker8] = useState(false);

    const handleDoubleClick8 = () => {
        handleClickBlocker8();
        setDoubleClick8(!doubleClick8);
    };

    const handleClickBlocker8 = () => {
        setClickBlocker8(!clickBlocker8);
    };

    const handleEnter8 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker8();
            setDoubleClick8(!doubleClick8);
        }
    };

    // Score 9 --------------------------------------------------------

    const [doubleClick9, setDoubleClick9] = useState(true);
    const [clickBlocker9, setClickBlocker9] = useState(false);

    const handleDoubleClick9 = () => {
        handleClickBlocker9();
        setDoubleClick9(!doubleClick9);
    };

    const handleClickBlocker9 = () => {
        setClickBlocker9(!clickBlocker9);
    };

    const handleEnter9 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker9();
            setDoubleClick9(!doubleClick9);
        }
    };

    // Score 10 -------------------------------------------------------

    const [doubleClick10, setDoubleClick10] = useState(true);
    const [clickBlocker10, setClickBlocker10] = useState(false);

    const handleDoubleClick10 = () => {
        handleClickBlocker10();
        setDoubleClick10(!doubleClick10);
    };

    const handleClickBlocker10 = () => {
        setClickBlocker10(!clickBlocker10);
    };

    const handleEnter10 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker10();
            setDoubleClick10(!doubleClick10);
        }
    };

    // Score 11 -------------------------------------------------------

    const [doubleClick11, setDoubleClick11] = useState(true);
    const [clickBlocker11, setClickBlocker11] = useState(false);

    const handleDoubleClick11 = () => {
        handleClickBlocker11();
        setDoubleClick11(!doubleClick11);
    };

    const handleClickBlocker11 = () => {
        setClickBlocker11(!clickBlocker11);
    };

    const handleEnter11 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker11();
            setDoubleClick11(!doubleClick11);
        }
    };

    // Score 12 -------------------------------------------------------

    const [doubleClick12, setDoubleClick12] = useState(true);
    const [clickBlocker12, setClickBlocker12] = useState(false);

    const handleDoubleClick12 = () => {
        handleClickBlocker12();
        setDoubleClick12(!doubleClick12);
    };

    const handleClickBlocker12 = () => {
        setClickBlocker12(!clickBlocker12);
    };

    const handleEnter12 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker12();
            setDoubleClick12(!doubleClick12);
        }
    };
    
    // Score 13 -------------------------------------------------------

    const [doubleClick13, setDoubleClick13] = useState(true);
    const [clickBlocker13, setClickBlocker13] = useState(false);

    const handleDoubleClick13 = () => {
        handleClickBlocker13();
        setDoubleClick13(!doubleClick13);
    };

    const handleClickBlocker13 = () => {
        setClickBlocker13(!clickBlocker13);
    };

    const handleEnter13 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker13();
            setDoubleClick13(!doubleClick13);
        }
    };

    // Score 14 -------------------------------------------------------

    const [doubleClick14, setDoubleClick14] = useState(true);
    const [clickBlocker14, setClickBlocker14] = useState(false);

    const handleDoubleClick14 = () => {
        handleClickBlocker14();
        setDoubleClick14(!doubleClick14);
    };

    const handleClickBlocker14 = () => {
        setClickBlocker14(!clickBlocker14);
    };

    const handleEnter14 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker14();
            setDoubleClick14(!doubleClick14);
        }
    };

    // Score 15 -------------------------------------------------------

    const [doubleClick15, setDoubleClick15] = useState(true);
    const [clickBlocker15, setClickBlocker15] = useState(false);

    const handleDoubleClick15 = () => {
        handleClickBlocker15();
        setDoubleClick15(!doubleClick15);
    };

    const handleClickBlocker15 = () => {
        setClickBlocker15(!clickBlocker15);
    };

    const handleEnter15 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker15();
            setDoubleClick15(!doubleClick15);
        }
    };

    // Score 16 -------------------------------------------------------

    const [doubleClick16, setDoubleClick16] = useState(true);
    const [clickBlocker16, setClickBlocker16] = useState(false);

    const handleDoubleClick16 = () => {
        handleClickBlocker16();
        setDoubleClick16(!doubleClick16);
    };

    const handleClickBlocker16 = () => {
        setClickBlocker16(!clickBlocker16);
    };

    const handleEnter16 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker16();
            setDoubleClick16(!doubleClick16);
        }
    };

    // Score 17 -------------------------------------------------------

    const [doubleClick17, setDoubleClick17] = useState(true);
    const [clickBlocker17, setClickBlocker17] = useState(false);

    const handleDoubleClick17 = () => {
        handleClickBlocker17();
        setDoubleClick17(!doubleClick17);
    };

    const handleClickBlocker17 = () => {
        setClickBlocker17(!clickBlocker17);
    };

    const handleEnter17 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker17();
            setDoubleClick17(!doubleClick17);
        }
    };

    // Score 18 -------------------------------------------------------
    
    const [doubleClick18, setDoubleClick18] = useState(true);
    const [clickBlocker18, setClickBlocker18] = useState(false);

    const handleDoubleClick18 = () => {
        handleClickBlocker18();
        setDoubleClick18(!doubleClick18);
    };

    const handleClickBlocker18 = () => {
        setClickBlocker18(!clickBlocker18);
    };

    const handleEnter18 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker18();
            setDoubleClick18(!doubleClick18);
        }
    };

    // Score 19 -------------------------------------------------------

    const [doubleClick19, setDoubleClick19] = useState(true);
    const [clickBlocker19, setClickBlocker19] = useState(false);
    
    const handleDoubleClick19 = () => {
        handleClickBlocker19();
        setDoubleClick19(!doubleClick19);
    };

    const handleClickBlocker19 = () => {
        setClickBlocker19(!clickBlocker19);
    };

    const handleEnter19 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker19();
            setDoubleClick19(!doubleClick19);
        }
    };

    // Score 20 -------------------------------------------------------

    const [doubleClick20, setDoubleClick20] = useState(true);
    const [clickBlocker20, setClickBlocker20] = useState(false);

    const handleDoubleClick20 = () => {
        handleClickBlocker20();
        setDoubleClick20(!doubleClick20);
    };

    const handleClickBlocker20 = () => {
        setClickBlocker20(!clickBlocker20);
    };

    const handleEnter20 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker20();
            setDoubleClick20(!doubleClick20);
        }
    };

    // Score 21 -------------------------------------------------------

    const [doubleClick21, setDoubleClick21] = useState(true);
    const [clickBlocker21, setClickBlocker21] = useState(false);
    
    const handleDoubleClick21 = () => {
        handleClickBlocker21();
        setDoubleClick21(!doubleClick21);
    };

    const handleClickBlocker21 = () => {
        setClickBlocker21(!clickBlocker21);
    };

    const handleEnter21 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker21();
            setDoubleClick21(!doubleClick21);
        }
    };

    // Score 22 -------------------------------------------------------

    const [doubleClick22, setDoubleClick22] = useState(true);
    const [clickBlocker22, setClickBlocker22] = useState(false);

    const handleDoubleClick22 = () => {
        handleClickBlocker22();
        setDoubleClick22(!doubleClick22);
    };

    const handleClickBlocker22 = () => {
        setClickBlocker22(!clickBlocker22);
    };

    const handleEnter22 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker22();
            setDoubleClick22(!doubleClick22);
        }
    };

    // Score 23 -------------------------------------------------------

    const [doubleClick23, setDoubleClick23] = useState(true);
    const [clickBlocker23, setClickBlocker23] = useState(false);

    const handleDoubleClick23 = () => {
        handleClickBlocker23();
        setDoubleClick23(!doubleClick23);
    };

    const handleClickBlocker23 = () => {
        setClickBlocker23(!clickBlocker23);
    };

    const handleEnter23 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker23();
            setDoubleClick23(!doubleClick23);
        }
    };

    // Score 24 -------------------------------------------------------

    const [doubleClick24, setDoubleClick24] = useState(true);
    const [clickBlocker24, setClickBlocker24] = useState(false);

    const handleDoubleClick24 = () => {
        handleClickBlocker24();
        setDoubleClick24(!doubleClick24);
    };

    const handleClickBlocker24 = () => {
        setClickBlocker24(!clickBlocker24);
    };

    const handleEnter24 = (e) => {
        if (e.key === 'Enter') {
            handleClickBlocker24();
            setDoubleClick24(!doubleClick24);
        }
    };

    // AQUÍ TERMINA LA PORQUERÍA

    // Increase and Decrease Score ------------------------------------
    
    const increaseScore = (setter, score) => {
        let absolutScore = Number(score);
        if (absolutScore < 999) {
            setter(absolutScore + 1);
        }
    };

    const decreaseScore = (setter, score) => {
        let absolutScore = Number(score);
        if (absolutScore > 0) {
            setter(absolutScore - 1);
        }
    };
    
    return (
        <div
            style={{
                width: '1767px',
                height: '39px',
                display: 'flex'
            }}
        >

            <div className='ally-bars-1'
                style={{
                    width: '180px',
                    height: '39px',
                    display: 'flex'
                }}
            >

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de vida aliada (izquierda).png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker1) {
                                increaseScore(setScore1, score1)
                            } else if (e.deltaY === 100 && !clickBlocker1){
                                decreaseScore(setScore1, score1)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker1) {
                                handleDoubleClick1()
                            }}
                        }
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
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker2) {
                                increaseScore(setScore2, score2)
                            } else if (e.deltaY === 100 && !clickBlocker2){
                                decreaseScore(setScore2, score2)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker2) {
                                handleDoubleClick2()
                            }}
                        }
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
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de maná aliada (Derecha).png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        marginLeft: '6px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer'
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker3) {
                                increaseScore(setScore3, score3)
                            } else if (e.deltaY === 100 && !clickBlocker3){
                                decreaseScore(setScore3, score3)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker3) {
                                handleDoubleClick3()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick3 ? (
                                    score3.toString().split('').map((number, index) => (
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
                                    type="number3"
                                    value={score3}
                                    onChange={(e) => setScore3(e.target.value)}
                                    onKeyDown={(e) => handleEnter3(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer'
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker4) {
                                increaseScore(setScore4, score4)
                            } else if (e.deltaY === 100 && !clickBlocker4){
                                decreaseScore(setScore4, score4)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker4) {
                                handleDoubleClick4()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick4 ? (
                                    score4.toString().split('').map((number, index) => (
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
                                    type="number4"
                                    value={score4}
                                    onChange={(e) => setScore4(e.target.value)}
                                    onKeyDown={(e) => handleEnter4(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>

            <div className='ally-bars-2'
                style={{
                    width: '180px',
                    height: '39px',
                    display: 'flex',
                    marginLeft: '54px'
                }}
            >

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de vida aliada (izquierda).png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker5) {
                                increaseScore(setScore5, score5)
                            } else if (e.deltaY === 100 && !clickBlocker5){
                                decreaseScore(setScore5, score5)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker5) {
                                handleDoubleClick5()
                            }}
                        }
                    >
                        
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick5 ? (
                                    score5.toString().split('').map((number, index) => (
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
                                    type="number5"
                                    value={score5}
                                    onChange={(e) => setScore5(e.target.value)}
                                    onKeyDown={(e) => handleEnter5(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker6) {
                                increaseScore(setScore6, score6)
                            } else if (e.deltaY === 100 && !clickBlocker6){
                                decreaseScore(setScore6, score6)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker6) {
                                handleDoubleClick6()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick6 ? (
                                    score6.toString().split('').map((number, index) => (
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
                                    type="number6"
                                    value={score6}
                                    onChange={(e) => setScore6(e.target.value)}
                                    onKeyDown={(e) => handleEnter6(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de maná aliada (Derecha).png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        marginLeft: '6px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer'
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker7) {
                                increaseScore(setScore7, score7)
                            } else if (e.deltaY === 100 && !clickBlocker7){
                                decreaseScore(setScore7, score7)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker7) {
                                handleDoubleClick7()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick7 ? (
                                    score7.toString().split('').map((number, index) => (
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
                                    type="number7"
                                    value={score7}
                                    onChange={(e) => setScore7(e.target.value)}
                                    onKeyDown={(e) => handleEnter7(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer'
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker8) {
                                increaseScore(setScore8, score8)
                            } else if (e.deltaY === 100 && !clickBlocker8){
                                decreaseScore(setScore8, score8)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker8) {
                                handleDoubleClick8()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick8 ? (
                                    score8.toString().split('').map((number, index) => (
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
                                    type="number8"
                                    value={score8}
                                    onChange={(e) => setScore8(e.target.value)}
                                    onKeyDown={(e) => handleEnter8(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>

            <div className='ally-bars-3'
                style={{
                    width: '180px',
                    height: '39px',
                    display: 'flex',
                    marginLeft: '54px'
                }}
            >

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de vida aliada (izquierda).png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker9) {
                                increaseScore(setScore9, score9)
                            } else if (e.deltaY === 100 && !clickBlocker9){
                                decreaseScore(setScore9, score9)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker9) {
                                handleDoubleClick9()
                            }}
                        }
                    >
                        
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick9 ? (
                                    score9.toString().split('').map((number, index) => (
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
                                    type="number9"
                                    value={score9}
                                    onChange={(e) => setScore9(e.target.value)}
                                    onKeyDown={(e) => handleEnter9(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker10) {
                                increaseScore(setScore10, score10)
                            } else if (e.deltaY === 100 && !clickBlocker10){
                                decreaseScore(setScore10, score10)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker10) {
                                handleDoubleClick10()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick10 ? (
                                    score10.toString().split('').map((number, index) => (
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
                                    type="number10"
                                    value={score10}
                                    onChange={(e) => setScore10(e.target.value)}
                                    onKeyDown={(e) => handleEnter10(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de maná aliada (Derecha).png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        marginLeft: '6px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer'
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker11) {
                                increaseScore(setScore11, score11)
                            } else if (e.deltaY === 100 && !clickBlocker11){
                                decreaseScore(setScore11, score11)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker11) {
                                handleDoubleClick11()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick11 ? (
                                    score11.toString().split('').map((number, index) => (
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
                                    type="number11"
                                    value={score11}
                                    onChange={(e) => setScore11(e.target.value)}
                                    onKeyDown={(e) => handleEnter11(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer'
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker12) {
                                increaseScore(setScore12, score12)
                            } else if (e.deltaY === 100 && !clickBlocker12){
                                decreaseScore(setScore12, score12)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker12) {
                                handleDoubleClick12()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick12 ? (
                                    score12.toString().split('').map((number, index) => (
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
                                    type="number12"
                                    value={score12}
                                    onChange={(e) => setScore12(e.target.value)}
                                    onKeyDown={(e) => handleEnter12(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>

            <div className='ally-bars-4'
                style={{
                    width: '180px',
                    height: '39px',
                    display: 'flex',
                    marginLeft: '54px'
                }}
            >

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de vida aliada (izquierda).png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker13) {
                                increaseScore(setScore13, score13)
                            } else if (e.deltaY === 100 && !clickBlocker13){
                                decreaseScore(setScore13, score13)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker13) {
                                handleDoubleClick13()
                            }}
                        }
                    >
                        
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick13 ? (
                                    score13.toString().split('').map((number, index) => (
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
                                    type="number13"
                                    value={score13}
                                    onChange={(e) => setScore13(e.target.value)}
                                    onKeyDown={(e) => handleEnter13(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker14) {
                                increaseScore(setScore14, score14)
                            } else if (e.deltaY === 100 && !clickBlocker14){
                                decreaseScore(setScore14, score14)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker14) {
                                handleDoubleClick14()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick14 ? (
                                    score14.toString().split('').map((number, index) => (
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
                                    type="number14"
                                    value={score14}
                                    onChange={(e) => setScore14(e.target.value)}
                                    onKeyDown={(e) => handleEnter14(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de maná aliada (Derecha).png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        marginLeft: '6px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer'
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker15) {
                                increaseScore(setScore15, score15)
                            } else if (e.deltaY === 100 && !clickBlocker15){
                                decreaseScore(setScore15, score15)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker15) {
                                handleDoubleClick15()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick15 ? (
                                    score15.toString().split('').map((number, index) => (
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
                                    type="number15"
                                    value={score15}
                                    onChange={(e) => setScore15(e.target.value)}
                                    onKeyDown={(e) => handleEnter15(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer'
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker16) {
                                increaseScore(setScore16, score16)
                            } else if (e.deltaY === 100 && !clickBlocker16){
                                decreaseScore(setScore16, score16)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker16) {
                                handleDoubleClick16()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick16 ? (
                                    score16.toString().split('').map((number, index) => (
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
                                    type="number16"
                                    value={score16}
                                    onChange={(e) => setScore16(e.target.value)}
                                    onKeyDown={(e) => handleEnter16(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>

            <div className='enemie-bars-1'
                style={{
                    width: '87px',
                    height: '39px',
                    display: 'flex',
                    marginLeft: '95px'
                }}
            >

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de vida enemiga.png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker17) {
                                increaseScore(setScore17, score17)
                            } else if (e.deltaY === 100 && !clickBlocker17){
                                decreaseScore(setScore17, score17)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker17) {
                                handleDoubleClick17()
                            }}
                        }
                    >
                        
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick17 ? (
                                    score17.toString().split('').map((number, index) => (
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
                                    type="number17"
                                    value={score17}
                                    onChange={(e) => setScore17(e.target.value)}
                                    onKeyDown={(e) => handleEnter17(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker18) {
                                increaseScore(setScore18, score18)
                            } else if (e.deltaY === 100 && !clickBlocker18){
                                decreaseScore(setScore18, score18)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker18) {
                                handleDoubleClick18()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick18 ? (
                                    score18.toString().split('').map((number, index) => (
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
                                    type="number18"
                                    value={score18}
                                    onChange={(e) => setScore18(e.target.value)}
                                    onKeyDown={(e) => handleEnter18(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>

            <div className='enemie-bars-2'
                style={{
                    width: '87px',
                    height: '39px',
                    display: 'flex',
                    marginLeft: '148px'
                }}
            >

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de vida enemiga.png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker19) {
                                increaseScore(setScore19, score19)
                            } else if (e.deltaY === 100 && !clickBlocker19){
                                decreaseScore(setScore19, score19)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker19) {
                                handleDoubleClick19()
                            }}
                        }
                    >
                        
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick19 ? (
                                    score19.toString().split('').map((number, index) => (
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
                                    type="number19"
                                    value={score19}
                                    onChange={(e) => setScore19(e.target.value)}
                                    onKeyDown={(e) => handleEnter19(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker20) {
                                increaseScore(setScore20, score20)
                            } else if (e.deltaY === 100 && !clickBlocker20){
                                decreaseScore(setScore20, score20)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker20) {
                                handleDoubleClick20()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick20 ? (
                                    score20.toString().split('').map((number, index) => (
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
                                    type="number20"
                                    value={score20}
                                    onChange={(e) => setScore20(e.target.value)}
                                    onKeyDown={(e) => handleEnter20(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>

            <div className='enemie-bars-3'
                style={{
                    width: '87px',
                    height: '39px',
                    display: 'flex',
                    marginLeft: '148px'
                }}
            >

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de vida enemiga.png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker21) {
                                increaseScore(setScore21, score21)
                            } else if (e.deltaY === 100 && !clickBlocker21){
                                decreaseScore(setScore21, score21)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker21) {
                                handleDoubleClick21()
                            }}
                        }
                    >
                        
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick21 ? (
                                    score21.toString().split('').map((number, index) => (
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
                                    type="number21"
                                    value={score21}
                                    onChange={(e) => setScore21(e.target.value)}
                                    onKeyDown={(e) => handleEnter21(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker22) {
                                increaseScore(setScore22, score22)
                            } else if (e.deltaY === 100 && !clickBlocker22){
                                decreaseScore(setScore22, score22)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker22) {
                                handleDoubleClick22()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick22 ? (
                                    score22.toString().split('').map((number, index) => (
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
                                    type="number22"
                                    value={score22}
                                    onChange={(e) => setScore22(e.target.value)}
                                    onKeyDown={(e) => handleEnter22(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>

            <div className='enemie-bars-4'
                style={{
                    width: '87px',
                    height: '39px',
                    display: 'flex',
                    marginLeft: '148px'
                }}
            >

                <div
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 13 Barras/Asset 13 Barra de vida enemiga.png')})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '87px',
                        height: '39px',
                        display: 'flex'
                    }}
                >
                    
                    <div
                        style={{
                            width: '33px',
                            height: '27px',
                            marginLeft: '6px',
                            marginTop: '6px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker23) {
                                increaseScore(setScore23, score23)
                            } else if (e.deltaY === 100 && !clickBlocker23){
                                decreaseScore(setScore23, score23)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker23) {
                                handleDoubleClick23()
                            }}
                        }
                    >
                        
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick23 ? (
                                    score23.toString().split('').map((number, index) => (
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
                                    type="number23"
                                    value={score23}
                                    onChange={(e) => setScore23(e.target.value)}
                                    onKeyDown={(e) => handleEnter23(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
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
                            marginTop: '6px',
                            marginLeft: '9px',
                            cursor: 'pointer',
                        }}
                        onWheel={(e) => {
                            if (e.deltaY === -100 && !clickBlocker24) {
                                increaseScore(setScore24, score24)
                            } else if (e.deltaY === 100 && !clickBlocker24){
                                decreaseScore(setScore24, score24)
                            }
                        }}
                        onDoubleClick={() =>
                            {if (!clickBlocker24) {
                                handleDoubleClick24()
                            }}
                        }
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '100%'
                            }}
                        >
                            {
                                doubleClick24 ? (
                                    score24.toString().split('').map((number, index) => (
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
                                    type="number24"
                                    value={score24}
                                    onChange={(e) => setScore24(e.target.value)}
                                    onKeyDown={(e) => handleEnter24(e)}
                                    style={{
                                        display: 'block',
                                        width: '26px'
                                    }}  
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );

}