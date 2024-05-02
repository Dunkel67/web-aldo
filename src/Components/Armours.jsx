import React, { useState } from 'react';

export default function Armours () {

    const [numbers] = useState(['Asset 15 Numero 0.png', 'Asset 15 Numero 1.png', 'Asset 15 Numero 2.png', 'Asset 15 Numero 3.png', 'Asset 15 Numero 4.png', 'Asset 15 Numero 5.png', 'Asset 15 Numero 6.png', 'Asset 15 Numero 7.png', 'Asset 15 Numero 8.png', 'Asset 15 Numero 9.png']);
    
    const [number11, setNumber11] = useState(0);
    const [number12, setNumber12] = useState(0);
    const [number13, setNumber13] = useState(0);
    const [number21, setNumber21] = useState(0);
    const [number22, setNumber22] = useState(0);
    const [number23, setNumber23] = useState(0);
    const [number31, setNumber31] = useState(0);
    const [number32, setNumber32] = useState(0);
    const [number33, setNumber33] = useState(0);
    const [number41, setNumber41] = useState(0);
    const [number42, setNumber42] = useState(0);
    const [number43, setNumber43] = useState(0);
    const [number51, setNumber51] = useState(0);
    const [number52, setNumber52] = useState(0);
    const [number61, setNumber61] = useState(0);
    const [number62, setNumber62] = useState(0);
    const [number71, setNumber71] = useState(0);
    const [number72, setNumber72] = useState(0);
    const [number81, setNumber81] = useState(0);
    const [number82, setNumber82] = useState(0);

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

    return (
        <div
            style={{
                width: '1695px',
                height: '114px',
                display: 'flex'
            }}
        >

            <div className='armours-1'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 15 Marcadores de armadura/Asset 15 nº 1 Base.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '30px',
                    height: '114px',
                    display: 'flex',
                    zIndex: '5'
                }}
            >
                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '8px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number11]}`)}
                        alt={`Numero ${number11}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber11, number11)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber11, number11);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '47px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number12]}`)}
                        alt={`Numero ${number12}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber12, number12)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber12, number12);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '86px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number13]}`)}
                        alt={`Numero ${number13}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber13, number13)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber13, number13);
                        }}
                    />
                </div>

            </div>

            <div className='armours-2'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 15 Marcadores de armadura/Asset 15 nº 1 Base.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '204px',
                    width: '30px',
                    height: '114px',
                    display: 'flex',
                    zIndex: '5'
                }}
            >
                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '8px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number21]}`)}
                        alt={`Numero ${number21}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber21, number21)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber21, number21);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '47px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number22]}`)}
                        alt={`Numero ${number22}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber22, number22)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber22, number22);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '86px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number23]}`)}
                        alt={`Numero ${number23}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber23, number23)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber23, number23);
                        }}
                    />
                </div>

            </div>

            <div className='armours-3'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 15 Marcadores de armadura/Asset 15 nº 1 Base.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '204px',
                    width: '30px',
                    height: '114px',
                    display: 'flex',
                    zIndex: '5'
                }}
            >
                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '8px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number31]}`)}
                        alt={`Numero ${number31}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber31, number31)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber31, number31);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '47px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number32]}`)}
                        alt={`Numero ${number32}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber32, number32)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber32, number32);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '86px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number33]}`)}
                        alt={`Numero ${number33}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber33, number33)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber33, number33);
                        }}
                    />
                </div>

            </div>

            <div className='armours-4'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 15 Marcadores de armadura/Asset 15 nº 1 Base.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '204px',
                    width: '30px',
                    height: '114px',
                    display: 'flex',
                    zIndex: '5'
                }}
            >
                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '8px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number41]}`)}
                        alt={`Numero ${number41}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber41, number41)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber41, number41);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '47px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number42]}`)}
                        alt={`Numero ${number42}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber42, number42)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber42, number42);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '86px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number43]}`)}
                        alt={`Numero ${number43}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber43, number43)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber43, number43);
                        }}
                    />
                </div>

            </div>

            <div className='armours-5'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 15 Marcadores de armadura/Asset 15 nº 1 Base.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '231px',
                    width: '30px',
                    height: '114px',
                    display: 'flex',
                    zIndex: '5'
                }}
            >
                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '8px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number51]}`)}
                        alt={`Numero ${number51}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber51, number51)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber51, number51);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '86px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number52]}`)}
                        alt={`Numero ${number52}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber52, number52)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber52, number52);
                        }}
                    />
                </div>

            </div>

            <div className='armours-6'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 15 Marcadores de armadura/Asset 15 nº 1 Base.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '204px',
                    width: '30px',
                    height: '114px',
                    display: 'flex',
                    zIndex: '5'
                }}
            >
                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '8px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number61]}`)}
                        alt={`Numero ${number61}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber61, number61)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber61, number61);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '86px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number62]}`)}
                        alt={`Numero ${number62}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber62, number62)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber62, number62);
                        }}
                    />
                </div>

            </div>

            <div className='armours-7'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 15 Marcadores de armadura/Asset 15 nº 1 Base.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '204px',
                    width: '30px',
                    height: '114px',
                    display: 'flex',
                    zIndex: '5'
                }}
            >
                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '8px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number71]}`)}
                        alt={`Numero ${number71}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber71, number71)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber71, number71);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '86px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number72]}`)}
                        alt={`Numero ${number72}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber72, number72)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber72, number72);
                        }}
                    />
                </div>

            </div>

            <div className='armours-8'
                style={{
                    backgroundImage: `url(${require('../Resources/Nº 15 Marcadores de armadura/Asset 15 nº 1 Base.png')})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '204px',
                    width: '30px',
                    height: '114px',
                    display: 'flex',
                    zIndex: '5'
                }}
            >
                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '8px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number81]}`)}
                        alt={`Numero ${number81}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber81, number81)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber81, number81);
                        }}
                    />
                </div>

                <div
                   style={{
                    width: '16px',
                    height: '20px',
                    marginLeft: '7px',
                    marginTop: '86px',
                    position: 'absolute'
                    }} 
                >
                    <img
                        src={require(`../Resources/Nº 15 Marcadores de armadura/${numbers[number82]}`)}
                        alt={`Numero ${number82}`}
                        style={{
                            width: '12px',
                            height: '18px',
                            zIndex: '5',
                            margin: 'auto',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                        onClick={() => increaseScore(setNumber82, number82)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            decreaseScore(setNumber82, number82);
                        }}
                    />
                </div>

            </div>

        </div>
    );

}