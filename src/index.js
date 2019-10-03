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
     var array = []
   var lastPos = 10;
   for (var i = 0; i < expr.length; i = i + 10) {
    array.push(expr.slice(i, lastPos));
    lastPos = lastPos + 10;
   }

   for (var j = 0; j < array.length; j++) {
    if (/\*\*\*\*\*\*\*\*\*/.test(array[j])) {
      array[j] = array[j].replace(/\*\*\*\*\*\*\*\*\*\*/,' ')
    } else {
      array[j] = array[j].replace(/10/g, '.');
      array[j] = array[j].replace(/11/g, '-');
      array[j] = array[j].replace(/00/g, '');
    }
   }

   for (var a = 0; a < array.length; a++) {
    if (MORSE_TABLE[array[a]]) {
      array[a] = MORSE_TABLE[array[a]];
     } else {
      array[a] = ' ';
     }
    }
    array = array.join('');
    
   return array;
 };

module.exports = {
    decode
};
