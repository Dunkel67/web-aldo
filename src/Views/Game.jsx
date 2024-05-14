import React, { useState, useRef, useEffect } from 'react';

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
import ObjectivesMenu from '../Components/ObjetivesMenu';
import ConversationalPartner from '../Components/ConversationalPartner';
import WeatherMenu from '../Components/WeatherMenu';
import AlteredCondition from '../Components/AlteredCondition';
import AlteredConditionEnemies from '../Components/AlteredConditionEnemies';

export default function Game () {

    const cursor = useRef(null);

    const changePosition = (e) => {
        cursor.current.style.top = `${e.clientY}px`;
        cursor.current.style.left = `${e.clientX}px`;
    }

    // Objetivo Secundario Nº1 -------------------------------------------------------------------------------------------------------------------------------

    const [objective1] = useState(['Asset Nº1 Desplegable de selección nº1.png', 'Asset Nº1 Desplegable de texto nº1.png', 'Asset Nº3 Icono de objetivo nº1.png']);
    const [objective2] = useState(['Asset Nº1 Desplegable de selección nº2.png', 'Asset Nº1 Desplegable de texto nº2.png', 'Asset Nº3 Icono de objetivo nº2.png']);
    const [objective3] = useState(['Asset Nº1 Desplegable de selección nº3.png', 'Asset Nº1 Desplegable de texto nº3.png', 'Asset Nº3 Icono de objetivo nº3.png']);
    const [objective4] = useState(['Asset Nº1 Desplegable de selección nº4.png', 'Asset Nº1 Desplegable de texto nº4.png', 'Asset Nº3 Icono de objetivo nº4.png']);
    const [objective5] = useState(['Asset Nº1 Desplegable de selección nº5.png', 'Asset Nº1 Desplegable de texto nº5.png', 'Asset Nº3 Icono de objetivo nº5.png']);
    const [objective6] = useState(['Asset Nº1 Desplegable de selección nº6.png', 'Asset Nº1 Desplegable de texto nº6.png', 'Asset Nº3 Icono de objetivo nº6.png']);
    const [objective7] = useState(['Asset Nº1 Desplegable de selección nº7.png', 'Asset Nº1 Desplegable de texto nº7.png', 'Asset Nº3 Icono de objetivo nº7.png']);
    const [objective8] = useState(['Asset Nº1 Desplegable de selección nº8.png', 'Asset Nº1 Desplegable de texto nº8.png', 'Asset Nº3 Icono de objetivo nº8.png']);
    const [objective9] = useState(['Asset Nº1 Desplegable de selección nº9.png', 'Asset Nº1 Desplegable de texto nº9.png', 'Asset Nº3 Icono de objetivo nº9.png']);
    const [objective10] = useState(['Asset Nº1 Desplegable de selección nº10.png', 'Asset Nº1 Desplegable de texto nº10.png', 'Asset Nº3 Icono de objetivo nº10.png']);
    const [objective11] = useState(['Asset Nº1 Desplegable de selección nº11.png', 'Asset Nº1 Desplegable de texto nº11.png', 'Asset Nº3 Icono de objetivo nº11.png']);
    const [objective12] = useState(['Asset Nº1 Desplegable de selección nº12.png', 'Asset Nº1 Desplegable de texto nº12.png', 'Asset Nº3 Icono de objetivo nº12.png']);

    const [objectives] = useState([objective1, objective2, objective3, objective4, objective5, objective6, objective7, objective8, objective9, objective10, objective11, objective12]);

    const [hideObjectives, setHideObjectives] = useState(true);

    const handleHideObjectives = () => {
        setHideObjectives(!hideObjectives);
    };

    const [activeObjective, setActiveObjective] = useState(0);

    const [hideContextBlock, setHideContextBlock] = useState(true);

    const handleHideContextBlock = () => {
        setHideContextBlock(!hideContextBlock);
    };

    // Interlocutores Nº2 ------------------------------------------------------------------------------------------------------------------------------------

    const [interlocutor1] = useState(['Asset Nº2 Desplegable de selección nº1.png', 'Asset Nº2 Desplegable de texto nº1.png', 'Asset Nº3 Icono de interlocutor nº1.png']);
    const [interlocutor2] = useState(['Asset Nº2 Desplegable de selección nº2.png', 'Asset Nº2 Desplegable de texto nº2.png', 'Asset Nº3 Icono de interlocutor nº2.png']);
    const [interlocutor3] = useState(['Asset Nº2 Desplegable de selección nº3.png', 'Asset Nº2 Desplegable de texto nº3.png', 'Asset Nº3 Icono de interlocutor nº3.png']);
    const [interlocutor4] = useState(['Asset Nº2 Desplegable de selección nº4.png', 'Asset Nº2 Desplegable de texto nº4.png', 'Asset Nº3 Icono de interlocutor nº4.png']);

    const [interlocutors] = useState([interlocutor1, interlocutor2, interlocutor3, interlocutor4]);

    const [hideInterlocutors, setHideInterlocutors] = useState(true);

    const handleHideInterlocutors = () => {
        setHideInterlocutors(!hideInterlocutors);
    };

    const [activeInterlocutor, setActiveInterlocutor] = useState(0);

    const [hideInterlocutorContext, setHideInterlocutorContext] = useState(true);

    const handleHideInterlocutorContext = () => {
        setHideInterlocutorContext(!hideInterlocutorContext);
    };

    // Clima Nº3 ---------------------------------------------------------------------------------------------------------------------------------------------

    const [weather1] = useState(['Asset Nº3 Desplegable de selección nº1.png', 'Asset Nº3 Desplegable de texto nº1.png', 'Asset Nº3 Icono de clima nº1.png']);
    const [weather2] = useState(['Asset Nº3 Desplegable de selección nº2.png', 'Asset Nº3 Desplegable de texto nº2.png', 'Asset Nº3 Icono de clima nº2.png']);
    const [weather3] = useState(['Asset Nº3 Desplegable de selección nº3.png', 'Asset Nº3 Desplegable de texto nº3.png', 'Asset Nº3 Icono de clima nº3.png']);
    const [weather4] = useState(['Asset Nº3 Desplegable de selección nº4.png', 'Asset Nº3 Desplegable de texto nº4.png', 'Asset Nº3 Icono de clima nº4.png']);
    const [weather5] = useState(['Asset Nº3 Desplegable de selección nº5.png', 'Asset Nº3 Desplegable de texto nº5.png', 'Asset Nº3 Icono de clima nº5.png']);
    const [weather6] = useState(['Asset Nº3 Desplegable de selección nº6.png', 'Asset Nº3 Desplegable de texto nº6.png', 'Asset Nº3 Icono de clima nº6.png']);
    const [weather7] = useState(['Asset Nº3 Desplegable de selección nº7.png', 'Asset Nº3 Desplegable de texto nº7.png', 'Asset Nº3 Icono de clima nº7.png']);
    const [weather8] = useState(['Asset Nº3 Desplegable de selección nº8.png', 'Asset Nº3 Desplegable de texto nº8.png', 'Asset Nº3 Icono de clima nº8.png']);
    const [weather9] = useState(['Asset Nº3 Desplegable de selección nº9.png', 'Asset Nº3 Desplegable de texto nº9.png', 'Asset Nº3 Icono de clima nº9.png']);
    const [weather10] = useState(['Asset Nº3 Desplegable de selección nº10.png', 'Asset Nº3 Desplegable de texto nº10.png', 'Asset Nº3 Icono de clima nº10.png']);
    const [weather11] = useState(['Asset Nº3 Desplegable de selección nº11.png', 'Asset Nº3 Desplegable de texto nº11.png', 'Asset Nº3 Icono de clima nº11.png']);
    const [weather12] = useState(['Asset Nº3 Desplegable de selección nº12.png', 'Asset Nº3 Desplegable de texto nº12.png', 'Asset Nº3 Icono de clima nº12.png']);

    const [weathers] = useState([weather1, weather2, weather3, weather4, weather5, weather6, weather7, weather8, weather9, weather10, weather11, weather12]);

    const [hideWeathers, setHideWeathers] = useState(true);

    const handleHideWeathers = () => {
        setHideWeathers(!hideWeathers);
    };

    const [activeWeather, setActiveWeather] = useState(0);

    const [hideWeatherContext, setHideWeatherContext] = useState(true);

    const handleHideWeatherContext = () => {
        setHideWeatherContext(!hideWeatherContext);
    };

    // Escenarios Nº7 ----------------------------------------------------------------------------------------------------------------------------------------

    const [scenario1] = useState(['Asset 7 n1 Fondo Completo.png', 'Asset 7 n1 Fondo scrolleable1.png', 'Asset 7 n1 Fondo scrolleable2.png', 'Asset 7 n1 Fondo Desplegables.png']);
    const [scenario2] = useState(['Asset 7 n2 Fondo completo.png', 'Asset 7 n2 Fondo scrolleable1.png', 'Asset 7 n2 Fondo scrolleable2.png', 'Asset 7 n2 Fondo scrolleable3.png', 'Asset 7 n1 Fondo Desplegables.png', "Asset 7 n2 Fondo.png"]);
    const [scenario3] = useState(['Asset 7 n3 Cinta superior.png', 'Asset 7 n3 Fondo scrolleable1.png', 'Asset 7 n3 Fondo scrolleable2.png', 'Asset 7 n3 Fondo scrolleable3.png', 'Asset 7 n3 Fondo scrolleable4.png', 'Asset 7 n3 Fondo scrolleable5.png', 'Asset 7 n3 Fondo scrolleable6.png', 'Asset 7 Barra de perfiles.png', 'Asset 7 n1 Fondo Desplegables.png']);

    const [scenarios] = useState([scenario1, scenario2, scenario3]);

    const [backgroundNumber, setBackgroundNumber] = useState(0);

    // Tablero Nº8 -------------------------------------------------------------------------------------------------------------------------------------------

    const [tablePosImage, setTablePosImage] = useState(['Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png']);
    const [tablePosImageSpecial, setTablePosImageSpecial] = useState(['Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png', 'Placeholder/Nada.png']);

    const changeImagePos = (index) => {
        if (cursorView === cursorViewBlank) {
            setCursorView(tablePosImage[index]);
            setTablePosImage(values => values.map((value, i) => i === index ? cursorView : value));
            setTablePosImageSpecial(values => values.map((value, i) => i === index ? cursorView : value));
        } else if (cursorView.includes('Tokens universales')) {
            setTablePosImageSpecial(values => values.map((value, i) => i === index ? cursorView : value));
            setCursorView(cursorViewBlank);
        } else {
            setTablePosImage(values => values.map((value, i) => i === index ? cursorView : value));
            setCursorView(cursorViewBlank);
        }
    }

    const [opacity] = useState(0);

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
        if (activeArray !== null) {
            activeArray.map((token, index) => {
                let tokenComplete = menuType+token;
                if (tokenComplete === cursorView && index < activeArray.length - 1) {
                    setCursorView(menuType+activeArray[index + 1]);
                } else if (tokenComplete === cursorView && index === activeArray.length -1) {
                    setCursorView(cursorViewBlank);
                    setActiveArray(null);
                }
            });
        } else {
            if (cursorView !== cursorViewBlank) {
                setCursorView(cursorViewBlank);
            }
        }
    }

    const [cursorViewBlank] = useState('Placeholder/Nada.png');

    const [cursorView, setCursorView] = useState(cursorViewBlank);

    const [hideCursor, setHideCursor] = useState(false);

    const [isClosedBlocker, setIsClosedBlocker] = useState(false);

    const handleClickBlocker = () => {
        setIsClosedBlocker(!isClosedBlocker);
    };

    // -----------------------------------------------------------------------------------------------------------------------------------------------------

    const isBackgroundVisible = (number) => {
        return backgroundNumber === number ? false : true;
    };

    const [positionFromLeft1, setPositionFromLeft1] = useState(-1920);
    const [positionFromLeft2, setPositionFromLeft2] = useState(-1920);
    const [positionFromLeft3, setPositionFromLeft3] = useState(-1920);
    const [positionFromLeft4, setPositionFromLeft4] = useState(-1920);
    const [positionFromLeft5, setPositionFromLeft5] = useState(-1920);
    const [positionFromLeft6, setPositionFromLeft6] = useState(-1920);
    const [positionFromRight, setPositionFromRight] = useState(0);
    const [positionFromRight2, setPositionFromRight2] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (positionFromLeft1 < 0) {
                setPositionFromLeft1(positionFromLeft1 + 1);
            } else {
                setPositionFromLeft1(-1920);
            }

            if (positionFromLeft2 < 0) {
                setPositionFromLeft2(positionFromLeft2 + 2);
            } else {
                setPositionFromLeft2(-1920);
            }

            if (positionFromLeft3 < 0) {
                setPositionFromLeft3(positionFromLeft3 + 3);
            } else {
                setPositionFromLeft3(-1920);
            }

            if (positionFromLeft4 < 0) {
                setPositionFromLeft4(positionFromLeft4 + 4);
            } else {
                setPositionFromLeft4(-1920);
            }

            if (positionFromLeft5 < 0) {
                setPositionFromLeft5(positionFromLeft5 + 5);
            } else {
                setPositionFromLeft5(-1920);
            }

            if (positionFromLeft6 < 0) {
                setPositionFromLeft6(positionFromLeft6 + 6);
            } else {
                setPositionFromLeft6(-1920);
            }

            if (positionFromRight > -1920) {
                setPositionFromRight(positionFromRight - 1);
            } else {
                setPositionFromRight(0);
            }

            if (positionFromRight2 > -1920) {
                setPositionFromRight2(positionFromRight2 - 2);
            } else {
                setPositionFromRight2(0);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [positionFromLeft1, positionFromLeft2, positionFromLeft3, positionFromLeft4, positionFromLeft5, positionFromLeft6, positionFromRight, positionFromRight2]);

    return (
        <div className='page-container' onMouseMove={changePosition} onClick={advanceArray}
            style={{
                width: '1920px',
                height: '1080px',
                overflowX: 'hidden',
                overflowY: 'hidden',
                scrollbarWidth: 'none'
            }}
        >

            <div className='background1' hidden={isBackgroundVisible(0)}>
                <img
                    src={require('../Resources/Nº 7 Escenarios/'+scenarios[0][0])}
                    alt='background11'
                    style={{
                        position: 'absolute',
                        
                    }}
                />

                <div
                    style={{
                        position: 'relative',
                        zIndex: '2',
                        left: '0px',
                        top: '0px',
                        width: '1920px',
                        height: '1080px',
                        pointerEvents: 'none'
                    }}
                >

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[0][1])}
                        alt='background12'
                        style={{
                            position: 'absolute',
                            zIndex: '1',
                            left: `${positionFromRight}px`
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[0][2])}
                        alt='background13'
                        style={{
                            position: 'absolute',
                            zIndex: '2',
                            left: `${positionFromRight2}px`
                        }}
                    />

                </div>

                <img
                    src={require('../Resources/Nº 7 Escenarios/'+scenarios[0][3])}
                    alt='background14'
                    style={{
                        position: 'absolute',
                        zIndex: '3',
                        left: '0px',
                        top: '0px'
                    }}
                />
            </div>

            <div className='background2' hidden={isBackgroundVisible(1)}>
                <img
                    src={require('../Resources/Nº 7 Escenarios/'+scenarios[1][0])}
                    alt='background21'
                    style={{
                        position: 'absolute',
                        zIndex: '1'
                    }}
                />

                <div
                    style={{
                        position: 'relative',
                        zIndex: '0',
                        left: '0px',
                        top: '0px',
                        width: '1920px',
                        height: '1080px',
                        pointerEvents: 'none'
                    }}
                >

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[1][5])}
                        alt='background22'
                        style={{
                            position: 'absolute',
                            left: `0px`,
                            zIndex: '0'
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[1][1])}
                        alt='background22'
                        style={{
                            position: 'absolute',
                            left: `${positionFromLeft1}px`,
                            zIndex: '1'
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[1][2])}
                        alt='background23'
                        style={{
                            position: 'absolute',
                            left: `${positionFromLeft2}px`,
                            zIndex: '2'
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[1][3])}
                        alt='background24'
                        style={{
                            position: 'absolute',
                            left: `${positionFromLeft3}px`,
                            zIndex: '3'
                        }}
                    />

                </div>

                <img
                    src={require('../Resources/Nº 7 Escenarios/'+scenarios[1][4])}
                    alt='background25'
                    style={{
                        position: 'absolute',
                        zIndex: '2',
                        left: '0px',
                        top: '0px'
                    }}
                />
            </div>

            <div className='background3' hidden={isBackgroundVisible(2)}>
                <img
                    src={require('../Resources/Nº 7 Escenarios/'+scenarios[2][0])}
                    alt='background31'
                    style={{
                        position: 'absolute'
                    }}
                />

                <div
                    style={{
                        position: 'relative',
                        zIndex: '1',
                        left: '0px',
                        top: '0px',
                        width: '1920px',
                        height: '1080px',
                        pointerEvents: 'none'
                    }}
                >

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[2][1])}
                        alt='background32'
                        style={{
                            position: 'absolute',
                            left: `${positionFromLeft1}px`,
                            zIndex: '1'
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[2][2])}
                        alt='background33'
                        style={{
                            position: 'absolute',
                            left: `${positionFromLeft2}px`,
                            zIndex: '2'
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[2][3])}
                        alt='background34'
                        style={{
                            position: 'absolute',
                            left: `${positionFromLeft3}px`,
                            zIndex: '3'
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[2][4])}
                        alt='background35'
                        style={{
                            position: 'absolute',
                            left: `${positionFromLeft4}px`,
                            zIndex: '4'
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[2][5])}
                        alt='background36'
                        style={{
                            position: 'absolute',
                            left: `${positionFromLeft5}px`,
                            zIndex: '5'
                        }}
                    />

                    <img
                        src={require('../Resources/Nº 7 Escenarios/'+scenarios[2][6])}
                        alt='background37'
                        style={{
                            position: 'absolute',
                            left: `${positionFromLeft6}px`,
                            zIndex: '6'
                        }}
                    />

                </div>

                <img
                    src={require('../Resources/Nº 7 Escenarios/'+scenarios[2][7])}
                    alt='background38'
                    style={{
                        position: 'absolute',
                        zIndex: '2',
                        left: '0px',
                        top: '0px'
                    }}
                />

                <img
                    src={require('../Resources/Nº 7 Escenarios/'+scenarios[2][8])}
                    alt='background39'
                    style={{
                        position: 'absolute',
                        zIndex: '2',
                        left: '0px',
                        top: '0px'
                    }}
                />
            </div>

            <div className="cursor-style" ref={cursor}
                style={{
                    width: '360px',
                    height: '210px',
                    pointerEvents: 'none',
                    zIndex: '6',
                    position: 'fixed',
                }}
            >
                <img
                    src={require(`../Resources/${cursorView}`)}
                    alt='Cursor'
                    hidden={hideCursor}
                    style={{
                        width: '10rem',
                        height: '10rem',
                        position: 'absolute',
                        top: '-150px',
                        left: '-75px',
                        userSelect: 'none'
                    }}
                />

                <img
                    src={require(`../Resources/Nº 1 Objetivo secundario/${objectives[activeObjective][1]}`)}
                    alt='context-objective'
                    hidden={hideContextBlock}
                    style={{
                        userSelect: 'none',
                        position: 'absolute'
                    }}
                />

                <img
                    src={require(`../Resources/Nº 2 interlocutor/${interlocutors[activeInterlocutor][1]}`)}
                    alt='context-interlocutor'
                    hidden={hideInterlocutorContext}
                    style={{
                        userSelect: 'none',
                        position: 'absolute'
                    }}
                />

                <img
                    src={require(`../Resources/Nº 3 Clima/${weathers[activeWeather][1]}`)}
                    alt='context-weather'
                    hidden={hideWeatherContext}
                    style={{
                        userSelect: 'none',
                        position: 'absolute'
                    }}
                />
            </div>

            <div className='objectives-button'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 1 Objetivo secundario/'+objectives[activeObjective][2])})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '120px',
                    height: '120px',
                    position: 'absolute',
                    top: '6px',
                    left: '12px',
                    zIndex: '3',
                    cursor: 'pointer'
                }}
                onClick={() => {
                    if (!isClosedBlocker) handleHideObjectives();
                }}
                onMouseEnter={handleHideContextBlock}
                onMouseLeave={handleHideContextBlock}
            >
            </div>

            <div className='objectives-menu' hidden={hideObjectives}
                style={{
                    position: 'absolute',
                    top: '126px',
                    left: '20px',
                    zIndex: '4'
                }}
            >
                <ObjectivesMenu objectives={objectives} handleHideObjectives={handleHideObjectives} setActiveObjective={setActiveObjective}></ObjectivesMenu>
            </div>

            <div className='interlocutor-button'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 2 interlocutor/'+interlocutors[activeInterlocutor][2])})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '120px',
                    height: '120px',
                    position: 'absolute',
                    top: '6px',
                    left: '150px',
                    zIndex: '3',
                    cursor: 'pointer'
                }}
                onClick={() => {
                    if (!isClosedBlocker) handleHideInterlocutors();
                }}
                onMouseEnter={handleHideInterlocutorContext}
                onMouseLeave={handleHideInterlocutorContext}
            >
            </div>

            <div className='interlocutor-menu' hidden={hideInterlocutors}
                style={{
                    position: 'absolute',
                    top: '126px',
                    left: '158px',
                    zIndex: '4'
                }}
            >
                <ConversationalPartner interlocutors={interlocutors} handleHideInterlocutors={handleHideInterlocutors} setActiveInterlocutor={setActiveInterlocutor}></ConversationalPartner>
            </div>

            <div className='weather-button'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 3 Clima/'+weathers[activeWeather][2])})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '120px',
                    height: '120px',
                    position: 'absolute',
                    top: '6px',
                    left: '288px',
                    zIndex: '3',
                    cursor: 'pointer'
                }}
                onClick={() => {
                    if (!isClosedBlocker) handleHideWeathers();
                }}
                onMouseEnter={handleHideWeatherContext}
                onMouseLeave={handleHideWeatherContext}
            >
            </div>

            <div className='weather-menu' hidden={hideWeathers}
                style={{
                    position: 'absolute',
                    top: '126px',
                    left: '296px',
                    zIndex: '4'
                }}
            >
                <WeatherMenu weathers={weathers} handleHideWeathers={handleHideWeathers} setActiveWeather={setActiveWeather}></WeatherMenu>
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
                    cursor: 'pointer',
                    right: '240px',
                    zIndex: '3'
                }}
                onClick={handleClickBlocker}
            ></div>

            <div className='background-changer'
                style={{
                    position: 'absolute',
                    top: '30px',
                    right: '140px',
                    cursor: 'pointer',
                    zIndex: '3'
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
                    zIndex: '3'
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
                    zIndex: '3',
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
                    zIndex: '21'
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
                    zIndex: '3',
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
                    zIndex: '21'
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
                    zIndex: '3',
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
                    zIndex: '21'
                }}
            >
                <SpecialTokens tokensEspeciales={tokensEspeciales} handleHideSpecialTokens={handleHideSpecialTokens} changeCurrentSelectedToken={changeCurrentSelectedToken}></SpecialTokens>
            </div>

            <div className='misc-bars'
                style={{
                    position: 'absolute',
                    bottom: '204px',
                    left: '54px',
                    zIndex: '3'
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

            <div className='altered-condition-1'
                style={{
                    position: 'absolute',
                    bottom: '93px',
                    left: '183px',
                    zIndex: '21'
                }}
            >
                <AlteredCondition></AlteredCondition>
            </div>

            <div className='altered-condition-2'
                style={{
                    position: 'absolute',
                    bottom: '93px',
                    left: '417px',
                    zIndex: '21'
                }}
            >
                <AlteredCondition></AlteredCondition>
            </div>

            <div className='altered-condition-3'
                style={{
                    position: 'absolute',
                    bottom: '93px',
                    left: '651px',
                    zIndex: '21'
                }}
            >
                <AlteredCondition></AlteredCondition>
            </div>

            <div className='altered-condition-4'
                style={{
                    position: 'absolute',
                    bottom: '93px',
                    left: '885px',
                    zIndex: '21'
                }}
            >
                <AlteredCondition></AlteredCondition>
            </div>

            <div className='altered-condition-5'
                style={{
                    position: 'absolute',
                    bottom: '93px',
                    left: '1145px',
                    zIndex: '21'
                }}
            >
                <AlteredConditionEnemies></AlteredConditionEnemies>
            </div>

            <div className='altered-condition-6'
                style={{
                    position: 'absolute',
                    bottom: '93px',
                    left: '1379px',
                    zIndex: '21'
                }}
            >
                <AlteredConditionEnemies></AlteredConditionEnemies>
            </div>

            <div className='altered-condition-7'
                style={{
                    position: 'absolute',
                    bottom: '93px',
                    left: '1613px',
                    zIndex: '21'
                }}
            >
                <AlteredConditionEnemies></AlteredConditionEnemies>
            </div>

            <div className='altered-condition-8'
                style={{
                    position: 'absolute',
                    bottom: '93px',
                    left: '1847px',
                    zIndex: '21'
                }}
            >
                <AlteredConditionEnemies></AlteredConditionEnemies>
            </div>

            <img className='table-pos-1-image'
                src={require('../Resources/'+tablePosImage[0])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '485px',
                    zIndex: '7'
                }}
            />

            <img className='table-pos-1-image-special'
                src={require('../Resources/'+tablePosImageSpecial[0])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '485px',
                    zIndex: '8'
                }}
            />

            <button className='table-pos-1-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '362px',
                    left: '512px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(0)}
            >
            </button>

            <img className='table-pos-2-image'
                src={require('../Resources/'+tablePosImage[1])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '582px',
                    zIndex: '7'
                }}
            />

            <img className='table-pos-2-image-special'
                src={require('../Resources/'+tablePosImageSpecial[1])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '582px',
                    zIndex: '8'
                }}
            />

            <button className='table-pos-2-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '362px',
                    left: '614px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(1)}
            >
            </button>

            <img className='table-pos-3-image'
                src={require('../Resources/'+tablePosImage[2])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '680px',
                    zIndex: '7'
                }}
            />

            <img className='table-pos-3-image-special'
                src={require('../Resources/'+tablePosImageSpecial[2])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '680px',
                    zIndex: '8'
                }}
            />

            <button className='table-pos-3-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '362px',
                    left: '712px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(2)}
            >
            </button>

            <img className='table-pos-4-image'
                src={require('../Resources/'+tablePosImage[3])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '780px',
                    zIndex: '7'
                }}
            />

            <img className='table-pos-4-image-special'
                src={require('../Resources/'+tablePosImageSpecial[3])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '780px',
                    zIndex: '8'
                }}
            />

            <button className='table-pos-4-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '362px',
                    left: '806px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(3)}
            >
            </button>

            <img className='table-pos-5-image'
                src={require('../Resources/'+tablePosImage[4])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '1025px',
                    zIndex: '7'
                }}
            />

            <img className='table-pos-5-image-special'
                src={require('../Resources/'+tablePosImageSpecial[4])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '1025px',
                    zIndex: '8'
                }}
            />

            <button className='table-pos-5-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '362px',
                    left: '1047px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(4)}
            >
            </button>

            <img className='table-pos-6-image'
                src={require('../Resources/'+tablePosImage[5])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '1122px',
                    zIndex: '7'
                }}
            />

            <img className='table-pos-6-image-special'
                src={require('../Resources/'+tablePosImageSpecial[5])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '1122px',
                    zIndex: '8'
                }}
            />

            <button className='table-pos-6-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '362px',
                    left: '1144px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(5)}
            >
            </button>

            <img className='table-pos-7-image'
                src={require('../Resources/'+tablePosImage[6])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '1220px',
                    zIndex: '7'
                }}
            />

            <img className='table-pos-7-image-special'
                src={require('../Resources/'+tablePosImageSpecial[6])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '1220px',
                    zIndex: '8'
                }}
            />

            <button className='table-pos-7-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '362px',
                    left: '1240px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(6)}
            >
            </button>

            <img className='table-pos-8-image'
                src={require('../Resources/'+tablePosImage[7])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '1318px',
                    zIndex: '7'
                }}
            />

            <img className='table-pos-8-image-special'
                src={require('../Resources/'+tablePosImageSpecial[7])}
                alt='table2'
                style={{
                    position: 'absolute',
                    width: '119px',
                    height: '119px',
                    top: '280px',
                    left: '1318px',
                    zIndex: '8'
                }}
            />

            <button className='table-pos-8-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '362px',
                    left: '1336px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(7)}
            >
            </button>

            <img className='table-pos-9-image'
                src={require('../Resources/'+tablePosImage[8])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '435px',
                    zIndex: '9'
                }}
            />

            <img className='table-pos-9-image-special'
                src={require('../Resources/'+tablePosImageSpecial[8])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '435px',
                    zIndex: '10'
                }}
            />

            <button className='table-pos-9-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '417px',
                    left: '475px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(8)}
            >
            </button>

            <img className='table-pos-10-image'
                src={require('../Resources/'+tablePosImage[9])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '540px',
                    zIndex: '9'
                }}
            />

            <img className='table-pos-10-image-special'
                src={require('../Resources/'+tablePosImageSpecial[9])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '540px',
                    zIndex: '10'
                }}
            />

            <button className='table-pos-10-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '417px',
                    left: '579px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(9)}
            >
            </button>

            <img className='table-pos-11-image'
                src={require('../Resources/'+tablePosImage[10])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '650px',
                    zIndex: '9'
                }}
            />

            <img className='table-pos-11-image-special'
                src={require('../Resources/'+tablePosImageSpecial[10])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '650px',
                    zIndex: '10'
                }}
            />

            <button className='table-pos-11-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '417px',
                    left: '688px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(10)}
            >
            </button>

            <img className='table-pos-12-image'
                src={require('../Resources/'+tablePosImage[11])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '760px',
                    zIndex: '9'
                }}
            />

            <img className='table-pos-12-image-special'
                src={require('../Resources/'+tablePosImageSpecial[11])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '760px',
                    zIndex: '10'
                }}
            />

            <button className='table-pos-12-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '417px',
                    left: '790px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(11)}
            >
            </button>

            <img className='table-pos-13-image'
                src={require('../Resources/'+tablePosImage[12])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '1030px',
                    zIndex: '9'
                }}
            />

            <img className='table-pos-13-image-special'
                src={require('../Resources/'+tablePosImageSpecial[12])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '1030px',
                    zIndex: '10'
                }}
            />

            <button className='table-pos-13-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '417px',
                    left: '1057px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(12)}
            >
            </button>

            <img className='table-pos-14-image'
                src={require('../Resources/'+tablePosImage[13])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '1140px',
                    zIndex: '9'
                }}
            />

            <img className='table-pos-14-image-special'
                src={require('../Resources/'+tablePosImageSpecial[13])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '1140px',
                    zIndex: '10'
                }}
            />

            <button className='table-pos-14-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '417px',
                    left: '1164px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(13)}
            >
            </button>

            <img className='table-pos-15-image'
                src={require('../Resources/'+tablePosImage[14])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '1250px',
                    zIndex: '9'
                }}
            />

            <img className='table-pos-15-image-special'
                src={require('../Resources/'+tablePosImageSpecial[14])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '1250px',
                    zIndex: '10'
                }}
            />

            <button className='table-pos-15-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '417px',
                    left: '1266px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(14)}
            >
            </button>

            <img className='table-pos-16-image'
                src={require('../Resources/'+tablePosImage[15])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '1357px',
                    zIndex: '9'
                }}
            />

            <img className='table-pos-16-image-special'
                src={require('../Resources/'+tablePosImageSpecial[15])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '132px',
                    height: '132px',
                    top: '325px',
                    left: '1357px',
                    zIndex: '10'
                }}
            />

            <button className='table-pos-16-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '40px',
                    top: '417px',
                    left: '1376px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(15)}
            >
            </button>

            <img className='table-pos-17-image'
                src={require('../Resources/'+tablePosImage[16])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '377px',
                    zIndex: '11'
                }}
            />

            <img className='table-pos-17-image-special'
                src={require('../Resources/'+tablePosImageSpecial[16])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '377px',
                    zIndex: '12'
                }}
            />

            <button className='table-pos-17-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '55px',
                    top: '475px',
                    left: '426px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(16)}
            >
            </button>

            <img className='table-pos-18-image'
                src={require('../Resources/'+tablePosImage[17])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '495px',
                    zIndex: '11'
                }}
            />

            <img className='table-pos-18-image-special'
                src={require('../Resources/'+tablePosImageSpecial[17])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '495px',
                    zIndex: '12'
                }}
            />

            <button className='table-pos-18-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '55px',
                    top: '475px',
                    left: '542px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(17)}
            >
            </button>

            <img className='table-pos-19-image'
                src={require('../Resources/'+tablePosImage[18])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '617px',
                    zIndex: '11'
                }}
            />

            <img className='table-pos-19-image-special'
                src={require('../Resources/'+tablePosImageSpecial[18])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '617px',
                    zIndex: '12'
                }}
            />

            <button className='table-pos-19-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '55px',
                    top: '475px',
                    left: '664px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(18)}
            >
            </button>

            <img className='table-pos-20-image'
                src={require('../Resources/'+tablePosImage[19])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '737px',
                    zIndex: '11'
                }}
            />

            <img className='table-pos-20-image-special'
                src={require('../Resources/'+tablePosImageSpecial[19])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '737px',
                    zIndex: '12'
                }}
            />

            <button className='table-pos-20-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '55px',
                    top: '475px',
                    left: '774px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(19)}
            >
            </button>

            <img className='table-pos-21-image'
                src={require('../Resources/'+tablePosImage[20])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '1041px',
                    zIndex: '11'
                }}
            />

            <img className='table-pos-21-image-special'
                src={require('../Resources/'+tablePosImageSpecial[20])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '1041px',
                    zIndex: '12'
                }}
            />

            <button className='table-pos-21-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '55px',
                    top: '475px',
                    left: '1075px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(20)}
            >
            </button>

            <img className='table-pos-22-image'
                src={require('../Resources/'+tablePosImage[21])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '1160px',
                    zIndex: '11'
                }}
            />

            <img className='table-pos-22-image-special'
                src={require('../Resources/'+tablePosImageSpecial[21])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '1160px',
                    zIndex: '11'
                }}
            />

            <button className='table-pos-22-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '55px',
                    top: '475px',
                    left: '1191px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(21)}
            >
            </button>

            <img className='table-pos-23-image'
                src={require('../Resources/'+tablePosImage[22])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '1281px',
                    zIndex: '11'
                }}
            />

            <img className='table-pos-23-image-special'
                src={require('../Resources/'+tablePosImageSpecial[22])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '1281px',
                    zIndex: '12'
                }}
            />

            <button className='table-pos-23-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '55px',
                    top: '475px',
                    left: '1310px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(22)}
            >
            </button>

            <img className='table-pos-24-image'
                src={require('../Resources/'+tablePosImage[23])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '1400px',
                    zIndex: '11'
                }}
            />

            <img className='table-pos-24-image-special'
                src={require('../Resources/'+tablePosImageSpecial[23])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '146px',
                    height: '146px',
                    top: '380px',
                    left: '1400px',
                    zIndex: '12'
                }}
            />

            <button className='table-pos-24-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '55px',
                    top: '475px',
                    left: '1426px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(23)}
            >
            </button>

            <img className='table-pos-25-image'
                src={require('../Resources/'+tablePosImage[24])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '300px',
                    zIndex: '13'
                }}
            />

            <img className='table-pos-25-image-special'
                src={require('../Resources/'+tablePosImageSpecial[24])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '300px',
                    zIndex: '14'
                }}
            />

            <button className='table-pos-25-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '70px',
                    top: '547px',
                    left: '370px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(24)}
            >
            </button>

            <img className='table-pos-26-image'
                src={require('../Resources/'+tablePosImage[25])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '437px',
                    zIndex: '13'
                }}
            />

            <img className='table-pos-26-image-special'
                src={require('../Resources/'+tablePosImageSpecial[25])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '437px',
                    zIndex: '14'
                }}
            />

            <button className='table-pos-26-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '70px',
                    top: '547px',
                    left: '500px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(25)}
            >
            </button>

            <img className='table-pos-27-image'
                src={require('../Resources/'+tablePosImage[26])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '572px',
                    zIndex: '13'
                }}
            />

            <img className='table-pos-27-image-special'
                src={require('../Resources/'+tablePosImageSpecial[26])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '572px',
                    zIndex: '14'
                }}
            />

            <button className='table-pos-27-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '70px',
                    top: '547px',
                    left: '633px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(26)}
            >
            </button>

            <img className='table-pos-28-image'
                src={require('../Resources/'+tablePosImage[27])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '708px',
                    zIndex: '13'
                }}
            />

            <img className='table-pos-28-image-special'
                src={require('../Resources/'+tablePosImageSpecial[27])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '708px',
                    zIndex: '14'
                }}
            />

            <button className='table-pos-28-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '70px',
                    top: '547px',
                    left: '763px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(27)}
            >
            </button>

            <img className='table-pos-29-image'
                src={require('../Resources/'+tablePosImage[28])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '1050px',
                    zIndex: '13'
                }}
            />

            <img className='table-pos-29-image-special'
                src={require('../Resources/'+tablePosImageSpecial[28])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '1050px',
                    zIndex: '14'
                }}
            />

            <button className='table-pos-29-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '70px',
                    top: '547px',
                    left: '1090px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(28)}
            >
            </button>

            <img className='table-pos-30-image'
                src={require('../Resources/'+tablePosImage[29])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '1187px',
                    zIndex: '13'
                }}
            />

            <img className='table-pos-30-image-special'
                src={require('../Resources/'+tablePosImageSpecial[29])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '1187px',
                    zIndex: '14'
                }}
            />

            <button className='table-pos-30-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '70px',
                    top: '547px',
                    left: '1220px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(29)}
            >
            </button>

            <img className='table-pos-31-image'
                src={require('../Resources/'+tablePosImage[30])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '1327px',
                    zIndex: '13'
                }}
            />

            <img className='table-pos-31-image-special'
                src={require('../Resources/'+tablePosImageSpecial[30])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '1327px',
                    zIndex: '14'
                }}
            />

            <button className='table-pos-31-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '70px',
                    top: '547px',
                    left: '1352px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(30)}
            >
            </button>

            <img className='table-pos-32-image'
                src={require('../Resources/'+tablePosImage[31])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '1462px',
                    zIndex: '13'
                }}
            />

            <img className='table-pos-32-image-special'
                src={require('../Resources/'+tablePosImageSpecial[31])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '162px',
                    height: '162px',
                    top: '455px',
                    left: '1462px',
                    zIndex: '14'
                }}
            />

            <button className='table-pos-32-button'
                style={{
                    position: 'absolute',
                    width: '70px',
                    height: '70px',
                    top: '547px',
                    left: '1485px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(31)}
            >
            </button>

            <img className='table-pos-33-image'
                src={require('../Resources/'+tablePosImage[32])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '208px',
                    zIndex: '15'
                }}
            />

            <img className='table-pos-33-image-special'
                src={require('../Resources/'+tablePosImageSpecial[32])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '208px',
                    zIndex: '16'
                }}
            />

            <button className='table-pos-33-button'
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '90px',
                    top: '639px',
                    left: '270px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(32)}
            >
            </button>

            <img className='table-pos-34-image'
                src={require('../Resources/'+tablePosImage[33])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '363px',
                    zIndex: '15'
                }}
            />

            <img className='table-pos-34-image-special'
                src={require('../Resources/'+tablePosImageSpecial[33])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '363px',
                    zIndex: '16'
                }}
            />

            <button className='table-pos-34-button'
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '90px',
                    top: '639px',
                    left: '420px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(33)}
            >
            </button>

            <img className='table-pos-35-image'
                src={require('../Resources/'+tablePosImage[34])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '520px',
                    zIndex: '15'
                }}
            />

            <img className='table-pos-35-image-special'
                src={require('../Resources/'+tablePosImageSpecial[34])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '520px',
                    zIndex: '16'
                }}
            />

            <button className='table-pos-35-button'
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '90px',
                    top: '639px',
                    left: '575px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(34)}
            >
            </button>

            <img className='table-pos-36-image'
                src={require('../Resources/'+tablePosImage[35])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '675px',
                    zIndex: '15'
                }}
            />

            <img className='table-pos-36-image-special'
                src={require('../Resources/'+tablePosImageSpecial[35])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '675px',
                    zIndex: '16'
                }}
            />

            <button className='table-pos-36-button'
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '90px',
                    top: '639px',
                    left: '725px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(35)}
            >
            </button>

            <img className='table-pos-37-image'
                src={require('../Resources/'+tablePosImage[36])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '1069px',
                    zIndex: '15'
                }}
            />

            <img className='table-pos-37-image-special'
                src={require('../Resources/'+tablePosImageSpecial[36])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '1069px',
                    zIndex: '16'
                }}
            />

            <button className='table-pos-37-button'
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '90px',
                    top: '639px',
                    left: '1100px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(36)}
            >
            </button>

            <img className='table-pos-38-image'
                src={require('../Resources/'+tablePosImage[37])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '1220px',
                    zIndex: '15'
                }}
            />

            <img className='table-pos-38-image-special'
                src={require('../Resources/'+tablePosImageSpecial[37])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '1220px',
                    zIndex: '16'
                }}
            />

            <button className='table-pos-38-button'
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '90px',
                    top: '639px',
                    left: '1246px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(37)}
            >
            </button>

            <img className='table-pos-39-image'
                src={require('../Resources/'+tablePosImage[38])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '1380px',
                    zIndex: '15'
                }}
            />

            <img className='table-pos-39-image-special'
                src={require('../Resources/'+tablePosImageSpecial[38])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '1380px',
                    zIndex: '16'
                }}
            />

            <button className='table-pos-39-button'
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '90px',
                    top: '639px',
                    left: '1393px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(38)}
            >
            </button>

            <img className='table-pos-40-image'
                src={require('../Resources/'+tablePosImage[39])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '1535px',
                    zIndex: '15'
                }}
            />

            <img className='table-pos-40-image-special'
                src={require('../Resources/'+tablePosImageSpecial[39])}
                alt='table1'
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    top: '552px',
                    left: '1535px',
                    zIndex: '16'
                }}
            />

            <button className='table-pos-40-button'
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '90px',
                    top: '639px',
                    left: '1545px',
                    zIndex: '20',
                    opacity: opacity
                }}
                onClick={() => changeImagePos(39)}
            >
            </button>
            
        </div>

    );

}