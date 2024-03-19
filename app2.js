//Task # 24
var car = 'subaru';
var age = 20;
var numbers = [1, 2, 3, 4];
//test 1. Inequality
console.log("Is car !=='subaru'? I predict False.");
console.log(car !== 'subaru');
//lowercase function tests
//test 1.lowercase conversion true
console.log("Is car.tolowercase()=='subaru'? I predict true");
console.log(car.toLowerCase() == 'subaru');
//test 2.lower case conversion false
console.log("Is car.tolowercase()==='subaru'? I predict false");
console.log(car.toLowerCase() === 'subaru');
//numerical test
//test 1.equality
console.log("Is age == 20?I predict true");
console.log(age == 20);
//test 2.inequality
console.log("Is age != 20?I predict true");
console.log(age != 30);
//test 3.greater than
console.log("Is age > 20?I predict true");
console.log(age > 20);
//test 4.less than or equal
console.log("Is age <= 20?I predict true");
console.log(age <= 20);
//logical operators
//test 5.And 
console.log("Is age >20 && age 30?I predict false");
console.log(age > 20 && age < 30);
//test 6.Or
console.log("Is age >18 || age 30?I predict true");
console.log(age > 18 || age < 30);
//arrays test
//test 1. in array
console.log("Is 8 in number?I predict true");
console.log(8 in numbers);
//test 2. not in array
console.log("Is ?I predict true");
console.log(7, not in numbers);
