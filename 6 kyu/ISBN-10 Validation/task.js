function validISBN10(isbn) {
    let answer =[];
    isbn = isbn.split("")
    if (isbn.length !=10){
        return false;
    }

    if (isbn[9]==="X"){
        isbn[9]=10;
    }
    for ( i in isbn){
        
        if (typeof Number(isbn[i]) != "number"){
            return false;
        }
        i = Number(isbn[i])*(Number(i)+1);
        answer.push(i)

    }
    return  answer.reduce((a,b)=> a+b,0) % 11 === 0 ? true: false;
}


console.log(validISBN10("1112223339"));