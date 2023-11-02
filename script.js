//1
let dateOfBirth = "12/12/1995";

document.getElementById("1").innerHTML +=
  "მე დავიბადე" + " " + dateOfBirth + " " + "წელს";

//2
let myNoun = "ძაღლი";
let myAdjective = "დიდი";
let myVerb = "გაიქცა";
let myAdverb = "სწრაფად";

document.getElementById("2").innerHTML +=
  myAdjective + " " + myNoun + " " + myAdverb + " " + myVerb;

//3
let color = "red";

if (color == "red") {
  console.log(color + " " + "არის ჩემი საყვარელი ფერი");
} else {
  console.log(color + " " + "არ მომწონს");
}

//4
let number = 4;

if (number % 2 === 0) {
  console.log("არჩეული რიცხვი ლუწია");
} else {
  console.log("არჩეული რიცხვი კენტია");
}

//5
let userAge = prompt("Please enter your age");

if (userAge < 18) {
  alert("თქვენ არ ხართ სრულწლოვანი");
} else {
  alert("თქვენ ხართ სრულწლოვანი");
}
