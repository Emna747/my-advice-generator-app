let advicenumber = document.getElementsByClassName("advicenumber");
let advicetext = document.getElementsByClassName("advicetext");

const diceBtn = document.getElementById("advicegenerator")

.addEventListener("click", getAdvice);

function getAdvice(){
    fetch("https://api.adviceslip.com/advice", {cache: "no-cache"}) 
    .then(response => response.json())
    .then((data) => {
        advicenumber.innerHTML = data.slip.id;
        advicetext.innerHTML = `“${data.slip.advice}”`;
      });
}
