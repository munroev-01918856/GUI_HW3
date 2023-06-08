var minX;
var minY;
var maxX;
var maxY;
var error=false;
var errmsg;

const btn = document.querySelector('.btn');

function setValues() {
    minX = document.querySelector("#minX");
    minY = document.querySelector("#minY");
    maxX = document.querySelector("#maxX");
    maxY = document.querySelector("#maxY");
    console.log(maxX.value);
    validate(minX);
    validate(minY);
    validate(maxX);
    validate(maxY);
    function validate(userinput) {
        if((userinput < 1) || (userinput > 50)){
            error = true;
            errmsg+="Please input number between 1-50"
        }
    }
    if (error) { console.log(errmsg); }
}


btn.addEventListener('click', e => {
    e.preventDefault();
    setValues();
  });