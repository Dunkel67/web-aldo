import React, { useState } from 'react';

export default function AlteredConditionDrones () {

    const [backgroundCondition] = useState(['Asset 14 nº1 Corrosión.png', 'Asset 14 nº2 Quebradizo.png', 'Asset 14 nº3 Fuga.png', 'Asset 14 nº4 Encasquillado.png', 'Asset 14 nº5 Traba.png', 'Asset 14 nº6 Degradación.png', 'Asset 14 nº7 Especial.png', 'Asset 14 nº8 Especial.png', 'Asset 14 nº9 Especial.png', 'Asset 14 nº10 Fondo deafult vacio.png']);

    const [conditions] = useState(['Asset 14 Seleccionable nº1.png', 'Asset 14 Seleccionable nº2.png', 'Asset 14 Seleccionable nº3.png', 'Asset 14 Seleccionable nº4.png', 'Asset 14 Seleccionable nº5.png', 'Asset 14 Seleccionable nº6.png', 'Asset 14 Seleccionable nº7.png', 'Asset 14 Seleccionable nº8.png', 'Asset 14 Seleccionable nº9.png', 'Asset 14 Seleccionable Vacio.png'])

    const [numbers] = useState(['Asset 14 Numero 1.png', 'Asset 14 Numero 2.png', 'Asset 14 Numero 3.png', 'Asset 14 Numero 4.png', 'Asset 14 Numero 5.png', 'Asset 14 Numero 6.png', 'Asset 14 Numero 7.png', 'Asset 14 Numero 8.png', 'Asset 14 Numero 9.png']);
    
    const [ea11, setEa11] = useState(0);
    const [ea12, setEa12] = useState(0);

    const [conditionEa1, setConditionEa1] = useState(9);

    const [hideMenuEa1, setHideMenuEa1] = useState(true);

    const handleHideMenuEa1 = () => {
        setHideMenuEa1(!hideMenuEa1);
    };

    const sumEa = (ea, setEa) => {
        if (ea < 8) {
            setEa(ea + 1);
        }
    };

    const subEa = (ea, setEa) => {
        if (ea > 0) {
            setEa(ea - 1);
        }
    };

    return (
        <div
            style={{
                width: '60px',
                height: '30px'
            }}
        >
            
            <div
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 14 Estados alterados/'+backgroundCondition[conditionEa1])})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '60px',
                    height: '30px',
                }}
            >

                <div hidden={hideMenuEa1}
                    style={{
                        width: '60px',
                        height: '200px',
                        top: '-200px',
                        zIndex: '3',
                        position: 'absolute',
                    }}
                >
                    {conditions.map((condition, index) => (
                        <img
                            src={require(`../Resources/Nº 14 Estados alterados/${condition}`)}
                            alt={`Condicion ${index}`}
                            style={{
                                width: '24px',
                                height: '30px',
                                cursor: 'pointer',
                                margin: '3px'
                            }}
                            onClick={() => {
                                setConditionEa1(index);
                                handleHideMenuEa1();
                            }}
                        />
                    ))}
                </div>

                <button
                    style={{
                        width: '23px',
                        height: '30px',
                        zIndex: '2',
                        cursor: 'pointer',
                        opacity: '0'
                    }}
                    onClick={handleHideMenuEa1}
                ></button>

                <img
                    src={require(`../Resources/Nº 14 Estados alterados/${numbers[ea11]}`)}
                    alt={`Numero ${ea11}`}
                    style={{
                        width: '9px',
                        height: '18px',
                        marginBottom: '3px',
                        marginLeft: '4px',
                        cursor: 'pointer'
                    }}
                    onClick={() => sumEa(ea11, setEa11)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        subEa(ea11, setEa11);
                    }}
                />

                <img
                    src={require(`../Resources/Nº 14 Estados alterados/${numbers[ea12]}`)}
                    alt={`Numero ${ea12}`}
                    style={{
                        width: '9px',
                        height: '18px',
                        marginBottom: '3px',
                        marginLeft: '9px',
                        cursor: 'pointer'
                    }}
                    onClick={() => sumEa(ea12, setEa12)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        subEa(ea12, setEa12);
                    }}
                />

            </div>
            
        </div>
    );

}