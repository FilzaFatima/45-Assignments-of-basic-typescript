//Task # 3

//upper case
let Name:string ="filza fatima"
let uppercase: string= Name.toUpperCase()
console.log(uppercase);
//lower case
let lowercase:string= Name.toLowerCase()
console.log(lowercase);
//title case
let words:string[]= Name.split("")
let titlecase:string="";
for(let i =0; i < words.length;i++){
    titlecase +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+"";
}
console.log(titlecase);