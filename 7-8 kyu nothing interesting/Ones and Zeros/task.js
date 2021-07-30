const binaryArrayToNumber = arr => {
    var xarisxi=arr.length-1;
    var x = 0;
    for (i of arr){
        i=i*2**xarisxi;
        xarisxi--;
        x+=i;
    }
    return x;
}

console.log(binaryArrayToNumber([1,1,0,1,0,1]));