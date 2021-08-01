let answer = function(num){
    var num = (num > 0)?  "num is more than 0":
    (num < 0)? "num is less than 0":
    (num === 0)? "num eqauls 0":
    "this is default";
    return num
}

// console.log(answer("fck u"));

switch (2){
    case 1:
    case 2:
        console.log('2');
        
    case "2":
        console.log("2")
        break;
}

switch ("2"==2){
    case true: console.log("yes")
    break;
    case false: console.log('no');
    break;
}