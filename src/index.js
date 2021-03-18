import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Uren testen: const date = new Date(2021, 1, 1, 20);
const date = new Date();
const currentTime = date.getHours();

// Geeft de uren op dit moment
console.log(currentTime);

// Text voor de verschillende dagdelen
let greeting;

// Kleur voor de verschillende dagdelen
const customStyle = {
    color: ""
};

// Statement voor de verschillende dagdelen
if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
} else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
} else {
    greeting = "Good Night";
    customStyle.color = "blue";
}

// Aanmaken van de h1
// Text "greeting" toevoegen aan h1
// Kleur "customStyle" toevoegen aan h1
ReactDOM.render(
    <h1 className="heading" style={customStyle}>
        {greeting}
    </h1>,
    document.getElementById("root")
);

reportWebVitals();