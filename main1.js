//Task # 2
//upper case
var Name = "filza fatima";
var uppercase = Name.toUpperCase();
console.log(uppercase);
//lower case
var lowercase = Name.toLowerCase();
console.log(lowercase);
//title case
var words = Name.split("");
var titlecase = "";
for (var i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + "";
}
console.log(titlecase);
