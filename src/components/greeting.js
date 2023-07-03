import React from "react";

function Greeting(props) {
  return <div><h1>Hello, {props.name}!</h1>
  <h1>your username is : {props.username}</h1>
  </div>;
}

export default Greeting;