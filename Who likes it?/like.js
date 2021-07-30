function Likes(names) {
    switch (names.length){
        case 1: return names[0] + ' likes this';
        case 2: return names[0] + ' and ' + names[1] + ' like this';
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
        default: return names.length > 3 ? names[0] + ', ' + names[1] + ' and ' + (names.length - 2).toString() + ' others like this' : 'no one likes this';
    }
}


