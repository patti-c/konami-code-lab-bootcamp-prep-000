const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  const key = e.key
  
  if(key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert("You win!")
    }
  }
}
