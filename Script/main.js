// File: main.js
// GUI Assignment: HW 3-Create multiplication table
// Victoria Munroe victoria_munroe@student.uml.edu
// Description: Website to take input & return multiplication table
// This page holds the html scaffoliding

// Copyright (c) 2023 by VMunroe. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
// created by VM 06/02/23

// Sources: 
// w3Schools w3schools.com
// TutorialsPoint 
// Traversy https://www.youtube.com/watch?v=hdI2bqOjy3c&t=4419s
 

var minXInput= document.querySelector("#minX");
var minYInput =document.querySelector("#minY");
var maxXInput =document.querySelector("#maxX");
var maxYInput = maxY = document.querySelector("#maxY");
const table = document.getElementById("mlttable");
var error=false;
var errmsg="None";
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn')
const tableRange= [null, null, null,null];  //min x, min y, max x, max y

// Disable calculate until no errors
btn.disabled = true;


//fixme range needs to be -50 &50
function validate( num) {
    if ((num < 0 )||( num > 5)){
        error = true;
        errmsg = 'Input number between -50 and 50';
    }
    if (!error && tableRange[0]!=null&& tableRange[1]!=null&& tableRange[2]!=null && tableRange[3]!=null) { btn.disabled = false; }
    else {btn.disabled = true;}
    
    msg.classList.add('error');
    msg.innerHTML = errmsg;
    // if (error){msg.classList.add(errmsg);}
    console.log(errmsg);
}

// Input Listeners

minXInput.addEventListener('change', e => {
    e.preventDefault();
    tableRange[0] = Number(minXInput.value);
    console.log(tableRange[0]);
    validate(tableRange[0]);
});
minYInput.addEventListener('change', e => {
    e.preventDefault();
    tableRange[1] = Number(minYInput.value);
    console.log(tableRange[1]);
    validate(tableRange[1]);
});
maxXInput.addEventListener('change', e => {
    e.preventDefault();
    tableRange[2] = Number(maxXInput.value);
    console.log(tableRange[2]);
    validate(tableRange[2]);
});
maxYInput.addEventListener('change', e => {
    e.preventDefault();
    tableRange[3] = Number(maxYInput.value);
    console.log(tableRange[3]);
    validate(tableRange[3]);
    console.log("Min X: " + tableRange[0] + " Min Y:" + tableRange[1] + " Max X" + tableRange[2] + " Max Y" + tableRange[3]);
});
  
btn.addEventListener('click', e => {
    e.preventDefault();
    // makeTable();
   
  });