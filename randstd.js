const student = [
	"Abhinesh",
	"Barath",
	"You",
	"Harshavardhini",
	"Madhu",
	"Pravit:O",
	"Rahul",
	"Sanjay",
	"Sarvanan",
	"Shreyeshkar",
	"Srithan",
	"Karthik",
	"Sushmitha",
	"Vignesh",
	"Navin",
	"Naveen",
	"Kamesh:O",
	"Vishnu",
	"Netha",
	"Dedeepya",
	"Harini",
	"You",
	"Venkat",
	"Jaypreeth",
	"Purenjay",
	"Drona",
	"Mukesh"
];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
var num = getRndInteger(0,26);
console.log(num);
console.log(student[num]);
document.getElementById("randstd").innerHTML = "<b>Random person of the second: " + student[num].toString() + "</b>";
