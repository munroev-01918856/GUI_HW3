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
 

/*
Todo:
fix validation
removing error message
***not returning larger tables****
****clear table ****
***can't format just headers****
***add column header****
make prettier
input alignment off
*/

var minXInput= document.querySelector("#minX");
var minYInput =document.querySelector("#minY");
var maxXInput =document.querySelector("#maxX");
var maxYInput = maxY = document.querySelector("#maxY");
const table = document.getElementById("mlttable");
var error=false;
var errmsg="";
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn')
const tableRange= [null, null, null,null];  //min x, min y, max x, max y

// Disable calculate until no errors
btn.disabled = true;



function validate(buttonName, num) {
    const regEx = /^-?[0-9]+$/;
    if (regEx.test(num.toString()) == true) { console.log("hell"); }
    if (!regEx.test(num.toString())) {
        error = true;
        console.log("true")
        errmsg = buttonName + "number must be a whole number";
    }
    else if ((num < -50) || (num > 50)) {
        error = true;
        errmsg = buttonName + "must be between -50 and 50";
    }
    else {
        error = false;
        errmsg = "";
        console.log("hi");
    }

    if (!error && tableRange[0]!=null&& tableRange[1]!=null&& tableRange[2]!=null && tableRange[3]!=null) { btn.disabled = false; }
    else {btn.disabled = true;}
    
    msg.classList.add('error');
    msg.innerHTML = errmsg;
    return error;
}

// Input Listeners

minXInput.addEventListener('change', e => {
    e.preventDefault();
    tableRange[0] = Number(minXInput.value);
    validate("Minimum row number ", tableRange[0]);
});
minYInput.addEventListener('change', e => {
    e.preventDefault();
    tableRange[1] = Number(minYInput.value);
    validate("Minimum column number ",tableRange[1]);
});
maxXInput.addEventListener('change', e => {
    e.preventDefault();
    tableRange[2] = Number(maxXInput.value);
    validate("Maximum row number",tableRange[2]);
});
maxYInput.addEventListener('change', e => {
    e.preventDefault();
    tableRange[3] = Number(maxYInput.value);
    validate("Maximum column number",tableRange[3]);
    
});
  
btn.addEventListener('click', e => {
    e.preventDefault();
    makeTable();
   
});

//create dynamic table
function makeTable() {
    // table.remove();
    console.log("Calculating Table");
    console.log("Min X: " + tableRange[0] + " Min Y: " + tableRange[1] + " Max X " + tableRange[2] + " Max Y " + tableRange[3]);
    var y = tableRange[1];
    var rowIndex = 1;
    var colIndex = 0;
    var row;
    var headerRow;
    var cell;
    var header = table.createTHead();
    
    //create header
    headerRow = header.insertRow(0);
    for (let x = tableRange[0]; x <= tableRange[2]; x++){
        cell = headerRow.insertCell(colIndex);
        cell.innerHTML = x;
        colIndex++;
    }

    //Calculate table contents
    while (y <= tableRange[3]) {
        colIndex = 0;
        console.log("New Row: " +y);
        row = table.insertRow(rowIndex);
        for (let x = tableRange[0]; x <= tableRange[2]; x++){
            cell = row.insertCell(colIndex);
            cell.innerHTML = y * x;
            // console.log("Row " + x+ " Column " + y);
            // console.log("Resut" + (x * y));
            colIndex++;
        }
        y++;
        rowIndex++;
    }

    // row = table.insertRow(0);
    // cell = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // cell.innerHTML = "Hi";
    // cell2.innerHTML = "world";
}