//Task # 42
function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " The Great");
    }
    return greatMagicians;
}

function show_magician(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

const magicians3: string[] = ['Usman', 'Haseeb', 'Wajahat'];
const greatMagicians = make_great(magicians3);
show_magician(magicians3);
show_magician(greatMagicians);