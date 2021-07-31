function weird_word(string){
    str = string.split("");
    for (i in str){
    
        if (i % 2 === 0){
            str[i]=str[i].toUpperCase();
            
        }else{
            str[i]=str[i].toLowerCase();
    
        }
    }
    return str.join("")
}

function toWeirdCase(sent){
    var new_sia = []
    var sent = sent.split(" ");

    sent.forEach(element => { 
        new_sia.push(weird_word(element));
        new_sia.push(" ")
    });
    
    if (new_sia[new_sia.length-1]=" "){
        new_sia.pop();
    }
   
    return new_sia.join("")

}


console.log(toWeirdCase("hello"));


