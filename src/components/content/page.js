import React from 'react';

const Content = ({name, skill, address, foto}) => {
    return (
        <div className='content'>
            {foto && <img src={foto} alt={name} />}
            <h1>{name}</h1>
            <p>{skill}</p>
            <p>{address}</p>
        </div>
    );
}

export default Content;