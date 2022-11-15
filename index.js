const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstPassEl = document.getElementById("firstPass");
let secondPassEl = document.getElementById("secondPass");
let passGenButtonEl = document.getElementById("passGenButton");

passGenButtonEl.addEventListener("click", function () {
  firstPassEl.textContent = "";
  secondPassEl.textContent = "";
  for (let i = 0; i < 15; i++) {
    let randChar1 = characters[Math.floor(Math.random() * characters.length)];
    let randChar2 = characters[Math.floor(Math.random() * characters.length)];
    firstPassEl.textContent += randChar1;
    secondPassEl.textContent += randChar2;
  }
});

let handleCopyClick = document.querySelector("#copy-first");
handleCopyClick.addEventListener("click", async () => {
  let text = firstPassEl.textContent;
  try {
    await navigator.clipboard.writeText(`${text} `);
    alert(` ${text} copied to clipboard!`);
  } catch (err) {
    alert("Failed to copy: ", err);
  }
});

let handleCopyClick2 = document.querySelector("#copy-second");
handleCopyClick2.addEventListener("click", async () => {
  let text = secondPassEl.textContent;
  try {
    await navigator.clipboard.writeText(`${text} `);
    alert(` ${text} copied to clipboard!`);
  } catch (err) {
    alert("Failed to copy: ", err);
  }
});
