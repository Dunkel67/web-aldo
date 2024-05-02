import React from 'react';

export default function SpecialTokens ({tokensEspeciales, handleHideSpecialTokens, changeCurrentSelectedToken}) {

    const chargeLastToken = (object) => {
        return object[object.length - 1]
    };
    
    return (
        <div
            style={{
                width: '1161px',
                height: '507px',
            }}
        >
            <img
                src={require(`../Resources/Nº 11 Menu Especiales/Asset 10 Menu elementos especiales.png`)}
                alt={`Asset 10 Menu elementos especiales`}
            />

            <button className='show-special-tokens'
                style={{
                    width: '142px',
                    height: '52px',
                    position: 'absolute',
                    bottom: '0px',
                    left: '509px',
                    zIndex: '2',
                    opacity: '0',
                    cursor: 'pointer'
                }}
                onClick={handleHideSpecialTokens}
            ></button>

            <div
                style={{
                    width: '1112px',
                    height: '377px',
                    position: 'absolute',
                    top: '45px',
                    left: '48px'
                }}
            >
                {tokensEspeciales.map((tokens, index) => (
                    <img
                        key={tokens}
                        src={require(`../Resources/Tokens universales/${chargeLastToken(tokens)}`)}
                        alt={`Token ${chargeLastToken(tokens)}`}
                        style={{
                            width: '75px',
                            height: '75px',
                            paddingBottom: '20px',
                            paddingRight: '24px'
                        }}
                        onClick={() => changeCurrentSelectedToken(tokens, 2)}
                    />
                ))}
            </div>
        </div>
    );

}