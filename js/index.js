// prompt 
const nameGuest = prompt("What is your name?")
nameGuest;

// BMI Calculator

// const weight = document.querySelector('weight');
// const height = document.querySelector('height');
//

const button = document.getElementById('buttonCalc');

button.addEventListener("click", function bmiCalc() {
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const bmiCalc = weight / (height ** 2);

  alert("Your BMI is " + bmiCalc);

})

// Intro Message Click

const clickMe = document.getElementById('intro_message');

clickMe.onclick = function popUp() {
  alert("hello and welcome...");
}

clickMe.innerHTML = 'Click me, ' + nameGuest + '!';


// Modal One

const read_btn = document.querySelector('#read_btn');
const modal_cont = document.querySelector('.modal_container');
const closeBtn = document.querySelector('.close');

read_btn.onclick = function() {
  modal_cont.className = 'modal_show';
};

closeBtn.onclick = function () {
  modal_cont.className = 'modal_container';
}

// Modal Two
const read_btnTwo = document.querySelector('#read_btnTwo');
const modal_contTwo = document.querySelector('.modal_containerTwo');
const closeBtnTwo = document.querySelector('.closeTwo');

read_btnTwo.onclick = function() {
  modal_contTwo.className = 'modal_showTwo';
};

closeBtnTwo.onclick = function () {
  modal_contTwo.className = 'modal_containerTwo';
}


// Modal Three

const read_btnThree = document.querySelector('#read_btnThree');
const modal_contThree = document.querySelector('.modal_containerThree');
const closeBtnThree = document.querySelector('.closeThree');

read_btnThree.onclick = function() {
  modal_contThree.className = 'modal_showThree';
};

closeBtnThree.onclick = function () {
  modal_contThree.className = 'modal_containerThree';
}
