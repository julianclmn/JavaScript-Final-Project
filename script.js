let magicalArray = [];

for (let i = 1; i <= 15; i++){
  magicalArray.push(`./8ball/b${i}.jpg`);
}

//console.log(magicalArray)
let answers = document.createElement("img");

let answersDiv = document.getElementById('answers');

answersDiv.appendChild(answers);

const behavior =  () => {
  let random =  Math.floor( Math.random() * 15);

  answers.src = magicalArray[random];
}

//console.log(behavior())
<<<<<<< HEAD:SCRIPT.JS

//Final
=======
>>>>>>> 51ca4d6fe0d60d766eda3653ee597762ecfcc4ae:script.js
