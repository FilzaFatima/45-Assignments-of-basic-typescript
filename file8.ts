//Task # 40
function makealbum(artist:string,title:string):{artist: string;title:string} {
    const album ={
        artist: artist.charAt(0).toUpperCase()+ artist.slice(1) ,title:title.charAt(0).toUpperCase() + title.slice(1)
    }
    return album;
}
let album= makealbum('Ali','Light')
console.log(album)
album= makealbum("Bilal",'Red Wave')
console.log(album)
album=makealbum("Hamza", "seenbreeze")
console.log(album)