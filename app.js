'use strict'

console.log('you\'re taking everything i worked for mf');

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

function setup() {
    createCanvas(720, 400);
    ellipse(50,50,80,80);
}

