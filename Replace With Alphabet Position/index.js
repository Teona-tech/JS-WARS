//Replace With Alphabet Position
function alphabetPosition(text) {
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    var data = {};
    var index = 0;
    for (i of letters){
        index++;
        data[i]=index;
    }

    var asoebi = Object.keys(data);
    var dashlili =(text.split(""));
    var dasabrunebeli = "";

    for (each of dashlili){
        each = each.toLowerCase()

        if (asoebi.includes(each)){
            dasabrunebeli+=data[each]+" ";
        }
    }
    return dasabrunebeli;

    
}
var texta = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(texta));