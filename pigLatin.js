console.log("");
console.log("****** English Pig Latin Translator *****");
console.log("");
let eingabe = process.argv.slice(2);
eingabe = eingabe[0];
console.log(`Deine Eingabe: ${eingabe}`);
console.log("");

// Einzelne Wörter umwandeln *********************
function wortUmwandeln(wort) {
  console.log("Wort: " + wort);

  const vokale = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  if (vokale.includes(wort[0])) {
    wort = wort.slice(1) + wort[0] + "way";
  } else {
    wort
      .toLowerCase()
      .split("")
      .forEach((buchstabe, i) => {
        if (vokale.includes(buchstabe)) {
          // index des Vokals
          // console.log(i);
          wort = wort.slice(i) + wort.slice(0, i) + "ay";
        }
      });
  }

  return wort;
}

// Array mit Wörtern der Eingabe:
let woerter = eingabe.split(" ");
// Array für umgewandelte Wörter
let ausgabeTextArray = [];

// Jedes einzelne Wort umwandeln:
woerter.forEach((wort) => {
  // Funktion zur Umwandlung aufrufen und zurück pushen zur Ausgabe:
  ausgabeTextArray.push(wortUmwandeln(wort));
});

// Array mit Wörtern zu String, Ausgabe:
let ausgabeString = "";
ausgabeTextArray.forEach((element) => {
  ausgabeString += element + " ";
});

console.log("");
console.log(`Umgewandelt: ${ausgabeString}`);
