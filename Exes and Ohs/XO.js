function XO(str) {
    var z = str.toLowerCase();
    var x = z.split("x").length;
    var o = z.split("o").length;
    return x == o;
}

