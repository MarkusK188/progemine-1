const pets = document.querySelector("#pets2");
const txt = document.querySelector(".tekst");
let count = document.querySelector("#count");
const btn = document.querySelector("#button");

let score = 0;

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}


let number= getRandomInt(0, 5);

console.log(number);

let videod = ["https://youtu.be/umYkWE0-Zpg?si=34hryuMFZY_eimOW", "https://youtu.be/K40j-ZA5hsg?si=AeNmzR4sknb-oYFA","https://youtu.be/WU8GTsQPXBA?si=hujFtQp6hNx-_QE1","https://youtu.be/rgKEgDAhX_k?si=Dwfx0jOOPPtXyqqH","https://youtu.be/UkrQGfvb0PU?si=8ZuChvCJ5OfLOCXn"]





pets.addEventListener("click", ()=>{
	score++;
	console.log(score);
	count.textContent ="Count: " + score;
	console.log(number);
});

pets.addEventListener("mousedown", ()=>{
	pets.classList.add('.pets2')
})


button.addEventListener("click", ()=>{
	let number = getRandomInt(0, 5);
	window.open(videod[number]);
});


