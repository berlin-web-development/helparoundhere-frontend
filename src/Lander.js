import React from 'react';

const Lander = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1>HelpAroundHere</h1>
      </div>
      <div className="row">
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default Lander;
