//Task # 21
interface item{
    name:string
    price:number
}
//crete two objects
const Book:item={
    name:'English Dictionary',
    price:450
}
const Mango:item={
    name:'Mango',
    price:230
}
console.log(`Book name: ${Book.name}, Price:$ ${Book.price}`);
console.log(`Mango: ${Mango.name},Price:$ ${Mango.price}`);
