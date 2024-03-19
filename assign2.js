function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < item.length; i++) {
        console.log("-".concat(item[i]));
    }
}
console.log("Enjoy you sandwich,Filza Fatima");
sandwich('Egg', 'Ketchup', 'Cheese');
sandwich('Chicken', 'Mayo Sause');
sandwich('Chicken', 'Mayo', 'Tomatoes');
