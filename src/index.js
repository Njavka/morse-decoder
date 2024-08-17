const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const STRING = expr.match(/.{1,10}/g);
    let decodedString = "";
    for (let part of STRING) {
      if (part === "**********") {
        // Если часть равна '**********', заменяем на пробел
        decodedString += " ";
      } else {
        // Удаляем начальные нули
        let zerosDelete = part.replace(/^0+/, "");
        // Заменяем '10' на '.' и '11' на '-'
        let morseString = zerosDelete.replace(/10/g, ".").replace(/11/g, "-");
        // Декодируем строку Морзе
        decodedString += MORSE_TABLE[morseString];
      }
    }

    return decodedString;
}

module.exports = {
    decode
}