function spinWords(word){
   var answer =[];
   word=word.split(" ")
   for ( var i of word){
    if (i.length >= 5){
        answer.push(i.split("").reverse().join(""));
    }else{
        answer.push(i)
    }

   }
   
   
   return answer.join(" ");
}

console.log(spinWords("hello me shen teona"))

