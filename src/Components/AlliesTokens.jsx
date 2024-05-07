import React from 'react';

export default function AlliesTokens ({tokensAliados, handleHideAllyTokens, changeCurrentSelectedToken}) {

    const chargeLastToken = (object) => {
        return object[object.length - 1]
    };
    
    return (
        <div
            style={{
                backgroundImage: `url(${require('../Resources/Nº 10 Menus de seleccion/Asset 10 Menu desplegable Aliados (Izquierda).png')})`,
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
                    left: '458px',
                    zIndex: '2',
                    opacity: '0',
                    cursor: 'pointer'
                }}
                onClick={handleHideAllyTokens}
            ></button>

            <div
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 10 Menus de seleccion/Asset 10 Menu bateria de seleccionables Aliados (Menu Izquierda).png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '498px',
                    height: '600px',
                }}
            >
                <div
                    style={{
                        width: '450px',
                        height: '400px',
                        paddingLeft: '45px',
                        paddingTop: '48px',
                        zIndex: '2',
                    }}
                >
                    {tokensAliados.map((tokens, index) => (
                        <img
                            key={tokens}
                            src={require(`../Resources/Placeholder/Nada.png`)}
                            alt={`Token ${chargeLastToken(tokens)}`}
                            style={{
                                width: '75px',
                                height: '75px',
                                paddingBottom: '20px',
                                paddingRight: '24px'
                            }}
                            onClick={() => changeCurrentSelectedToken(tokens, 0)}
                        />
                    ))}
                </div>
            </div>

            
        </div>
    );

}