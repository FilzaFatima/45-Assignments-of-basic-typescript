//Task # 40
function makealbum(artist, title) {
    var album = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1), title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return album;
}
var album = makealbum('Ali', 'Light');
console.log(album);
album = makealbum("Bilal", 'Red Wave');
console.log(album);
album = makealbum("Hamza", "seenbreeze");
console.log(album);
