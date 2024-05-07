import React from 'react';

export default function EnemiesTokens ({tokensEnemigos, handleHideEnemieTokens, changeCurrentSelectedToken}) {

    const chargeLastToken = (object) => {
        return object[object.length - 1]
    };
    
    return (
        <div
            style={{
                backgroundImage: `url(${require('../Resources/Nº 10 Menus de seleccion/Asset 10 Menu Enemigos (Derecha).png')})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '498px',
                height: '600px',
            }}
        >
            <button className='show-enemies-tokens'
                style={{
                    width: '40px',
                    height: '150px',
                    position: 'absolute',
                    top: '24px',
                    right: '458px',
                    zIndex: '2',
                    opacity: '0',
                    cursor: 'pointer'
                }}
                onClick={handleHideEnemieTokens}
            ></button>

            <div
                style={{
                    position: 'absolute',
                    width: '498px',
                    height: '516px',
                    top: '44px',
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    scrollbarWidth: 'none'
                }}
            >

                <img
                    src={require('../Resources/Nº 10 Menus de seleccion/Asset 10 Menu bateria de seleccionables Enenigos (Menu Derecha) Scrolleable2.png')}
                    alt={`Asset 10 Menu elementos especiales`}
                />

                <div
                    style={{
                        width: '450px',
                        height: '510px',
                        position: 'absolute',
                        left: '75px',
                        top: '-15px',
                        zIndex: '2'
                    }}
                >

                    {tokensEnemigos.map((tokens, index) => (
                        <img
                            key={tokens}
                            src={require(`../Resources/Placeholder/Nada.png`)}
                            alt={`Token ${chargeLastToken(tokens)}`}
                            style={{
                                width: '75px',
                                height: '75px',
                                paddingBottom: '20px',
                                paddingRight: '24px',
                                zIndex: '4',
                                userSelect: 'none'
                            }}
                            onClick={() => changeCurrentSelectedToken(tokens, 1)}
                        />
                    ))}
                </div>
            </div>

            
        </div>
    );

}