function digital_root(n) {
    if (n < 0){
      throw new Error ("must not be less than 0 ");
    }else {
      var sum = 0;
      n = n.toString().split("");
      console.log(n);
      for (i of n){
        sum += parseInt(i);
      }
    }
    if(sum>9){
      return digital_root(sum);
    }else{
      return sum
    }
  }