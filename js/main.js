let btnYes = document.getElementById("btnYes");
let btnNo = document.getElementById("btnNo");
let btnYes2 = document.getElementById("btnYes2");
let btnNo2 = document.getElementById("btnNo2");
let questions = document.getElementById("questions");
let questions2 = document.getElementById("questions2");
let result = document.getElementById("result");
let timer = document.getElementById("timer");
let counter = document.getElementById("counter");
let result2 = document.getElementById("result2");
let count = 1;
let count2 = 60;
let count3 = 60;

counter.innerHTML = `02:00`;
let timing = setInterval(function () {
  count2--;
  counter.innerHTML = `${`0` + count}:${count2 < 10 ? `0${count2}` : count2}`;
  if (count2 < 1) {
    count -= 1;
    count2 = count3;
    if (count < 0) {
      clearInterval(timing);
    }
  }
}, 1000);

btnYes.addEventListener("click", function () {
  questions.style.display = "none";
  questions2.style.display = "block";
});
btnNo.addEventListener("click", function () {
  questions.style.display = "none";
  questions2.style.display = "block";
});
btnYes2.addEventListener("click", function () {
  result.style.display = "block";
  questions2.style.display = "none";
});
btnNo2.addEventListener("click" , function(){
    result2.style.display = "block"; 
  questions2.style.display = "none";
})