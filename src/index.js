import React from 'react';
import ReactDOM from 'react-dom';

const firstName = "Pero";
const lastName = "Perić";

const element1 = <h1>Dobar dan!</h1>

const element2 = <h1>Bok {firstName}!</h1>

const element3 = <h1>{firstName} {lastName}</h1>

const element = <div>{element1} {element2} {element3}</div>;


ReactDOM.render(
  element,
  document.getElementById('root')
);


