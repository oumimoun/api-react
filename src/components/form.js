import React, { useState } from 'react';

function NameForm() {
    const [name, setName] = useState();

    const handleChange = (event) =>{
        setName(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("hello! "+ name);
        setName();
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <h1>name: </h1>
            <input type='text' value={name} onChange={handleChange} />
            <button type='sublit'>click me please</button>
        </form>
    </div>
}


export default NameForm;