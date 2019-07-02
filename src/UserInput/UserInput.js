  import React from 'react';

  const userInput = (props) => {
    const style = {
      border: '2px solid #ffcc00'

    };

    return <input
    type='text'
    style={style}
    onChange={props.changed}
    value={props.currentName}/>;
  };

  export default userInput;
