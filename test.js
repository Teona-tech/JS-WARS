let answer = function(num){
    var num = (num > 0)?  "num is more than 0":
    (num < 0)? "num is less than 0":
    (num === 0)? "num eqauls 0":
    "what the fuck";
    return num
}

// console.log(answer("fck u"));

switch (2){
    case 1:
    case 2:
        console.log('fuck u');
        
    case "2":
        console.log("aha")
        break;
}

switch ("2"==2){
    case true: console.log("yes")
    break;
    case false: console.log('no');
    break;
}