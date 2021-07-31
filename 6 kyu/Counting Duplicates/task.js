function amount(letter,sentence){
    var sentence = sentence.toLowerCase();

    var sent = [...sentence]
    let amount = 0;
    while (sent.includes(letter)){
        let indexa = sent.indexOf(letter);
        sent.splice(indexa,1);
        amount+=1;
    }
    return amount;

}




function duplicateCount(text){
    var sia = {}
    for (i of text){
        if (amount(i,text) > 1){
            sia[i]=amount(i,text)

        }
    }

    return Object.keys(sia).length;
}
