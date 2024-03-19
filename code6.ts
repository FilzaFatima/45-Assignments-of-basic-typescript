//Task # 17
let Guestlist:string []= ['Sara','Zoha','Arfa','Simran']
let NotPresent:string='Sara'
let NewGuest:string='Alizey'
Guestlist[1] = NewGuest
Guestlist.unshift('Areesha','Noor','Anie')
console.log('\n Unfortunately we can not  arrange big table, Only two people are allowed.');
while(Guestlist.length>2){
let remove_guest = Guestlist.pop()
console.log(`Sorry Mam!.${remove_guest} you are not invited for dinner.`);
}
for(let i=0 ; i<Guestlist.length; i++ ){
    console.log('Dear' + Guestlist[i] + '\n Yes you are still invited om tomorrow dinner \nThankyou\n');
}
Guestlist.slice(0,2)