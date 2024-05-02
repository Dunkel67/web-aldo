import React, { useState } from 'react';

export default function EnemiesTokens ({ isClosedBlocker }) {

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

            <div hidden={isProfileSelectorHidden}
                style={{
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    position: 'absolute',
                    width: '116px',
                    height: '370px',
                    top: '0px',
                    left: '45px',
                    zIndex: '2',
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

        </div>
    );

}