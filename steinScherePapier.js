console.log(" ");
console.log("***************** Stein, Schere, Papier **********************");
console.log(" ");
const eingabe = process.argv.slice(2);
// oder
// const [, , ...userInput] = process.argv;
// console.log(eingabe);
// Eingabe ganzer Sätze mit Anführungstrichen (script.js "Ein Satz" 42 toll);
// of(!Number.isFinite(parsedNumber)){ } also nicht nan oder anderer Var Type
// process.exti(1); geht um Process zu beenden

if (eingabe.length !== 1) {
  console.log(
    "Bitte das Script mit einem Wort aufrufen ('stein', 'schere' oder 'papier')"
  );
  return;
}
const spielerEingabe = eingabe[0].toLowerCase();
console.log(`Du hast "${spielerEingabe}" gewählt`);

const randomValue = Math.floor(Math.random() * 3);
let computerZug = ["stein", "schere", "papier"];
computerZug = computerZug[randomValue];
console.log(`Der Computer hat "${computerZug}" gewählt`);

console.log(" ");
console.log("ERGEBNIS:");

if (computerZug === spielerEingabe) {
  console.log("Ein Unentschieden");
} else if (computerZug === "stein" && spielerEingabe === "schere") {
  console.log("Du hast verloren");
} else if (computerZug === "schere" && spielerEingabe === "papier") {
  console.log("Du hast verloren");
} else if (computerZug === "papier" && spielerEingabe === "stein") {
  console.log("Du hast verloren");
} else {
  console.log("Du hast gewonnen");
}
