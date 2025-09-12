console.log("");
console.log("********* Caesar Cipher - Verschlüsselung *********");
console.log("");

const alphabet = [
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
];

// Ausgabe Array
let ausgabe = [];

let eingaben = process.argv.slice(2);
const text = eingaben[0].toLowerCase();
const shift = eingaben[1];

if (text === undefined || shift === undefined) {
  console.log("Bitte einen Satz in Anführungstrichen eingeben und eine Zahl");
  return;
}

console.log(`Ihre Eingabe: ${text}`);
console.log(`Buchstaben verschieben um: ${shift}`);

for (letter of text) {
  verschlüsseln(letter, alphabet, shift);
}

function verschlüsseln(letter, alphabet, shift) {
  /* HIER VERSCHLÜSSELUNG */
  const geshifted = () => {
    let stelle = parseInt(alphabet.indexOf(letter));

    // Falls länger als Alphabet-Länge, gehts wieder bei "a" los
    const shifting =
      (stelle + parseFloat(shift) + alphabet.length) % alphabet.length;
    // So kanns überlaufen:
    // const shifting = stelle + parseFloat(shift);

    return alphabet[shifting];
  };

  if (letter === " ") {
    ausgabe.push(" ");
  } else {
    ausgabe.push(geshifted());
  }
}

let ausgabeToString = ausgabe.toString().replaceAll(",", "");
console.log(ausgabeToString);
