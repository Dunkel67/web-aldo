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
            <button className='show-allies-tokens'
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
                    backgroundImage: `url(${require('../Resources/Nº 10 Menus de seleccion/Asset 10 Menu bateria de seleccionables Enenigos (Menu Derecha) Scrolleable.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '498px',
                    height: '600px'
                }}
            >
                <div
                    style={{
                        width: '413px',
                        height: '510px',
                        position: 'absolute',
                        left: '85px',
                        top: '48px',
                        zIndex: '2',
                        overflowY: 'scroll'
                    }}
                >
                    {tokensEnemigos.map((tokens, index) => (
                        <img
                            key={tokens}
                            src={require(`../Resources/Tokens enemigos/${chargeLastToken(tokens)}`)}
                            alt={`Token ${tokens}`}
                            style={{
                                width: '75px',
                                height: '75px',
                                paddingBottom: '20px',
                                paddingRight: '24px'
                            }}
                            onClick={() => changeCurrentSelectedToken(tokens, 1)}
                        />
                    ))}
                </div>
            </div>

            
        </div>
    );

}