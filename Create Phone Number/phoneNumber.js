var numbers = [1,2,3,4,5,6,7,8,9,0];

function createPhoneNumber(numbers){
    if (Array.isArray(numbers) === false){
        throw Error("must be an array");
    }

    if (!numbers.every(function(e){return Number.isInteger(e)})){
        throw Error ("array must contain integers");
    }
    
    if (numbers.length !== 10){
        throw Error("length must me 10");

    }
   
    numbers.unshift("(");
    numbers.splice(4,0,") ");
    numbers.splice(8,0,"-");

    return numbers.join("");
    
}



createPhoneNumber(numbers);

