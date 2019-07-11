import React from 'react';
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.length} />
    </div>
   );
};

export default person;
