import React from 'react';

export default function ObjectivesMenu ({ objectives, handleHideObjectives, setActiveObjective }) {

    const setObjectiveAndHide = (index) => {
        setActiveObjective(index);
        handleHideObjectives();
    }

    return (
        <div
            style={{
                position: 'absolute',
                width: '120px',
                height: '282px'
            }}
        >
            {objectives.map((objective, index) => (
                <img
                    key={objective}
                    src={require(`../Resources/Nº 1 Objetivo secundario/`+objective[0])}
                    alt={`Token ${objective[0]}`}
                    style={{
                        width: '42px',
                        height: '42px',
                        padding: '5px',
                        cursor: 'pointer',
                        userSelect: 'none'
                    }}
                    onClick={() => setObjectiveAndHide(index)}
                />
            ))}
        </div>
    );

}