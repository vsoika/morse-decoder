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
        let partOfString = [];
        let result = [];
    
        for (let i = 0 ; i < expr.length; i += 10) {
            partOfString.push(expr.substr(i, 10));
        }
        
        for (let j = 0 ; j < partOfString.length ; j ++) {
            let decodeToMorse = partOfString[j]
                .replace(/11/gi, '-')
                .replace(/10/gi, '.')
                .replace(/0/gi, '')
                
            function findKey (key){
                return decodeToMorse === key;
            }
            let morseKey = Object.keys(MORSE_TABLE).find(findKey);
            let decodeToEnglish = MORSE_TABLE[morseKey];
    
            result.push(decodeToEnglish || ' ');
    
    }
        return result.join('');
    }


module.exports = {
    decode
}