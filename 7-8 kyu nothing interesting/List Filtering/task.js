// List Filtering
function filter_list(l) {
    if (Array.isArray(l) === false) {
      throw new Error ("must be an array");
    }else{
      var sia = [];
      for (i of l ){
        if (typeof i === 'number'){
          sia.push(i);
        }
      }
      return sia;
    }
    
  }