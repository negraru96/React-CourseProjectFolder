  import React from 'react';
  import './UserOutput.css';

  const userOutput = (props) => {

    return (
      <div className="UserOutput">
        <p>
        This is the first paragraph</p>
        <p> This is the second paragraph</p>
        <p> My username is: {props.userName} </p>
      </div>
    )
  };

  export default userOutput;
