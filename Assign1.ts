//Task # 43
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The Great'; // Added space before 'The Great'
    }
}

function show_magician(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

const magicians2: string[] = ['Usman', 'Haseeb', 'Wajahat'];
make_great(magicians2);
show_magician(magicians2);