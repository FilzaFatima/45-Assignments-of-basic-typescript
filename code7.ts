//Task # 18
//seeing in the world:thinking of atleast five places in the world you'd like to visit.
//store a location in an array.make sure the array is not in alphabetical order.
//print your array in its original order
let places:string[]=['Hunza','Turkey','Egypt','Maldives','Delhi']
console.log('original:' + places);
//print your array in alphabetical order without modifying the actual list.
console.log('copy'+ [places].sort());
//show that your array is still in its original order by printing it.
console.log('original:'+places);
//print your array in a reverse alphabetical order without changing the order of the original list.
console.log('copy'+[...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log('copy:' +places.sort().reverse())
//reverse the order of your list.print the array to show that its order has changed.
console.log('original:'+ places.sort());
//reverse the order of your list again.print the list to show it's back to it's original order.
console.log('original:' + places.sort().reverse());
//sort your array so it's stored in alphabetical order,print the array to show that its's order has been changed. 
console.log('copy' +[places].sort());