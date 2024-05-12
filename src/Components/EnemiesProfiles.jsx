import React, { useState } from 'react';
import IndividualLifeBar from './IndividualLifeBar';
import AlteredConditionDrones from './AlteredConditionDrones';

export default function EnemiesTokens ({ isClosedBlocker }) {

    // Drones Nº18 ---------------------------------------------------------------------------------------------------------------------------------------

    const [droneState1] = useState(['Aasset 18 Interfaz Dron Unico.png']);
    const [droneState2] = useState(['Aasset 18 Interfaz Dron Doble 1.png', 'Aasset 18 Interfaz Dron Doble 2.png']);

    const [droneState, setDroneState] = useState(0);

    const changeDroneState = () => {
        console.log('Drone State: ', droneState);
        if (droneState < 2) {
            setDroneState(droneState + 1);
        } else {
            setDroneState(0);
        }
    };

    const [numbersArmourDrones] = useState(['Asset 18 Numero 0.png', 'Asset 18 Numero 1.png', 'Asset 18 Numero 2.png', 'Asset 18 Numero 3.png', 'Asset 18 Numero 4.png', 'Asset 18 Numero 5.png', 'Asset 18 Numero 6.png', 'Asset 18 Numero 7.png', 'Asset 18 Numero 8.png', 'Asset 18 Numero 9.png']);

    const [dronA11, setDronA11] = useState(0);
    const [dronA12, setDronA12] = useState(0);
    const [dronA21, setDronA21] = useState(0);
    const [dronA22, setDronA22] = useState(0);
    const [dronA31, setDronA31] = useState(0);
    const [dronA32, setDronA32] = useState(0);

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

    // ---------------------------------------------------------------------------------------------------------------------------------------------------

    const [enemies] = useState(['Asset 12 Perfil Enemigo 1.png', 'Asset 12 Perfil Enemigo 2.png', 'Asset 12 Perfil Enemigo 3.png', 'Asset 12 Perfil Enemigo 4.png', 'Asset 12 Perfil Enemigo 5.png', 'Asset 12 Perfil Enemigo 6.png', 'Asset 12 Perfil Enemigo 7.png', 'Asset 12 Perfil Enemigo 8.png', 'Asset 12 Perfil Enemigo 9.png', 'Asset 12 Perfil Enemigo 10.png', 'Asset 12 Perfil Vacio (Solapable sobre los numeros) Version villanos.png']);
    
    const [currentProfile, setCurrentProfile] = useState(10);

    const changeProfile = (index) => {
        handleHideEnemieTokens();
        setCurrentProfile(index);
    };

    const [enemiesSelector] = useState(['Asset 16 nº1 Enemigos.png', 'Asset 16 nº2 Enemigos.png', 'Asset 16 nº3 Enemigos.png', 'Asset 16 nº4 Enemigos.png', 'Asset 16 nº5 Enemigos.png', 'Asset 16 nº6 Enemigos.png', 'Asset 16 nº7 Enemigos.png', 'Asset 16 nº8 Enemigos.png', 'Asset 16 nº9 Enemigos.png', 'Asset 16 nº10 Enemigos.png', 'Asset 16 Vacio Enemigos.png']);

    const [isProfileSelectorHidden, setIsProfileSelectorHidden] = useState(true);

    const handleHideEnemieTokens = () => {
        setIsProfileSelectorHidden(!isProfileSelectorHidden);
    };

    const [enemieDead, setEnemieDead] = useState(false);

    const handleEnemieDead = () => {
        setEnemieDead(!enemieDead);
    };

    return (
        <div
            style={{
                width: '234px',
                height: '620px',
            }}
        >

            <img
                src={require('../Resources/Nº 12 Perfiles/'+enemies[currentProfile])}
                alt={`Perfil ${currentProfile}`}
                style={{
                    position: 'absolute',
                    width: '234px',
                    height: '237px',
                    bottom: '0px'
                }}
            >
            </img>

            <img hidden={!enemieDead}
                src={require('../Resources/Nº 17 Boton Finalización/Asset 17 Boton finalizado.png')}
                alt={`Perfil ${currentProfile}`}
                style={{
                    position: 'absolute',
                    width: '234px',
                    height: '237px',
                    bottom: '0px',
                    zIndex: '1'
                }}
            >
            </img>

            <button hidden={isClosedBlocker}
                style={{
                    width: '127px',
                    height: '108px',
                    position: 'absolute',
                    bottom: '84px',
                    left: '40px',
                    zIndex: '10',
                    opacity: '0',
                    cursor: 'pointer'
                }}
                onClick={handleHideEnemieTokens}
            >
            </button>

            <button
                style={{
                    width: '15px',
                    height: '15px',
                    position: 'absolute',
                    bottom: '93px',
                    left: '48px',
                    zIndex: '11',
                    opacity: '0',
                    cursor: 'pointer'
                }}
                onClick={handleEnemieDead}
            >
            </button>

            <button
                style={{
                    width: '15px',
                    height: '15px',
                    position: 'absolute',
                    bottom: '93px',
                    left: '143px',
                    zIndex: '11',
                    opacity: '0',
                    cursor: 'pointer'
                }}
                onClick={() => changeDroneState()}
            >
            </button>

            <div hidden={isProfileSelectorHidden}
                style={{
                    position: 'absolute',
                    width: '116px',
                    height: '370px',
                    top: '0px',
                    left: '45px',
                    zIndex: '23',
                }}
            >
                {enemiesSelector.map((enemieSelector, index) => (
                    <img
                        key={enemieSelector}
                        src={require(`../Resources/Nº 16 Seleccionable de perfiles/`+enemieSelector)}
                        alt={`Token ${enemieSelector}`}
                        style={{
                            width: '44px',
                            height: '43px',
                            padding: '7px',
                            cursor: 'pointer'
                        }}
                        onClick={() => changeProfile(index)}
                    />
                ))}
            </div>

            <div
                style={{
                    position: 'absolute',
                    width: '234px',
                    height: '80px',
                    bottom: '0px',
                    left: '0px',
                    zIndex: '12',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <div hidden={droneState !== 1}
                    style={{
                        backgroundImage: `url(${require('../Resources/Nº 18 Paquete de drones/'+droneState1[0])})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '150px',
                        height: '78px',
                        zIndex: '3'
                    }}
                >

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '5px',
                            left: '69px',
                            width: '60px',
                            height: '30px',
                            zIndex: '4'
                        }}
                    >
                        <AlteredConditionDrones></AlteredConditionDrones>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '5px',
                            left: '132px',
                            width: '60px',
                            height: '30px',
                            zIndex: '4'
                        }}
                    >
                        <AlteredConditionDrones></AlteredConditionDrones>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            top: '4px',
                            left: '69px',
                            zIndex: '3',
                            width: '86px',
                            height: '32px',
                        }}
                    >
                        <IndividualLifeBar></IndividualLifeBar>
                    </div>

                    <img
                        src={require('../Resources/Nº 18 Paquete de drones/Asset 18 Numero '+dronA11+'.png')}
                        alt={`Dron Aromur Number 1`}
                        style={{
                            width: '12px',
                            height: '18px',
                            position: 'relative',
                            top: '9px',
                            left: '6px',
                            zIndex: '4'
                        }}
                        onClick={() => 
                            increaseScore(setDronA11, dronA11)
                        }
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setDronA11, dronA11);
                        }}
                    /> 

                    <img
                        src={require('../Resources/Nº 18 Paquete de drones/Asset 18 Numero '+dronA12+'.png')}
                        alt={`Dron Aromur Number 2`}
                        style={{
                            width: '12px',
                            height: '18px',
                            position: 'relative',
                            top: '51px',
                            left: '-6px',
                            zIndex: '4'
                        }}
                        onClick={() => 
                            increaseScore(setDronA12, dronA12)
                        }
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setDronA12, dronA12);
                        }}
                    />  
                </div>

                <div hidden={droneState !== 2}
                    style={{
                        zIndex: '40'
                    }}
                >

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '6px',
                            left: '29px',
                            width: '60px',
                            height: '30px',
                            zIndex: '4'
                        }}
                    >
                        <AlteredConditionDrones></AlteredConditionDrones>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '6px',
                            left: '146px',
                            width: '60px',
                            height: '30px',
                            zIndex: '4'
                        }}
                    >
                        <AlteredConditionDrones></AlteredConditionDrones>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            top: '2px',
                            left: '30px',
                            zIndex: '3',
                            width: '86px',
                            height: '32px',
                        }}
                    >
                        <IndividualLifeBar></IndividualLifeBar>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            top: '2px',
                            left: '146px',
                            zIndex: '3',
                            width: '86px',
                            height: '32px',
                        }}
                    >
                        <IndividualLifeBar></IndividualLifeBar>
                    </div>

                    <img
                        src={require('../Resources/Nº 18 Paquete de drones/'+droneState2[0])}
                        alt={`Dron Doble 1`}
                        style={{
                            width: '114px',
                            height: '78px',
                            zIndex: '3'
                        }}
                    >
                    </img>

                    <img
                        src={require('../Resources/Nº 18 Paquete de drones/Asset 18 Numero '+dronA21+'.png')}
                        alt={`Dron 2 Aromur Number 1`}
                        style={{
                            width: '12px',
                            height: '16px',
                            position: 'absolute',
                            top: '9px',
                            left: '8px',
                            zIndex: '4'
                        }}
                        onClick={() => 
                            increaseScore(setDronA21, dronA21)
                        }
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setDronA21, dronA21);
                        }}
                    /> 

                    <img
                        src={require('../Resources/Nº 18 Paquete de drones/Asset 18 Numero '+dronA22+'.png')}
                        alt={`Dron 2 Aromur Number 2`}
                        style={{
                            width: '12px',
                            height: '16px',
                            position: 'absolute',
                            top: '54px',
                            left: '8px',
                            zIndex: '4'
                        }}
                        onClick={() => 
                            increaseScore(setDronA22, dronA22)
                        }
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setDronA22, dronA22);
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 18 Paquete de drones/Asset 18 Numero '+dronA31+'.png')}
                        alt={`Dron 3 Aromur Number 1`}
                        style={{
                            width: '12px',
                            height: '16px',
                            position: 'absolute',
                            top: '9px',
                            left: '125px',
                            zIndex: '4'
                        }}
                        onClick={() => 
                            increaseScore(setDronA31, dronA31)
                        }
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setDronA31, dronA31);
                        }}
                    /> 

                    <img
                        src={require('../Resources/Nº 18 Paquete de drones/Asset 18 Numero '+dronA32+'.png')}
                        alt={`Dron 3 Aromur Number 2`}
                        style={{
                            width: '12px',
                            height: '16px',
                            position: 'absolute',
                            top: '54px',
                            left: '125px',
                            zIndex: '4'
                        }}
                        onClick={() => 
                            increaseScore(setDronA32, dronA32)
                        }
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setDronA32, dronA32);
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 18 Paquete de drones/'+droneState2[1])}
                        alt={`Dron Doble 2`}
                        style={{
                            width: '114px',
                            height: '78px',
                            marginLeft: '3px',
                            zIndex: '3'
                        }}
                    >
                    </img>
                </div>

            </div>

        </div>

    );

}