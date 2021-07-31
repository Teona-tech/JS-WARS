function find_symbol(letter,sentence){
    var sent = [...sentence]

    let amount = 0;
    while (sent.includes(letter)){
        let indexa = sent.indexOf(letter);
        sent.splice(indexa,1);
        amount+=1;
    }
    return amount;

}
function solution(string) { 
    string=string.split("");
    var sia = {}
    for (i of string){
        if (i === i.toUpperCase()){
            sia[i] = find_symbol(i,string);

        }
    }
    for (var key in sia){
        var values =[];
        if (string.includes(key)){
            for (i in string){
                if(string[i]===key){
                    values.push(i)
                }

            }
            values.forEach((e)=>string.splice(string.indexOf(key,e),0," "))

            

            
        }
    }

    return string.join("");
}

console.log(solution("beooTeoTeonaTeona"));

