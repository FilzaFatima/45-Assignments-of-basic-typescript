//Task # 16
let GuestList:string []= ['Sara','Zoha','Arfa','Simran']
let notPresent:string='Sara'
let newGuest:string='Alizey'
GuestList[1] = newGuest
for(let i=0; i<GuestList.length;i++){
    console.log('Dear'+ GuestList[i]+',\n Join us for a delicious dinner at our place tonight! \n\n Thankyou');

}
GuestList.unshift('Areesha','Noor','Anie')
for(let i=0; i<GuestList.length;i++){
    console.log('Dear' + GuestList[i]+',\n Join us for a delicious dinner at our place tonight! \n\n Thankyou');
}