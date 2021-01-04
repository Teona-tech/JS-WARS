function tribonacci(signature,n){
    var length = signature.length;
    if (n===0){
        return [];
    }else if (n === 1){
        return [signature[0]];
    }else{
        for (var i = 0; i < n-length; i++){
            signature.push(signature[i]+signature[i+1]+signature[i+2]);
        }
        return signature;

    }
   
}

console.log(tribonacci([1,1,1],10));