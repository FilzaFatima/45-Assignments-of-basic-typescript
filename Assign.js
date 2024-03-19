//Task # 42
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " The Great");
    }
    return greatMagicians;
}
function show_magician(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians3 = ['Usman', 'Haseeb', 'Wajahat'];
var greatMagicians = make_great(magicians3);
show_magician(magicians3);
show_magician(greatMagicians); // Corrected to use greatMagicians instead of magicians2
