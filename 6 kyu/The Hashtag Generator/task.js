function generateHashtag (str) {
    if (str.trim()===""){
        return false;
    }
    var returned_arr =[];
    str = str.toLowerCase();
    str=str.split(" ");
    for (i of str){
        if (i.trim()!=""){
            i =i.replace(i[0],i[0].toUpperCase());
            returned_arr.push(i);
        }
        
        
    };
    returned_arr.unshift("#");
    return returned_arr.join("").length <= 140 ? returned_arr.join("") : false;
}



console.log(generateHashtag("Codewars        hi"))