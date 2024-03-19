//Task # 33
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var numbers = Numbers_1[_i];
    if (numbers == 1) {
        console.log("".concat(Numbers, " st"));
    }
    else if (numbers === 2) {
        console.log("".concat(Numbers, "nd"));
    }
    else if (numbers === 3) {
        console.log("".concat(Numbers, "rd"));
    }
    else if (numbers === 4) {
        console.log("".concat(Numbers, "th"));
    }
    else if (numbers === 5) {
        console.log("".concat(Numbers, "th"));
    }
}
