import React from 'react';

export default function ConversationalPartner ({ interlocutors, handleHideInterlocutors, setActiveInterlocutor }) {

    const setInterlocutorAndHide = (index) => {
        setActiveInterlocutor(index);
        handleHideInterlocutors();
    }

    return (
        <div
            style={{
                position: 'absolute',
                width: '120px',
                height: '141px'
            }}
        >
            {interlocutors.map((interlocutor, index) => (
                <img
                    key={interlocutor}
                    src={require(`../Resources/Nº 2 interlocutor/`+interlocutor[0])}
                    alt={`Token ${interlocutor[0]}`}
                    style={{
                        width: '42px',
                        height: '42px',
                        padding: '5px',
                        cursor: 'pointer',
                        userSelect: 'none'
                    }}
                    onClick={() => setInterlocutorAndHide(index)}
                />
            ))}
        </div>
    );

}