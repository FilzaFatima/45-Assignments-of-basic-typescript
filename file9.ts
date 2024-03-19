//Task # 41
function show_magician(magicians: string[]): void{
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase()+ magician.slice(1));
    }
}
const magician:string[]=["Ali","Hamza","Bilal"];
show_magician(magician)
