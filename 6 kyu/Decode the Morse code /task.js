var MORSE_CODE = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
};

decodeMorse = function(morseCode){
    morseCode=morseCode.trim();
    morseCode = morseCode.split(" ")
    let str = ""
    var amount=0;
    for (i of morseCode){
        if (i in MORSE_CODE){
            str += MORSE_CODE[i]

        }else{
            amount+=1
            if (amount%2===0){
                str +=" "
            }
        }
    }
    return str
}


console.log(decodeMorse("."));
