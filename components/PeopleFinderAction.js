const filterPronouns = [
  "i",
  "he",
  "his",
  "she",
  "her",
  "we",
  "you",
  "it",
  "its",
  "they",
  "them",
  "their",
];

const minLength = 3;

export default function PeopleFinder(text) {
  const peoplesSet = new Set();
  text += ".";
  let currentWord = "";
  // checkNameState = {
  //   0: 'not name',
  //   1: 'name'
  // }
  let checkNameState = 0;
  let multiWordName = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // check if current word is not name and between A-Z
    if (checkNameState === 0 && char >= "A" && char <= "Z") {
      checkNameState = 1;
      currentWord += char;
    }
    // check if current word is name and (between A-Z or a-z)
    else if (
      checkNameState === 1 &&
      ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))
    ) {
      if (multiWordName) {
        checkNameState = 1;
        currentWord += char;
      } else {
        currentWord += char.toLowerCase();
      }
    }
    // check if current word is name and char is space and index + 1 less than text total length and next character is between A-Z
    else if (
      checkNameState === 1 &&
      char === " " &&
      i + 1 < text.length &&
      text[i + 1] >= "A" &&
      text[i + 1] <= "Z"
    ) {
      multiWordName = true;
      currentWord += char;
    } else {
      checkNameState = 0;
      // making sure only valid word is save
      if (
        !filterPronouns.includes(currentWord.toLowerCase()) &&
        currentWord !== "" &&
        currentWord.length > minLength
      ) {
        peoplesSet.add(currentWord);
      }
      currentWord = "";
      multiWordName = false;
    }
  }

  const names = Array.from(peoplesSet);
  return names;
}
