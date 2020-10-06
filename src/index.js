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
    let result = '';   
    let abc = [];
    for (let i = 0; i < expr.length / 10; i++) {
          abc.push(String(Number(expr.slice(i * 10, i * 10 + 10))));
    }   
    let a = [];
    let b = [];
    for (let i = 0; i < abc.length; i++) {       
          a[i] = [];
      b[i] = '';
      if (!isNaN(abc[i])) {
                  for (let j = 0; j < abc[i].length / 2; j++) {
                          a[i].push((abc[i].slice(j * 2, j * 2 + 2)) === '10' ? '.' : '-');
            b[i] += a[i][j];
          }
      } else {
                  a[i].push(' ');
          b[i] = ' ';
        }
    }   
    for (let i = 0; i < b.length; i++) {
          if (b[i] !== ' ') result += MORSE_TABLE[b[i]];
      else result += b[i];
    } 
    return result;
}

module.exports = {
    decode
}