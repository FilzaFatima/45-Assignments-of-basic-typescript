function sandwich(...item:string[]):void{
    console.log("Sandwich order:")
    for (let i=0; i< item.length; i++){
        console.log(`-${item[i]}`)
    }

}
console.log("Enjoy you sandwich,Filza Fatima")
sandwich('Egg','Ketchup','Cheese')
sandwich('Chicken','Mayo Sause')
sandwich('Chicken','Mayo','Tomatoes')