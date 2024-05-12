import React from 'react';

export default function WeatherMenu ({ weathers, handleHideWeathers, setActiveWeather }) {

    const setWeatherAndHide = (index) => {
        setActiveWeather(index);
        handleHideWeathers();
    }

    return (
        <div
            style={{
                position: 'absolute',
                width: '120px',
                height: '282px'
            }}
        >
            {weathers.map((weather, index) => (
                <img
                    key={weather}
                    src={require(`../Resources/Nº 3 Clima/`+weather[0])}
                    alt={`Token ${weather[0]}`}
                    style={{
                        width: '42px',
                        height: '42px',
                        padding: '5px',
                        cursor: 'pointer',
                        userSelect: 'none'
                    }}
                    onClick={() => setWeatherAndHide(index)}
                />
            ))}
        </div>
    );

}