import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <input type="text" placeholder="Name"/>
        <input type="numbr" placeholder="Age"/>
        <button onClick={props.personAdded}>Add Person</button>
    </div>
);

export default addPerson;