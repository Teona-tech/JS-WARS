function find_symbol(letter,sentence){
    let amount = 0;
    sentence = sentence.split("")
    while (sentence.includes(letter)){
        let indexa = sentence.indexOf(letter);
        sentence.splice(indexa,1);
        amount+=1;
    }
    return amount;

}



function XO(str) {
    let x =find_symbol("x",str) + find_symbol("X",str);
    let o = find_symbol("o",str) + find_symbol("O",str);


    return (x===o ? true : false);


}


console.log(XO("XOXo"));
