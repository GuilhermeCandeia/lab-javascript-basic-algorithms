// Iteration 1: Names and Input
let hacker1 = "Guilherme";
let hacker2 = "Kamila";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let hacker1InCaps = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1InCaps += hacker1[i].toUpperCase();

  if (i !== hacker1.length - 1) hacker1InCaps += " ";
}

console.log(`hacker1InCaps: ${hacker1InCaps}`);

let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  if (navigatorReversed.length !== hacker2.length - 1)
    navigatorReversed += hacker2[i];
  else navigatorReversed += hacker2[i].toUpperCase();
}

console.log(`navigatorReversed: ${navigatorReversed}`);

if (hacker1 < hacker2) console.log("hacker1 goes first");
else if (hacker1 > hacker2) console.log("hacker2 goes first");
else console.log("You have same names");
