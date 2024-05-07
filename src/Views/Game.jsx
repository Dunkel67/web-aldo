import React, { useState, useRef } from 'react';

import TurnCounter from '../Components/TurnCounter';
import BackgroundChanger from '../Components/BackgroundChanger';
import GameBoard from '../Components/GameBoard';
import AlliesTokens from '../Components/AlliesTokens';
import EnemiesTokens from '../Components/EnemiesTokens';
import SpecialTokens from '../Components/SpecialTokens';
import MiscBars from '../Components/MiscBars';
import Armours from '../Components/Armours';
import AlliesProfiles from '../Components/AlliesProfiles';
import EnemiesProfiles from '../Components/EnemiesProfiles';

export default function Game () {

    const cursor = useRef(null);

    const changePosition = (e) => {
        cursor.current.style.top = `${e.clientY}px`;
        cursor.current.style.left = `${e.clientX}px`;
    }

    // Tokens Aliados Nº10 -----------------------------------------------------------------------------------------------------------------------------------

    const [tokenA1] = useState(['Token Aliado 1 Dron n1.gif','Token Aliado 1 Dron n2.gif','Token Aliado 1 Meka.gif']);
    const [tokenA2] = useState(['Token Aliado 2 Meka.gif']);
    const [tokenA3] = useState(['Token Aliado 3 Dron n2.gif', 'Token Aliado 3 Meka.gif']);
    const [tokenA4] = useState(['Token Aliado 4 Dron n1.gif','Token Aliado 4 Meka.gif']);
    const [tokenA5] = useState(['Token Aliado 5 Dron n1.gif','Token Aliado 5 Dron n2.gif','Token Aliado 5 Meka.gif']);
    const [tokenA6] = useState(['Token Aliado 6 Meka.gif']);
    const [tokenA7] = useState(['Token Aliado 7 Dron n2.gif','Token Aliado 7 Meka.gif']);
    const [tokenA8] = useState(['Token Aliado 8 Dron n1.gif','Token Aliado 8 Dron n2.gif','Token Aliado 8 Meka.gif']);
    const [tokenA9] = useState(['Token Aliado 9 Meka.gif']);
    const [tokenA10] = useState(['Token Aliado 10 Dron n2.gif','Token Aliado 10 Meka.gif']);
    const [tokenA11] = useState(['Token Aliado 11 Meka.gif']);
    const [tokenA12] = useState(['Token Aliado 12 Meka.gif']);

    const [tokensAliados] = useState([tokenA1, tokenA2, tokenA3, tokenA4, tokenA5, tokenA6, tokenA7, tokenA8, tokenA9, tokenA10, tokenA11, tokenA12]);

    const [hideAllyTokens, setHideAllyTokens] = useState(true);

    const handleHideAllyTokens = () => {
        setHideAllyTokens(!hideAllyTokens);
    };

    // Tokens Enemigos Nº10 -----------------------------------------------------------------------------------------------------------------------------------

    const [tokenEA1] = useState(['Token-Enemigo-A1-Meka.gif']);
    const [tokenEA2] = useState(['Token-Enemigo-A2-Meka.gif']);
    const [tokenEA3] = useState(['Token-Enemigo-A3-Meka.gif']);
    const [tokenEA4] = useState(['Token-Enemigo-A4-Meka.gif']);
    const [tokenEB1] = useState(['Token-Enemigo-B1-Dron-1.gif','Token-Enemigo-B1-Dron-2.gif','Token-Enemigo-B1-Meka.gif']);
    const [tokenEB2] = useState(['Token-Enemigo-B2-Dron-1.gif','Token-Enemigo-B2-Dron-2.gif','Token-Enemigo-B2-Meka.gif']);
    const [tokenEB3] = useState(['Token-Enemigo-B3-Dron-1.gif','Token-Enemigo-B3-Dron-2.gif','Token-Enemigo-B3-Meka.gif']);
    const [tokenEB4] = useState(['Token-Enemigo-B4-Dron-1.gif','Token-Enemigo-B4-Dron-2.gif','Token-Enemigo-B4-Meka.gif']);
    const [tokenEC1] = useState(['Token-Enemigo-C1-Dron.gif','Token-Enemigo-C1-Meka.gif']);
    const [tokenEC2] = useState(['Token-Enemigo-C2-Dron.gif','Token-Enemigo-C2-Meka.gif']);
    const [tokenEC3] = useState(['Token-Enemigo-C3-Dron.gif','Token-Enemigo-C3-Meka.gif']);
    const [tokenEC4] = useState(['Token-Enemigo-C4-Dron.gif','Token-Enemigo-C4-Meka.gif']);
    const [tokenED1] = useState(['Token-Enemigo-D1-Dron.gif','Token-Enemigo-D1-Meka.gif']);
    const [tokenED2] = useState(['Token-Enemigo-D2-Dron.gif','Token-Enemigo-D2-Meka.gif']);
    const [tokenED3] = useState(['Token-Enemigo-D3-Dron.gif','Token-Enemigo-D3-Meka.gif']);
    const [tokenED4] = useState(['Token-Enemigo-D4-Dron.gif','Token-Enemigo-D4-Meka.gif']);
    const [tokenEE1] = useState(['Token-Enemigo-E1-Dron 1.gif','Token-Enemigo-E1-Dron 2.gif','Token-Enemigo-E1-Meka.gif']);
    const [tokenEE2] = useState(['Token-Enemigo-E2-Dron 1.gif','Token-Enemigo-E2-Dron 2.gif','Token-Enemigo-E2-Meka.gif']);
    const [tokenEE3] = useState(['Token-Enemigo-E3-Dron 1.gif','Token-Enemigo-E3-Dron 2.gif','Token-Enemigo-E3-Meka.gif']);
    const [tokenEE4] = useState(['Token-Enemigo-E4-Dron 1.gif','Token-Enemigo-E4-Dron 2.gif','Token-Enemigo-E4-Meka.gif']);
    const [tokenEF1] = useState(['Token-Enemigo-F1-Meka.gif']);
    const [tokenEF2] = useState(['Token-Enemigo-F2-Meka.gif']);
    const [tokenEF3] = useState(['Token-Enemigo-F3-Meka.gif']);
    const [tokenEF4] = useState(['Token-Enemigo-F4-Meka.gif']);
    const [tokenEG1] = useState(['Token-Enemigo-G1-Dron.gif','Token-Enemigo-G1-Meka.gif']);
    const [tokenEG2] = useState(['Token-Enemigo-G2-Dron.gif','Token-Enemigo-G2-Meka.gif']);
    const [tokenEG3] = useState(['Token-Enemigo-G3-Dron.gif','Token-Enemigo-G3-Meka.gif']);
    const [tokenEG4] = useState(['Token-Enemigo-G4-Dron.gif','Token-Enemigo-G4-Meka.gif']);
    const [tokenEH1] = useState(['Token-Enemigo-H1-Dron 1.gif','Token-Enemigo-H1-Dron 2.gif','Token-Enemigo-H1-Meka.gif']);
    const [tokenEH2] = useState(['Token-Enemigo-H2-Dron 1.gif','Token-Enemigo-H2-Dron 2.gif','Token-Enemigo-H2-Meka.gif']);
    const [tokenEH3] = useState(['Token-Enemigo-H3-Dron 1.gif','Token-Enemigo-H3-Dron 2.gif','Token-Enemigo-H3-Meka.gif']);
    const [tokenEH4] = useState(['Token-Enemigo-H4-Dron 1.gif','Token-Enemigo-H4-Dron 2.gif','Token-Enemigo-H4-Meka.gif']);
    const [tokenEI1] = useState(['Token-Enemigo-I1-Meka.gif']);
    const [tokenEI2] = useState(['Token-Enemigo-I2-Meka.gif']);
    const [tokenEI3] = useState(['Token-Enemigo-I3-Meka.gif']);
    const [tokenEI4] = useState(['Token-Enemigo-I4-Meka.gif']);
    const [tokenEJ1] = useState(['Token-Enemigo-J1-DB.gif']);
    const [tokenEJ2] = useState(['Token-Enemigo-J2-EB.gif']);
    const [tokenEJ3] = useState(['Token-Enemigo-J3-FB.gif']);
    const [tokenEJ4] = useState(['Token-Enemigo-J4-GB.gif']);
    const [tokenEJ5] = useState(['Token-Enemigo-J5-HB.gif']);
    const [tokenEJ6] = useState(['Token-Enemigo-J6-IB.gif']);
    const [tokenEJ7] = useState(['Token-Enemigo-J7-BS.gif']);
    const [tokenEJ8] = useState(['Token-Enemigo-J8-AL.gif']);
    const [tokenEJ9] = useState(['Token-Enemigo-J9-BC.gif']);
    const [tokenEJ10] = useState(['Token-Enemigo-J10-BA.gif']);
    const [tokenEJ11] = useState(['Token-Enemigo-J11-BO.gif']);
    const [tokenEJ12] = useState(['Token-Enemigo-J12-BK.gif']);

    const [tokensEnemigos] = useState([tokenEA1, tokenEA2, tokenEA3, tokenEA4, tokenEB1, tokenEB2, tokenEB3, tokenEB4, tokenEC1, tokenEC2, tokenEC3, tokenEC4, tokenED1, tokenED2, tokenED3, tokenED4, tokenEE1, tokenEE2, tokenEE3, tokenEE4, tokenEF1, tokenEF2, tokenEF3, tokenEF4, tokenEG1, tokenEG2, tokenEG3, tokenEG4, tokenEH1, tokenEH2, tokenEH3, tokenEH4, tokenEI1, tokenEI2, tokenEI3, tokenEI4, tokenEJ1, tokenEJ2, tokenEJ3, tokenEJ4, tokenEJ5, tokenEJ6, tokenEJ7, tokenEJ8, tokenEJ9, tokenEJ10, tokenEJ11, tokenEJ12]);

    const [hideEnemieTokens, setHideEnemieTokens] = useState(true);

    const handleHideEnemieTokens = () => {
        setHideEnemieTokens(!hideEnemieTokens);
    };

    // Tokens Especiales Nº11 -----------------------------------------------------------------------------------------------------------------------------------

    const [tokenT1] = useState(['Token terreno 1 Roca lvl 5.png']);
    const [tokenT2] = useState(['Token terreno 2 Roca lvl 10.png']);
    const [tokenT3] = useState(['Token terreno 3 Roca lvl 15.png']);
    const [tokenT4] = useState(['Token terreno 4 Roca lvl 20.png']);
    const [tokenT5] = useState(['Token terreno 5 Tormenta lvl 3.png']);
    const [tokenT6] = useState(['Token terreno 6 Tormenta lvl 6.png']);
    const [tokenT7] = useState(['Token terreno 7 Tormenta lvl 9.png']);
    const [tokenT8] = useState(['Token terreno 8 Tormenta lvl 12.png']);
    const [tokenT9] = useState(['Token terreno 9 Esquirlas lvl 3.png']);
    const [tokenT10] = useState(['Token terreno 10 Esquirlas lvl 6.png']);
    const [tokenT11] = useState(['Token terreno 11 Esquirlas lvl 9.png']);
    const [tokenT12] = useState(['Token terreno 12 Esquirlas lvl 12.png']);
    const [tokenT13] = useState(['Token terreno 13 Estatica lvl 4.png']);
    const [tokenT14] = useState(['Token terreno 14 Estatica lvl 8.png']);
    const [tokenT15] = useState(['Token terreno 15 Estatica lvl 12.png']);
    const [tokenT16] = useState(['Token terreno 16 Estatica lvl 16.png']);
    const [tokenT17] = useState(['Token terreno 17 Tóxico lvl 2.png']);
    const [tokenT18] = useState(['Token terreno 18 Tóxico lvl 4.png']);
    const [tokenT19] = useState(['Token terreno 19 Tóxico lvl 6.png']);
    const [tokenT20] = useState(['Token terreno 20 Tóxico lvl 8.png']);
    const [tokenT21] = useState(['Token terreno 21 Alital lvl 3.png']);
    const [tokenT22] = useState(['Token terreno 22 Alital lvl 6.png']);
    const [tokenT23] = useState(['Token terreno 23 Alital lvl 9.png']);
    const [tokenT24] = useState(['Token terreno 24 Alital lvl 12.png']);
    const [tokenT25] = useState(['Token terreno 25 Ancla.png']);
    const [tokenT26] = useState(['Token terreno 26.png']);
    const [tokenT27] = useState(['Token terreno 27.png']);
    const [tokenT28] = useState(['Token terreno 28.png']);
    const [tokenT29] = useState(['Token terreno 29.png']);
    const [tokenT30] = useState(['Token terreno 30.png']);
    const [tokenT31] = useState(['Token terreno 31.png']);
    const [tokenT32] = useState(['Token terreno 32.png']);
    const [tokenT33] = useState(['Token terreno 33.png']);
    const [tokenT34] = useState(['Token terreno 34.png']);
    const [tokenT35] = useState(['Token terreno 35.png']);
    const [tokenT36] = useState(['Token terreno 36.png']);
    const [tokenT37] = useState(['Token terreno 37.png']);
    const [tokenT38] = useState(['Token terreno 38.png']);
    const [tokenT39] = useState(['Token terreno 39.png']);
    const [tokenT40] = useState(['Token terreno 40.png']);
    const [tokenT41] = useState(['Token terreno 41.png']);
    const [tokenT42] = useState(['Token terreno 42.png']);
    const [tokenT43] = useState(['Token terreno 43.png']);
    const [tokenT44] = useState(['Token terreno 44.png']);

    const [tokensEspeciales] = useState([tokenT1, tokenT5, tokenT9, tokenT13, tokenT17, tokenT21, tokenT25, tokenT29, tokenT33, tokenT37, tokenT41, tokenT2, tokenT6, tokenT10, tokenT14, tokenT18, tokenT22, tokenT26, tokenT30, tokenT34, tokenT38, tokenT42, tokenT3, tokenT7, tokenT11, tokenT15, tokenT19, tokenT23, tokenT27, tokenT31, tokenT35, tokenT39, tokenT43, tokenT4, tokenT8, tokenT12, tokenT16, tokenT20, tokenT24, tokenT28, tokenT32, tokenT36, tokenT40, tokenT44]);

    const [hideSpecialTokens, setHideSpecialTokens] = useState(true);

    const handleHideSpecialTokens = () => {
        setHideSpecialTokens(!hideSpecialTokens);
    };

    // Resto ---------------------------------------------------------------------------------------------------------------------------------------------

    const [activeArray, setActiveArray] = useState(null);

    const [menuType, setMenuType] = useState(null);

    const hideAllMenus = () => {
        setHideAllyTokens(true);
        setHideEnemieTokens(true);
        setHideSpecialTokens(true);
    }

    const changeCurrentSelectedToken = (tokens, type) => {
        hideAllMenus();
        setActiveArray(tokens);
        console.log(type);
        switch (type) {
            case 0:
                setMenuType('Tokens aliados/');
                setCursorView('Tokens aliados/'+tokens[0]);
                break;
            case 1:
                setMenuType('Tokens enemigos/');
                setCursorView('Tokens enemigos/'+tokens[0]);
                break;
            case 2:
                setMenuType('Tokens universales/');
                setCursorView('Tokens universales/'+tokens[0]);
                break;
            default:
                break;
        }
    }

    const advanceArray = () => {
        console.log('hola');
        console.log(activeArray);
        if (activeArray !== null) {
            console.log('hola2');
            activeArray.map((token, index) => {
                console.log('hola3');
                let tokenComplete = menuType+token;
                console.log(tokenComplete);
                console.log(cursorView);
                console.log(index);
                console.log(activeArray.length);
                if (tokenComplete === cursorView && index < activeArray.length - 1) {
                    console.log('siguiente');
                    setCursorView(menuType+activeArray[index + 1]);
                } else if (tokenComplete === cursorView && index === activeArray.length -1) {
                    console.log('borrado');
                    setCursorView(cursorViewBlank);
                    setActiveArray(null);
                }
            });
        }
    }

    const [cursorViewBlank] = useState('Placeholder/Nada.png');

    const [cursorView, setCursorView] = useState(cursorViewBlank);

    const [hideCursor, setHideCursor] = useState(false);

    const [backgroundNumber, setBackgroundNumber] = useState(0);

    const [isClosedBlocker, setIsClosedBlocker] = useState(false);

    const handleClickBlocker = () => {
        setIsClosedBlocker(!isClosedBlocker);
    };

    return (
        <div className='page-container' onMouseMove={changePosition} onClick={advanceArray}
            style={{
                backgroundImage: `url(${require('../Resources/Fondos/Muestra_1.png')})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '1920px',
                height: '1080px',
            }}
        >

            <div className="cursor-style" ref={cursor}
                style={{
                    width: '10rem',
                    height: '10rem',
                    position: 'fixed',
                    transformOrigin: '100% 100%',
                    transform: 'translate(-50%, -75%)',
                    pointerEvents: 'none',
                    zIndex: '3'
                }}
            >
                <img
                    src={require(`../Resources/${cursorView}`)}
                    alt='Cursor'
                    hidden={hideCursor}
                    style={{
                        width: '100%',
                        height: '100%',
                        userSelect: 'none'
                    }}
                />
            </div>

            <div className='blocker'
                style={{
                    backgroundImage: `url(${require(isClosedBlocker ? '../Resources/Nº 4 Candado/Asset 4 nº1 Candado cerrado.png' : '../Resources/Nº 4 Candado/Asset 5 nº2 Candado abierto.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '51px',
                    height: '81px',
                    position: 'absolute',
                    top: '9px',
                    right: '240px',
                    zIndex: '1'
                }}
                onClick={handleClickBlocker}
            ></div>

            <div className='background-changer'
                style={{
                    position: 'absolute',
                    top: '30px',
                    right: '140px',
                    cursor: 'pointer',
                    zIndex: '1'
                }}
            >
                <BackgroundChanger isClosedBlocker={isClosedBlocker} backgroundNumber={backgroundNumber} setBackgroundNumber={setBackgroundNumber}></BackgroundChanger>
            </div>

            <div className='turn-counter'
                style={{
                    position: 'absolute',
                    top: '6px',
                    right: '12px',
                    cursor: 'pointer',
                    zIndex: '1'
                }}
            >
                <TurnCounter></TurnCounter>
            </div>

            <div className='game-board'
                style={{
                    position: 'absolute',
                    top: '321px',
                    left: '160px',
                    zIndex: '2'
                }}
            >
                <GameBoard></GameBoard>
            </div>

            <button className='show-allies-tokens' hidden={isClosedBlocker}
                style={{
                    width: '40px',
                    height: '150px',
                    position: 'absolute',
                    top: '183px',
                    left: '0px',
                    zIndex: '2',
                    opacity: '0',
                    cursor: 'pointer'
                }}
                onClick={handleHideAllyTokens}
            ></button>

            <div className='allies-tokens' hidden={hideAllyTokens}
                style={{
                    position: 'absolute',
                    top: '159px',
                    left: '0px',
                    zIndex: '3'
                }}
            >
                <AlliesTokens tokensAliados={tokensAliados} handleHideAllyTokens={handleHideAllyTokens} changeCurrentSelectedToken={changeCurrentSelectedToken}></AlliesTokens>
            </div>

            <button className='show-enemies-tokens' hidden={isClosedBlocker}
                style={{
                    width: '40px',
                    height: '150px',
                    position: 'absolute',
                    top: '183px',
                    right: '0px',
                    zIndex: '2',
                    opacity: '0',
                    cursor: 'pointer'
                }}
                onClick={handleHideEnemieTokens}
            ></button>

            <div className='enemies-tokens' hidden={hideEnemieTokens}
                style={{
                    position: 'absolute',
                    top: '159px',
                    right: '0px',
                    zIndex: '3'
                }}
            >
                <EnemiesTokens tokensEnemigos={tokensEnemigos} handleHideEnemieTokens={handleHideEnemieTokens} changeCurrentSelectedToken={changeCurrentSelectedToken}></EnemiesTokens>
            </div>

            <button className='show-special-tokens' hidden={isClosedBlocker}
                style={{
                    width: '142px',
                    height: '42px',
                    position: 'absolute',
                    top: '0px',
                    left: '950px',
                    zIndex: '2',
                    opacity: '0',
                    cursor: 'pointer'
                }}
                onClick={handleHideSpecialTokens}
            ></button>

            <div className='special-tokens' hidden={hideSpecialTokens}
                style={{
                    position: 'absolute',
                    top: '0px',
                    left: '441px',
                    zIndex: '3'
                }}
            >
                <SpecialTokens tokensEspeciales={tokensEspeciales} handleHideSpecialTokens={handleHideSpecialTokens} changeCurrentSelectedToken={changeCurrentSelectedToken}></SpecialTokens>
            </div>

            <div className='misc-bars'
                style={{
                    position: 'absolute',
                    bottom: '204px',
                    left: '54px',
                    zIndex: '2'
                }}
            >
                <MiscBars></MiscBars>
            </div>

            <div className='armours'
                style={{
                    position: 'absolute',
                    bottom: '90px',
                    left: '12px'
                }}
            >
                <Armours></Armours>
            </div>

            <div className='ally-1'
                style={{
                    position: 'absolute',
                    bottom: '7px',
                    left: '9px'
                }}
            >
                <AlliesProfiles isClosedBlocker={isClosedBlocker}></AlliesProfiles>
            </div>

            <div className='ally-2'
                style={{
                    position: 'absolute',
                    bottom: '7px',
                    left: '243px'
                }}
            >
                <AlliesProfiles isClosedBlocker={isClosedBlocker}></AlliesProfiles>
            </div>

            <div className='ally-3'
                style={{
                    position: 'absolute',
                    bottom: '7px',
                    left: '477px'
                }}
            >
                <AlliesProfiles isClosedBlocker={isClosedBlocker}></AlliesProfiles>
            </div>

            <div className='ally-4'
                style={{
                    position: 'absolute',
                    bottom: '7px',
                    left: '711px'
                }}
            >
                <AlliesProfiles isClosedBlocker={isClosedBlocker}></AlliesProfiles>
            </div>

            <div className='enemie-1'
                style={{
                    position: 'absolute',
                    bottom: '7px',
                    left: '971px'
                }}
            >
                <EnemiesProfiles isClosedBlocker={isClosedBlocker}></EnemiesProfiles>
            </div>

            <div className='enemie-2'
                style={{
                    position: 'absolute',
                    bottom: '7px',
                    left: '1205px'
                }}
            >
                <EnemiesProfiles isClosedBlocker={isClosedBlocker}></EnemiesProfiles>
            </div>

            <div className='enemie-3'
                style={{
                    position: 'absolute',
                    bottom: '7px',
                    left: '1439px'
                }}
            >
                <EnemiesProfiles isClosedBlocker={isClosedBlocker}></EnemiesProfiles>
            </div>

            <div className='enemie-4'
                style={{
                    position: 'absolute',
                    bottom: '7px',
                    left: '1673px'
                }}
            >
                <EnemiesProfiles isClosedBlocker={isClosedBlocker}></EnemiesProfiles>
            </div>
            
        </div>
    );

}