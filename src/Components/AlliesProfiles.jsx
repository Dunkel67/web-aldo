import React, { useState } from 'react';

export default function AlliesTokens ({ isClosedBlocker }) {

    const [allies] = useState(['Asset 12 Perfil Jugador 1.png', 'Asset 12 Perfil Jugador 2.png', 'Asset 12 Perfil Jugador 3.png', 'Asset 12 Perfil Jugador 4.png', 'Asset 12 Perfil Jugador 5.png', 'Asset 12 Perfil Jugador 6.png', 'Asset 12 Perfil Jugador 7.png', 'Asset 12 Perfil Jugador 8.png', 'Asset 12 Perfil Jugador 9.png', 'Asset 12 Perfil Jugador 10.png', 'Asset 12 Perfil Jugador 11.png', 'Asset 12 Perfil Vacio (Solapable sobre los numeros).png']);
    
    const [currentProfile, setCurrentProfile] = useState(11);

    const changeProfile = (index) => {
        handleHideAllyTokens();
        setCurrentProfile(index);
    };

    const [alliesSelector] = useState(['Asset 16 nº1 Aliados.png', 'Asset 16 nº2 Aliados.png', 'Asset 16 nº3 Aliados.png', 'Asset 16 nº4 Aliados.png', 'Asset 16 nº5 Aliados.png', 'Asset 16 nº6 Aliados.png', 'Asset 16 nº7 Aliados.png', 'Asset 16 nº8 Aliados.png', 'Asset 16 nº9 Aliados.png', 'Asset 16 nº10 Aliados.png', 'Asset 16 nº11 Aliados.png', 'Asset 16 Vacio.png']);

    const [isProfileSelectorHidden, setIsProfileSelectorHidden] = useState(true);

    const handleHideAllyTokens = () => {
        setIsProfileSelectorHidden(!isProfileSelectorHidden);
    };

    const [allyDead, setAllyDead] = useState(false);

    const handleAllyDead = () => {
        setAllyDead(!allyDead);
    };

    return (
        <div
            style={{
                width: '234px',
                height: '620px',
            }}
        >

            <img
                src={require('../Resources/Nº 12 Perfiles/'+allies[currentProfile])}
                alt={`Perfil ${currentProfile}`}
                style={{
                    position: 'absolute',
                    width: '234px',
                    height: '237px',
                    bottom: '0px'
                }}
            >
            </img>

            <img hidden={!allyDead}
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
                onClick={handleHideAllyTokens}
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
                onClick={handleAllyDead}
            >
            </button>

            <div hidden={isProfileSelectorHidden}
                style={{
                    position: 'absolute',
                    width: '116px',
                    height: '370px',
                    top: '0px',
                    left: '45px',
                    zIndex: '2',
                }}
            >
                {alliesSelector.map((allySelector, index) => (
                    <img
                        key={allySelector}
                        src={require(`../Resources/Nº 16 Seleccionable de perfiles/`+allySelector)}
                        alt={`Token ${allySelector}`}
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

        </div>
    );

}