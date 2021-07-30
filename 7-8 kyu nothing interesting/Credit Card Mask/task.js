String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function maskify(cc) {
   if (cc.length > 4){
       cc.split("");
       for (var i = 0 ; i < cc.length-4;i++){
           cc=cc.replaceAt(i,"#");
       }

   }else if (cc.length === 0){
       cc="";
   }else if (cc.length < 4){
   }
   return cc;
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));